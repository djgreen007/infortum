# infortum.io

Marketing site for Infortum Inc. — Next.js 15 (App Router) + Tailwind CSS v4, deployed on Vercel.
Copy was recovered from the Wayback Machine (Apr 2026 snapshot) and lives in `src/lib/content.ts`.

## Develop

```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev
```

## Pages

`/` · `/about` · `/contact` · `/privacy-policy` · `/terms-of-use` · `/cookie-policy`
Old WordPress URLs (`/about-us/`, `/contact-us/`) redirect to the new ones.

## Contact form

`POST /api/contact` stores each submission in Supabase (`contact_submissions`) and emails it through Google Workspace (SMTP).
Either one is enough for the form to succeed; set both for production.

1. Supabase → SQL Editor → run `supabase/migrations/0001_contact_submissions.sql`
2. Vercel → Project → Settings → Environment Variables:

| Name | Value |
|---|---|
| `SUPABASE_URL` | Supabase → Project Settings → API → Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Project Settings → API → `service_role` secret |
| `SMTP_USER` | The infortum.io mailbox that sends, e.g. `eddy@infortum.io` |
| `SMTP_PASS` | Google app password for that mailbox (myaccount.google.com/apppasswords; needs 2-Step Verification) |
| `CONTACT_TO_EMAIL` | `eddy@infortum.io` (comma-separate for more) |

## Editing content

All copy: `src/lib/content.ts`. Legal text: `src/content/legal/*.md`. Images: `public/images/`.
