# privacy.hacknitra.sk

Privacy policy (Zásady ochrany osobných údajov) for HackNitra Ideathon. A single static page with no build step. It makes no third-party requests and sets no cookies.

```
index.html      the policy text
styles.css      layout, type, light/dark, print
site.js         highlighter reveal + table-of-contents tracking (optional; page works without JS)
fonts/          self-hosted Recursive + Literata (SIL OFL), subset for Slovak
CNAME           custom domain for GitHub Pages
```

## Publish on GitHub Pages

1. Push this repo to GitHub.
2. In **Settings → Pages**, set **Source** to *Deploy from a branch*, then pick `main` and `/ (root)`.
3. Point DNS at GitHub by adding a `CNAME` record for `privacy.hacknitra.sk` with the value `<org-or-user>.github.io`.
4. Once the certificate is issued, enable **Enforce HTTPS** in the same settings page.

If you don't want the custom domain yet, delete `CNAME`. Otherwise the `github.io` URL redirects to a domain that doesn't resolve.

## Editing

The policy text lives in `index.html`. Each section is a `<section>` with an `id`, which the table of contents links to. Wrap a phrase in `<mark>` to highlight it. In body text, Slovak single-letter words (a, i, k, o, s, u, v, z) are followed by `&nbsp;` so they never end a line. Keep that when you edit.

When the policy changes, update both dates in the hero and the date in section 12.

Preview locally with `python3 -m http.server`, then open http://localhost:8000. Opening the file directly also works, but some browsers block web fonts on `file://`.

## Fonts

The fonts come from `@fontsource-variable/recursive` and `@fontsource-variable/literata` 5.3.0, processed with `fonttools`:

- **Recursive Casual**: instanced at CASL=1, MONO=0, slnt=0, wght 500–1000
- **Recursive Mono**: instanced at CASL=0, MONO=1, slnt=0, wght 400–700
- **Literata**: wght 400–700

Each font is subset to Basic Latin, Latin-1 and Latin Extended-A, which covers all Slovak diacritics. They are self-hosted rather than loaded from Google Fonts so that visitors' IP addresses are never sent to a third party.
