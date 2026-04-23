# ArticleIQ — Waitlist Landing Page

A high-end waitlist landing page for ArticleIQ — an AI-powered article intelligence engine that extracts semantic and numeric KPIs from any article URL and exports them as PDF reports or PowerPoint decks.

## ✦ Tech Stack

- **Next.js 14** (App Router, static export)
- **TypeScript**
- **CSS Modules** (no Tailwind — pure custom design system)
- **Google Fonts** (Bebas Neue · DM Serif Display · Space Mono)

---

## 🚀 Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📦 Build (Static Export)

```bash
npm run build
```

This generates a fully static site in the `/out` folder — ready for any static host.

---

## 🌐 Deploying to Your Custom Domain

### Option A: GitHub Pages + Custom Domain (Recommended)

1. **Push this repo to GitHub**
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/articleiq-waitlist.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repo → Settings → Pages
   - Set Source to **GitHub Actions**
   - The workflow in `.github/workflows/deploy.yml` will auto-deploy on every push to `main`

3. **Add your custom domain**
   - In Settings → Pages → Custom domain, enter your domain (e.g. `articleiq.com`)
   - Create a `CNAME` file in `/public` with just your domain:
     ```
     articleiq.com
     ```
   - In your domain registrar's DNS settings, add:
     ```
     Type: CNAME
     Name: www
     Value: YOUR_USERNAME.github.io
     ```
     Or for apex domain (no www):
     ```
     Type: A
     Name: @
     Values: 185.199.108.153
             185.199.109.153
             185.199.110.153
             185.199.111.153
     ```
   - Check "Enforce HTTPS" once DNS propagates (usually 10–60 min)

### Option B: Vercel (Even Easier)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Import your repo
3. Vercel auto-detects Next.js — just click Deploy
4. In Vercel dashboard → Domains → Add your custom domain
5. Follow their DNS instructions (usually a CNAME or A record)

> **Note**: If using Vercel, remove `output: 'export'` from `next.config.js` to get full SSR features and ISR.

### Option C: Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `out`
5. Add custom domain in Site settings → Domain management

---

## 🔌 Connecting a Real Waitlist Backend

The form in `components/WaitlistForm.tsx` currently uses a mock delay. To connect a real backend:

### Option 1: Resend + Airtable / Notion
Replace the mock in `handleSubmit` with a call to your API:

```ts
const res = await fetch('/api/waitlist', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, role }),
})
```

### Option 2: Mailchimp / ConvertKit Embed
Replace the form with their embed code.

### Option 3: Tally / Typeform
Replace the `<WaitlistForm />` section with a Tally embed.

---

## 🎨 Customization

| File | What to change |
|------|----------------|
| `app/layout.tsx` | Page title, meta description, OG tags |
| `components/Hero.tsx` | Main headline, stats, terminal output |
| `components/WaitlistForm.tsx` | Form fields, submission handler |
| `app/globals.css` | Color variables (`--gold`, `--ink`, `--paper`) |

---

## 📁 Project Structure

```
articleiq-waitlist/
├── app/
│   ├── globals.css         # Design system, fonts, cursor
│   ├── layout.tsx          # Root layout + metadata
│   └── page.tsx            # Page composition
├── components/
│   ├── Cursor.tsx          # Custom animated cursor
│   ├── Noise.tsx           # Film grain overlay
│   ├── Nav.tsx             # Sticky navigation
│   ├── Hero.tsx            # Full-screen hero + terminal
│   ├── Marquee.tsx         # Scrolling ticker
│   ├── HowItWorks.tsx      # 3-step process
│   ├── Features.tsx        # Feature grid
│   ├── OutputShowcase.tsx  # JSON output + exports
│   ├── WaitlistForm.tsx    # Email capture form
│   └── Footer.tsx          # Footer
├── .github/workflows/
│   └── deploy.yml          # Auto-deploy to GitHub Pages
├── next.config.js          # Static export config
└── package.json
```
