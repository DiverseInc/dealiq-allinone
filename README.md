# DealIQ Pro — All-in-One Real Estate Platform

> The complete platform for real estate brokers, wholesalers, and investors.

## 🚀 Quick Start

**Live App:** https://dealiq.diverseindustriesinc.com/app

**Demo Login:**
- User: `admin`
- Password: `admin123`

## 📦 What's Included

### CRM & Pipeline
- ✅ Visual Deals Pipeline (Kanban)
- ✅ Client Management
- ✅ Calendar & Scheduling
- ✅ Document Storage
- ✅ Referral Tracking

### AI Tools
- ✅ 23 Content Generators
- ✅ Listing Descriptions
- ✅ Market Reports
- ✅ Follow-Up Sequences
- ✅ Scripts & Templates

### Calculators (13)
- ✅ Max Offer
- ✅ Wholesale
- ✅ Flip/Rehab
- ✅ Deal Score (1-100)
- ✅ 1% Rule
- ✅ Mortgage
- ✅ Cap Rate
- ✅ Cash-on-Cash
- ✅ ARV Estimator
- ✅ Comps Estimator
- ✅ Rental ROI
- ✅ BRRRR
- ✅ Development

### Forms (9)
- ✅ Property Intake
- ✅ Purchase Offer Letter
- ✅ Inspection Checklist
- ✅ Deal Analysis Sheet
- ✅ Seller Info Sheet
- ✅ Comparable Sales Sheet
- ✅ Wholesale Assignment
- ✅ Tenant Application
- ✅ Repair Estimate

### Outreach
- ✅ Buyer List Manager
- ✅ Direct Mail Templates (6)
- ✅ SMS Templates (3)
- ✅ Email Templates (3)

### Enterprise
- ✅ Team Management
- ✅ Analytics Dashboard
- ✅ API Access
- ✅ Custom Workflows
- ✅ White-Label Branding

## 💰 Pricing

| Plan | Price | Features |
|------|-------|----------|
| **Free** | $0 | 6 calculators, forms, buyer list, basic CRM |
| **Pro** | $29/mo | All 13 calculators, unlimited AI, team (5 users), analytics |
| **Enterprise** | $99/mo | Unlimited users, API, custom domain, dedicated support |

## 🛠️ Tech Stack

- **Frontend:** Single-page HTML/CSS/JS
- **Hosting:** Vercel (free tier)
- **Payments:** Stripe
- **Storage:** localStorage + IndexedDB
- **Charts:** Chart.js
- **Analytics:** Plausible

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd dealiq-allinone
vercel --prod
```

### Custom Domain

```bash
# Add domain
vercel domains add dealiq.diverseindustriesinc.com

# Verify DNS
vercel domains verify dealiq.diverseindustriesinc.com
```

### DNS Configuration

Add this CNAME record at your registrar:

| Type | Host | Value |
|------|------|-------|
| CNAME | `dealiq` | `cname.vercel-dns.com` |

## 💳 Stripe Setup

1. Create account at https://stripe.com
2. Get API keys from Dashboard → Developers → API Keys
3. Create products:
   - Pro Plan: $29/mo recurring
   - Enterprise Plan: $99/mo recurring
4. Add to Vercel:
   ```bash
   vercel env add STRIPE_SECRET_KEY
   ```
5. Update `api/checkout.js` with your Price IDs

## 📁 Project Structure

```
dealiq-allinone/
├── landing.html          # Landing page
├── broker.html           # Main CRM app
├── index.html            # Calculators hub
├── deals.html            # Deal tracking
├── forms.html            # Printable forms
├── buyers.html           # Buyer list manager
├── direct-mail.html      # Mail templates
├── sms-email.html        # SMS/Email templates
├── cap-rate.html         # Cap Rate calculator
├── cash-on-cash.html     # Cash-on-Cash calculator
├── one-percent.html      # 1% Rule calculator
├── mortgage.html         # Mortgage calculator
├── arv.html              # ARV Estimator
├── comps.html            # Comps Estimator
├── deal-score.html       # Deal Score analyzer
├── styles.css            # Shared styles
├── manifest.json         # PWA manifest
├── vercel.json           # Vercel config
├── api/
│   └── checkout.js       # Stripe checkout
└── package.json          # Dependencies
```

## 📊 Monetization Strategy

### Revenue Streams

1. **SaaS Subscriptions** (Primary)
   - Free → Pro → Enterprise
   - Monthly recurring revenue

2. **Lifetime Deals** (Launch)
   - $99 one-time payment
   - Good for initial cash flow

3. **Affiliate Marketing**
   - Real estate tools
   - Software recommendations
   - Hardware (OBD scanners, etc.)

4. **White-Label Licensing**
   - Sell to brokerages
   - Custom branding
   - Per-seat pricing

### Customer Acquisition

1. **Product Hunt Launch** — Day 1 traffic
2. **Reddit** — r/realestate, r/RealEstateInvesting
3. **LinkedIn** — Professional network
4. **Cold Email** — Direct outreach to brokerages
5. **SEO** — Blog content (future)
6. **Referral Program** — Viral growth

### Key Metrics to Track

| Metric | Target | Current |
|--------|--------|---------|
| Signups | 100/week | |
| Conversion Rate | 5% | |
| MRR | $1,000 | |
| Churn Rate | <5% | |
| NPS | >50 | |

## 📄 Legal

- [Terms of Service](./terms.html)
- [Privacy Policy](./privacy.html)

## 📞 Support

- **Email:** support@diverseindustriesinc.com
- **Twitter:** @DealIQPro
- **Website:** https://diverseindustriesinc.com

## 📝 License

© 2026 Diverse Industries Inc. All rights reserved.

---

*Built with ❤️ by Diverse Industries Inc.*
