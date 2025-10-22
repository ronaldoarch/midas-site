export type LeadSource =
  | 'whatsapp_float'
  | 'hero_button'
  | 'cta_button'
  | string

export async function trackLeadClick(params: {
  source: LeadSource
  whatsappNumber?: string
}): Promise<void> {
  try {
    const eventId = generateEventId()
    // Fire Pixel se não desabilitado
    const disablePixel = ((import.meta as any).env?.VITE_DISABLE_PIXEL || '').toString() === 'true'
    if (!disablePixel) {
      try {
        // @ts-ignore
        const fbq = (window as any).fbq as undefined | ((...args: any[]) => void)
        if (typeof fbq === 'function') {
          fbq('track', 'Lead', {}, { eventID: eventId })
        }
      } catch {}
    }

    const endpoint = (import.meta as any).env?.VITE_LEAD_ENDPOINT || '/api/track/lead'
    const payload = {
      eventId,
      source: params.source,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      referrer: typeof document !== 'undefined' ? document.referrer : undefined,
      whatsapp: params.whatsappNumber,
      timestamp: Date.now(),
    }
    void fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {})
  } catch {
    // do nothing
  }
}

function generateEventId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    // @ts-ignore
    return (crypto as any).randomUUID()
  }
  return `${Date.now()}_${Math.random().toString(36).slice(2)}`
}


