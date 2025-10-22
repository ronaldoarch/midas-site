# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/41d2f07c-53e2-4cc8-9ffc-9bcfcacf7295

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/41d2f07c-53e2-4cc8-9ffc-9bcfcacf7295) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?
## Webhook (API)

Endpoints:

- `POST /api/webhook`: recebe eventos do provedor (raw body). Se `WEBHOOK_SECRET` for definido e o provedor enviar cabeçalho `x-signature` ou `x-signature-256` (hex), a assinatura HMAC-SHA256 será validada.
- `GET /api/health`: checagem simples.

Configuração local:

1. Crie um arquivo `.env` na raiz com:

```
PORT=3001
WEBHOOK_SECRET=troque-este-segredo
```

2. Instale dependências e rode dev:

```
npm i
npm run dev:api
# ou rodar front + api juntos (front em :8080, api em :3001)
npm run dev:all
```

3. Durante o desenvolvimento, as requisições `http://localhost:8080/api/*` são proxied para `http://localhost:3001` via configuração do Vite.

Teste rápido (em outro terminal):

```
curl -i -X POST http://localhost:3001/api/webhook \
  -H "Content-Type: application/json" \
  -d '{"ping": true}'
```

Assinatura opcional (secret precisa bater com `.env`):

```
node -e "const c=require('crypto');const b=Buffer.from('{\"ping\":true}');const s=c.createHmac('sha256',process.env.WEBHOOK_SECRET||'troque-este-segredo').update(b).digest('hex');console.log(s)" \
  | set /p SIG="signature="
curl -i -X POST http://localhost:3001/api/webhook \
  -H "Content-Type: application/json" \
  -H "x-signature: %SIG%" \
  -d '{"ping": true}'
```

Produção/Deploy:

- Esse servidor é Node/Express simples. Para plataformas que não suportam processos adicionais (ex.: Vercel estático), você pode migrar o handler para Serverless Function (`/api/webhook`) seguindo o mesmo tratamento de raw body e verificação de assinatura.


Simply open [Lovable](https://lovable.dev/projects/41d2f07c-53e2-4cc8-9ffc-9bcfcacf7295) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
