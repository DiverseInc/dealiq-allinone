# DealIQ Pro — All-in-One Broker Platform

A complete platform for real estate brokers and mortgage professionals.

## Features

- **Deals Pipeline** — Visual Kanban board for tracking deals
- **Property Management** — Listings, showings, property details
- **Mortgage Calculators** — Full calculator with amortization
- **AI Content Generators** — 23+ templates for marketing, scripts, etc.
- **Calendar & Clients** — CRM with scheduling
- **Dark Mode** — Full dark mode support
- **Mobile Responsive** — Works on all devices
- **White-label** — Custom branding for agencies

## Quick Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   cd broker-platform
   vercel --prod
   ```

4. Set environment variables:
   ```bash
   vercel env add STRIPE_SECRET_KEY
   vercel env add STRIPE_PUBLISHABLE_KEY
   ```

## Stripe Setup

1. Create a Stripe account at https://stripe.com
2. Get your API keys from Dashboard → Developers → API Keys
3. Create products and prices in Stripe Dashboard
4. Update `index.html` with your publishable key
5. Update `api/checkout.js` with your price IDs

## Local Development

```bash
npm install
npm run dev
```

## Project Structure

```
broker-platform/
├── index.html          # Landing page
├── app.html            # Main application
├── api/
│   └── checkout.js     # Stripe checkout API
├── vercel.json         # Vercel configuration
├── package.json        # Dependencies
└── README.md           # This file
```

## Customization

- Edit `index.html` to change landing page content
- Edit `app.html` to modify the main application
- Update colors in CSS variables at the top of each file

## Support

For issues or questions, contact: support@dealiqpro.com
