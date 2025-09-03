# Inbox Assistant – Starter (Next.js + Tailwind + Stripe)

A minimal SaaS landing + Stripe subscription checkout. Perfect starting point for the "Inbox Assistant" idea.

## 1) Requirements
- Node.js 18+
- Stripe account (test mode is fine)

## 2) Install & Run
```bash
npm install
npm run dev
```
Visit http://localhost:3000

## 3) Configure Stripe
1. Create a **Product** in Stripe with a **recurring price** (e.g., $5/month).
2. Copy the **Price ID** (looks like `price_ABC123`).
3. Copy your **Secret Key** (looks like `sk_test_...`).

Create a `.env.local` file (not committed to git) based on `.env.example`:
```
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PRICE_ID=price_...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 4) Test Checkout
- Go to `/pricing` and click **Start Free Trial**.
- You'll be redirected to Stripe Checkout (test mode).
- Use Stripe's test card `4242 4242 4242 4242`, any future date, any CVC, any ZIP.
- On success you'll land on `/thank-you`.

## 5) Deploy
- Push to GitHub and import the repo into **Vercel**.
- Set the same env vars in **Vercel → Project → Settings → Environment Variables**.
- Set `NEXT_PUBLIC_SITE_URL` to your deployed URL, e.g. `https://your-site.vercel.app`.
- Redeploy.

## 6) Next Steps (for the actual "Inbox Assistant" app)
- Add authentication (e.g., NextAuth/Auth.js with Google + Microsoft providers).
- Set up Gmail API and/or Microsoft Graph with OAuth to read inbox metadata.
- Store user settings/rules in a DB (e.g., Postgres + Prisma).
- Add a scheduled job (Vercel Cron) to generate/send daily summaries.
- Send emails via Resend, Postmark, or SendGrid.

---

Made to be edited comfortably in Cursor.
