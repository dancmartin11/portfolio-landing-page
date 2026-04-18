# Dan Castillo — Portfolio & Freelance Business Site

A high-end, conversion-focused portfolio website for an Analytics Engineer & Data Scientist (myself).

Zero build step. No framework. Open `index.html` and you're live.

## Structure

```
portfolio-landing-page/
├── index.html        # Homepage — hero, social proof, services, selected work, CTA
├── services.html     # Six productized engagements + comparison + FAQ
├── work.html         # Four deep case studies (problem → approach → solution → impact)
├── about.html        # Engineer · Strategist · Builder positioning
├── contact.html      # Frictionless booking form
├── assets/
│   ├── styles.css    # Design tokens, components, layout
│   └── main.js       # Mobile menu, reveal-on-scroll, copy-to-clipboard, form
└── README.md
```

## Running locally

Any static server works. Two easy options:

**Option A — Python (already installed on most machines):**

```bash
python -m http.server 5173
```

Then open <http://localhost:5173>.

**Option B — VS Code "Live Server" extension:**

Right-click `index.html` → **Open with Live Server**.

You can also just double-click `index.html` — everything works from `file://` as well.

## Deploying

Drop the folder into any static host:

- **Netlify / Vercel**: drag & drop the folder into the dashboard.
- **GitHub Pages**: push to a repo, enable Pages on `main`.
- **Cloudflare Pages**: connect the repo, build command is empty, output dir is `.`.

## Customizing

Everything lives in plain HTML + one CSS file. Quick edits:

| What                 | Where                                                                    |
| -------------------- | ------------------------------------------------------------------------ |
| Accent color         | `--accent` and `--accent-2` in `assets/styles.css`                       |
| Copy tone / headings | Each page's `<h1>`, `<h2>` — all copy is inline for easy editing         |
| Case studies         | `work.html` — each `<section id="...">` is a case, safe to duplicate     |
| Services             | `services.html` — each `<article class="surface">` is one service card   |
| Form submission      | `assets/main.js` — wire the `#contact-form` to your backend / Formspree  |

### Wiring the contact form for real

Replace the `form.addEventListener('submit', ...)` block in `assets/main.js` with
a POST to your form backend (Formspree, Basin, your own API, etc.), e.g.:

```js
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  await fetch('https://formspree.io/f/XXXXXXX', { method: 'POST', body: data });
  form.style.display = 'none';
  document.querySelector('#contact-success').style.display = 'block';
});
```

## Design principles

This site was built to convert, not just to look nice. A few intentional choices:

- **One primary CTA** — "Book an intro call" — repeated on every section and page.
- **Outcomes over features** — every service and case study leads with the business result.
- **Social proof upfront** — logo strip + testimonials immediately after the hero.
- **Productized services** — scoped, priced, named. Clients can self-qualify.
- **Case studies with real numbers** — replace placeholder metrics with your own.
- **Premium visual language** — sharp type, fintech-style data panels, restrained color.

## License

MIT