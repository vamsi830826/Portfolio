# Vamsi Krishna — Data Analyst Portfolio

A single-page portfolio site built with plain HTML, CSS, and JavaScript (no build step, no framework).

## Files

```
.
├── index.html      # page content
├── css/style.css   # all styling
├── js/script.js    # scroll-spy nav, reveal-on-scroll, copy-to-clipboard
└── README.md
```

## What's interactive

- **Scroll-spy navigation** — the top nav link for the section you're viewing highlights automatically.
- **Reveal-on-scroll** — sections fade in gently as you scroll to them (skipped automatically if the visitor's system has "reduce motion" turned on).
- **Copy email button** — click "Copy" next to the email address to copy it straight to the clipboard.
- **Animated hero chart** — the small bar chart in the header draws itself in on page load.

## How to publish this on GitHub Pages (free)

1. Create a new repository on GitHub — e.g. `vamsi830826.github.io` (using exactly your GitHub username + `.github.io` gives you the cleanest URL), or any other name like `portfolio`.
2. Upload all the files in this folder to the repo, keeping the same structure (`index.html` at the root, `css/` and `js/` as subfolders).
3. Go to the repo's **Settings → Pages**.
4. Under **Source**, choose the `main` branch and `/ (root)` folder, then click **Save**.
5. Wait about a minute, then refresh — GitHub will show your live URL:
   - `https://vamsi830826.github.io` if you named the repo `vamsi830826.github.io`, or
   - `https://vamsi830826.github.io/portfolio` if you named it `portfolio`.
6. Paste that URL into LinkedIn under **Profile → Add section → Featured → Add a link**, or **Contact Info → Website**.

## Editing content later

All the text lives directly in `index.html` — summary, skills, experience bullets, project descriptions, and contact links. Update it there and re-upload (or `git push`) to update the live site.
