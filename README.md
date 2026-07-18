# Next Gen Summit — Website (React + Vite)

A React/Vite rebuild of the Next Gen Summit landing page, ready to deploy on pxxl.

## What's included

- `src/` — componentized React app (Navbar, Hero, About, WhoItsFor, Sponsors, RSVP, FAQ, Footer)
- `public/` — pxxl and Reality 3D Hub logos
- `google-apps-script/Code.gs` — backend script that saves RSVPs to a Google Sheet **and sends a confirmation email**

## 1. Run locally

```bash
npm install
npm run dev
```

## 2. Set up the RSVP backend (Google Sheets)

The React app does not send emails by itself — a static frontend can't. The Apps Script
backend is what actually stores entries and sends the confirmation email.

1. Create a new Google Sheet (e.g. "Next Gen Summit RSVPs").
2. Go to **Extensions > Apps Script**.
3. Delete any starter code, then paste in the contents of `google-apps-script/Code.gs`.
4. Click **Deploy > New deployment**.
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy**, authorize the permissions it asks for (this is what lets it send email from your Google account), and copy the **Web app URL** it gives you.
6. Paste that URL into a `.env` file in this project (copy `.env.example` to `.env` first):

```
VITE_RSVP_ENDPOINT=https://script.google.com/macros/s/XXXXXXXXXXXX/exec
```

7. Rebuild the app (`npm run build`) so the URL is baked into the deployed site.

**What it does:** every RSVP submission appends a row (timestamp, name, email, role) to the
"RSVPs" tab of that sheet, checks for duplicate emails, enforces the 300-seat cap, and sends
the person a confirmation email via `MailApp` (using your Google account — so it'll come from
your own Gmail address, no extra service needed).

**Limits to know:** `MailApp` on a free Google account caps out around 100 emails/day. If RSVPs
go well past that, you'll want to swap in a proper transactional email service (e.g. Resend,
SendGrid) later — the Apps Script or a small backend on pxxl can call one instead.

## 3. Deploy on pxxl

Build the static site and deploy the `dist/` folder:

```bash
npm run build
```

Point your `nextgensummit.xyz` domain at the pxxl deployment once it's live.

## 4. Editing content

- Copy: edit the relevant component in `src/components/`
- Colors/fonts: edit `src/index.css` (CSS variables at the top control the palette)
- Logos: replace files in `public/`
