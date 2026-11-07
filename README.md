# Dave Laurence Austria's portfolio website

A static site (plain HTML, CSS and JavaScript, no build step).

- `index.html`: all the content. Every `[bracketed]` text and `<!-- EDIT -->` comment is a spot for your details.
- `style.css`: colors and layout. Change `--accent` at the top to change the main color.
- `projects.js`: your projects (title, pictures, description, links). The cards and each project's page are built from this list.
- `project.html`: the project page template; opens as `project.html?id=<project id>`.
- `images/`: project pictures. `agrical/originals/` holds the uncompressed PNGs of the
  Agri Calendar screenshots; nothing links to them, so you can delete that folder.
- `script.js`: mobile menu, dark mode toggle, project cards and project pages.

## Before you publish
Search `index.html` for `EDIT` and for `[` and work through every hit. Three of them
are easy to miss because they look finished already:

- the Contact section: each of the three entries needs TWO edits, the link itself
  and the text shown under its label
- your email in the About section (the same address, in two places)
- the project pictures and text in `projects.js`, and the files in `images/`

## Preview locally
Double-click `index.html`, or run `python3 -m http.server` in this folder and open http://localhost:8000.

## Publish on Vercel
1. Put these files in a GitHub repository (e.g. `portfolio`).
2. Sign in at https://vercel.com with your GitHub account, click **Add New → Project**, and import the repository.
3. Leave Framework Preset as **Other** and click **Deploy**. You get a link like `https://portfolio-yourname.vercel.app`.
4. Every change pushed to GitHub redeploys automatically.
