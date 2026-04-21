# Freewave Online — Static Site (customer-q9i9r7)

## What This Is
Static marketing website for **Freewave** (freewave.online), an IT/networking services business in the San Juan Islands.
Hosted on **Cloudflare Pages** ��� auto-deploys when you push to `main`.

**Customer:** Freewave-Online (info@freewave.online)
**Plan tier:** Standard
**Subdomain:** q9i9r7.freewave.dev
**Custom domain:** freewave.online
**Media:** https://media.freewave.dev/q9i9r7/images/

## What You Can Change
This is a **Standard tier** static site. You may ONLY use:
- **HTML** — edit content, structure, pages
- **CSS** — edit styles (in `styles.css` or inline `<style>` blocks)
- **Images** — reference images from `media.freewave.dev` or `images.unsplash.com`
- **Forms** — forms must POST to `https://freewave.dev/customer-form.php?id=e751f61b47307a69`

## What You Must NOT Do
- **No JavaScript** — do not add `<script>` tags, inline handlers (`onclick`, `onerror`, etc.), or external script sources. The existing `nav.js` is grandfathered; do not add new JS files or inline scripts.
- **No server-side code** — no PHP, Python, or any backend logic in this repo
- **No binary files** — images go in R2 (`media.freewave.dev`), not committed to the repo
- **No external resources** — only load from `media.freewave.dev`, `images.unsplash.com`, `fonts.googleapis.com`, `fonts.gstatic.com`, or `*.freewave.dev`

## Deploy Workflow
Push to `main` → Cloudflare Pages auto-builds and deploys within seconds. No GitHub Actions or SSH needed.

When making changes:
1. Make your edits directly on `main`
2. Commit and push
3. Site is live within seconds

## File Structure
```
├── index.html              # Homepage
├── about.html              # About page
├── contact.html            # Contact form → freewave.dev/customer-form.php
├── support.html            # Support services
├── remote-support.html     # Remote support plans
├── support-plan.html       # Stripe subscription info
├── schedule.html           # Appointment scheduling
├── backup.html             # Backup services
├── business.html           # Business services
├── faq.html                # FAQ
├── privacy.html            # Privacy policy
├── terms.html              # Terms of service
├── styles.css              # Global stylesheet
├── nav.js                  # Navigation (grandfathered JS)
├── *-quote.html            # Various quote request forms
├── *-thank-you.html        # Form submission confirmations
└── site.webmanifest        # PWA manifest
```

## Forms
All forms POST to the central endpoint:
```
https://freewave.dev/customer-form.php?id=e751f61b47307a69
```
The endpoint emails form data to the customer. Set a `_form_type` hidden field to control the email subject (e.g., "Contact Form", "Quote Request").

## Backend
This customer also has a **backend app** in the `customer-q9i9r7-app` repo (Docker container at `q9i9r7-app.freewave.dev`). The static site and app repo are separate — changes here only affect the static frontend.

## Design
- Cards: class `.c`, grids: class `.p`, buttons: class `.b`
- Colors: `#2EA8FF` (blue accent), `#1C1F24` (dark text), `#5F6B7A` (muted)
- No CSS frameworks — vanilla CSS only
