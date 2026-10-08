# privacy.hacknitra.sk

Privacy policy (Zásady ochrany osobných údajov) for the HackNitra event Tvor AI Ty Build Day. A single static page with no build step and no JavaScript. It makes no third-party requests and sets no cookies.

```
index.html            the policy text
styles.css            layout, type, print; the design system of hacknitra.sk
fonts/                self-hosted Barlow Condensed 900 (SIL OFL), latin + latin-ext
logo.png              HackNitra logo, from the web repo
favicon.svg           favicon, from the web repo
apple-touch-icon.png  touch icon, from the web repo
CNAME                 custom domain for GitHub Pages
```

## Design

The page uses the same design system as hacknitra.sk (`web/src/styles/global.css`): brand blue `#0a23c3`, white and signal green `#00ff87`, Barlow Condensed 900 for headings and Courier New for body text. The brand colours are fixed, so the page stays light in dark mode too. Shared pieces (`.wrap`, `.hl`, `.btn`, the header, the stats row, the contact block and the follow bar) are copied from the web's stylesheet. If the brand changes there, update them here as well.

## Publish on GitHub Pages

1. Push this repo to GitHub.
2. In **Settings → Pages**, set **Source** to *Deploy from a branch*, then pick `main` and `/ (root)`.
3. Point DNS at GitHub by adding a `CNAME` record for `privacy.hacknitra.sk` with the value `<org-or-user>.github.io`.
4. Once the certificate is issued, enable **Enforce HTTPS** in the same settings page.

## Editing

The policy text lives in `index.html`. Each numbered section is a `<section class="part">` with an `id`, which the table of contents links to. Wrap a phrase in `<mark>` to highlight it. In body text, Slovak single-letter words (a, i, k, o, s, u, v, z) are followed by `&nbsp;` so they never end a line. Keep that when you edit.

When the policy changes, update both dates in the row under the hero and the date in section 12.

Preview locally with `python3 -m http.server`, then open http://localhost:8000. If you open `index.html` straight from disk, headings fall back to Arial Narrow, because browsers block the font preloads on `file://`.

## Fonts

Headings use Barlow Condensed 900 from `@fontsource/barlow-condensed` 5.3.0, the same files hacknitra.sk bundles. Both the latin and latin-ext subsets are included, because č, ď, ľ, ň, š, ť and ž are in latin-ext. The fonts are self-hosted rather than loaded from Google Fonts, so visitors' IP addresses are never sent to a third party. Body text uses the system's Courier New.
