import 'dotenv/config'
import express from 'express'
import crypto from 'crypto'

const app = express()

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || ''
const META_APP_SECRET = process.env.META_APP_SECRET || process.env.APP_SECRET || ''
const META_VERIFY_TOKEN = process.env.META_VERIFY_TOKEN || process.env.VERIFY_TOKEN || ''
const META_PIXEL_ID = process.env.META_PIXEL_ID || ''
const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN || ''

// Use raw body to allow signature validation across providers
app.post('/api/webhook', express.raw({ type: '*/*' }), (req, res) => {
  try {
    const requestBodyBuffer = Buffer.isBuffer(req.body) ? req.body : Buffer.from(String(req.body || ''))

    // Meta signature (x-hub-signature-256) using APP SECRET, or fallback generic x-signature
    const metaSignature = req.header('x-hub-signature-256') || ''
    const genericSignature = req.header('x-signature') || req.header('x-signature-256') || ''
    if (META_APP_SECRET && metaSignature) {
      const computed = crypto.createHmac('sha256', META_APP_SECRET).update(requestBodyBuffer).digest('hex')
      const isValid = safeCompare(computed, metaSignature.replace('sha256=', ''))
      if (!isValid) {
        return res.status(400).json({ ok: false, error: 'Invalid Meta signature' })
      }
    } else if (WEBHOOK_SECRET && genericSignature) {
      const computed = crypto.createHmac('sha256', WEBHOOK_SECRET).update(requestBodyBuffer).digest('hex')
      const isValid = safeCompare(computed, genericSignature.replace('sha256=', ''))
      if (!isValid) {
        return res.status(400).json({ ok: false, error: 'Invalid signature' })
      }
    }

    const contentType = req.header('content-type') || ''
    let payload = null
    if (contentType.includes('application/json')) {
      try {
        payload = JSON.parse(requestBodyBuffer.toString('utf8'))
      } catch (e) {
        return res.status(400).json({ ok: false, error: 'Invalid JSON payload' })
      }
    } else {
      payload = requestBodyBuffer.toString('utf8')
    }

    // Basic logging for observability
    const eventId = req.header('x-event-id') || null
    const eventType = req.header('x-event-type') || null
    console.log('[Webhook] Received', { eventId, eventType, contentType, length: requestBodyBuffer.length })

    // TODO: Add your business logic here based on eventType/payload

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('[Webhook] Error:', error)
    return res.status(500).json({ ok: false })
  }
})

// Meta GET verification endpoint (hub.challenge)
app.get('/api/webhook', (req, res) => {
  const mode = req.query['hub.mode']
  const token = req.query['hub.verify_token']
  const challenge = req.query['hub.challenge']

  if (mode === 'subscribe') {
    if (META_VERIFY_TOKEN && token === META_VERIFY_TOKEN) {
      return res.status(200).send(String(challenge || ''))
    } else {
      return res.sendStatus(403)
    }
  }
  return res.sendStatus(400)
})

app.get('/api/health', (_req, res) => {
  return res.status(200).json({ ok: true })
})

// Track lead for Meta CAPI (optional). Accepts { eventId, source, url, referrer, whatsapp, timestamp }
app.post('/api/track/lead', express.json(), async (req, res) => {
  try {
    const { eventId, source, url, referrer, timestamp } = req.body || {}

    if (!META_PIXEL_ID || !META_ACCESS_TOKEN) {
      // Accept but skip server send if not configured
      return res.status(200).json({ ok: true, skipped: true })
    }

    const payload = {
      data: [
        {
          event_name: 'Lead',
          event_time: Math.floor(((timestamp as number) || Date.now()) / 1000),
          event_source_url: url,
          action_source: 'website',
          event_id: eventId,
          custom_data: {
            source,
            referrer,
          },
        },
      ],
    }

    const endpoint = `https://graph.facebook.com/v19.0/${encodeURIComponent(META_PIXEL_ID)}/events?access_token=${encodeURIComponent(META_ACCESS_TOKEN)}`
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const result = await response.json()
    if (!response.ok) {
      console.error('[CAPI Lead] Error:', result)
      return res.status(500).json({ ok: false, error: 'Meta CAPI error' })
    }
    return res.status(200).json({ ok: true, result })
  } catch (error) {
    console.error('[CAPI Lead] Exception:', error)
    return res.status(500).json({ ok: false })
  }
})

app.listen(PORT, () => {
  console.log(`[Webhook] Listening on http://localhost:${PORT}`)
})

function safeCompare(a, b) {
  const aBuf = Buffer.from(String(a))
  const bBuf = Buffer.from(String(b))
  if (aBuf.length !== bBuf.length) return false
  return crypto.timingSafeEqual(aBuf, bBuf)
}


