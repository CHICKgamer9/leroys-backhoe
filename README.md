# Leroy's Backhoe & Plant Hire — draft website

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4. Pages: `/`, `/services`, `/equipment`, `/gallery`, `/contact`.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production check
```

## Edit content
Business details, services, equipment and gallery captions live in `lib/site.ts`. Photos are in `public/images/`.

## Placeholders to confirm before launch
- **Domain / metadataBase**: `https://leroysbackhoe.com.au` is a placeholder (`lib/site.ts` `url`, and `public/robots.txt`). Update both to the real domain.
- **Equipment page**: models/sizes, attachments, wet/dry hire and rates aren't known; marked `[PLACEHOLDER]`.
- No ABN, licence numbers or prices are shown (not in source material).
- Postal address (PO Box 118 Heathcote VIC 3523) comes from the old site — confirm it's current.

## Wiring up the quote form
`components/QuoteForm.tsx` is client-side only and just shows a success state. To actually send email (e.g. with Resend, as on the Micha Creative site):
1. `npm i resend` and add `RESEND_API_KEY` in Vercel → Project → Settings → Environment Variables.
2. Create `app/api/quote/route.ts`:
   ```ts
   import { Resend } from "resend";
   const resend = new Resend(process.env.RESEND_API_KEY);
   export async function POST(req: Request) {
     const d = await req.json();
     await resend.emails.send({
       from: "Website <quotes@YOUR-VERIFIED-DOMAIN>",
       to: "marlst@bigpond.net.au",
       replyTo: d.email || undefined,
       subject: `Quote request: ${d.jobType} – ${d.suburb}`,
       text: Object.entries(d).map(([k, v]) => `${k}: ${v}`).join("\n"),
     });
     return Response.json({ ok: true });
   }
   ```
3. In `onSubmit`, `fetch("/api/quote", { method: "POST", body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))) })` and only `setSent(true)` when it succeeds. Add a honeypot field or Turnstile for spam.

## Push to GitHub
```bash
git init && git add . && git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<you>/leroys-backhoe.git
git push -u origin main
```

## Deploy to Vercel
1. vercel.com → Add New → Project → import the GitHub repo (framework auto-detected: Next.js).
2. Deploy. Then Settings → Domains → add the real domain and update DNS as instructed.
3. Update `url` in `lib/site.ts` and `public/robots.txt` to the real domain and redeploy.
