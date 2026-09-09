# Priscilla Sarfoa Anim — Portfolio Website

A single-page portfolio site: hero, About, Research Focus, Projects, Experience,
Education, Awards, and Contact. Built with plain HTML, CSS, and JavaScript —
no build step, no framework, no dependencies to install.

## Project structure

```
project-folder/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── headshot.jpg
│   └── Priscilla_Anim_CV.pdf
└── README.md
```

All file references inside `index.html` and `style.css` use relative paths
(`style.css`, `script.js`, `assets/headshot.jpg`, `assets/Priscilla_Anim_CV.pdf`),
so the site works the same whether you're viewing it locally or on GitHub Pages —
as long as this folder structure stays intact.

---

## 1. Setting the files up in VS Code

1. Create a folder on your computer, e.g. `portfolio-site`.
2. Unzip everything from this delivery into that folder, so you end up with
   `index.html`, `style.css`, `script.js`, an `assets/` folder, and this
   `README.md` all sitting directly inside `portfolio-site`.
3. Open VS Code, then **File → Open Folder…** and select `portfolio-site`.
   You should see the file structure above in the Explorer sidebar on the left.

## 2. Where images and documents go

Everything that isn't code lives in `assets/`:

- `assets/headshot.jpg` — your profile photo, shown in the hero section.
- `assets/Priscilla_Anim_CV.pdf` — the file the "Download CV" button opens.

If you ever want to swap either file (a new photo, an updated CV), just
replace the file inside `assets/` **using the exact same filename**. If you
give it a different filename, update the matching reference in `index.html`:

- Photo: search for `assets/headshot.jpg` (one occurrence, in the hero `<img>` tag).
- CV: search for `assets/Priscilla_Anim_CV.pdf` (one occurrence, in the
  "Download CV" button's `href`).

Any additional images you add later (e.g. project screenshots) should also go
in `assets/`, referenced from your HTML as `assets/your-file-name.jpg`.

## 3. Running it locally with Live Server

1. In VS Code, install the **Live Server** extension (by Ritwick Dey) from
   the Extensions panel (the icon with four squares in the left sidebar —
   search "Live Server").
2. Right-click `index.html` in the Explorer and choose
   **"Open with Live Server."**
3. Your default browser opens the site at an address like
   `http://127.0.0.1:5500` — this is a full local preview, including the
   scroll animations and the stat count-up effect. Any time you save a
   change to `index.html`, `style.css`, or `script.js`, the page reloads
   automatically.

## 4. Uploading the project to GitHub

1. Go to [github.com](https://github.com), sign in, and click the **+** in
   the top right → **New repository**.
2. Give it a name (e.g. `portfolio`), keep it **Public** (GitHub Pages
   requires a public repo unless you're on a paid GitHub plan), and leave
   "Add a README" unchecked since you already have one. Click
   **Create repository**.
3. Back in VS Code, open a terminal (`` Ctrl+` `` on Windows/Linux,
   `` Cmd+` `` on Mac) inside the `portfolio-site` folder and run:

   ```
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```

   Replace `YOUR-USERNAME/portfolio` with your actual GitHub username and
   repository name. GitHub may open a browser tab asking you to sign in the
   first time you push.

   (If you'd rather not type commands, VS Code's **Source Control** panel —
   the branch icon in the left sidebar — has "Initialize Repository" and
   "Publish to GitHub" buttons that do the same thing.)

## 5. Deploying with GitHub Pages

1. On GitHub, open your repository → **Settings** → **Pages** (left sidebar).
2. Under "Build and deployment," set **Source** to **Deploy from a branch**.
3. Set **Branch** to `main` and the folder to **/ (root)**, then click **Save**.
4. Wait about a minute, then refresh the page — GitHub will show your live
   URL, in the form:

   ```
   https://YOUR-USERNAME.github.io/portfolio/
   ```

   That's the link to share with professors, faculty, or in applications.

**Making future edits:** open the same folder in VS Code, make your changes,
then in the terminal run:

```
git add .
git commit -m "describe your change"
git push
```

The live site updates automatically within a minute or two — no redeploy
step needed.

---

## Important: the contact form needs one more step

The "Send Message" form in the Contact section is fully styled and ready,
but GitHub Pages only serves static files — it has no server to receive a
form submission. As delivered, the form's `action` attribute points to a
placeholder (`https://formspree.io/f/YOUR_FORM_ID`) and **will not deliver
messages** until you connect it to a real form backend. The free option
already wired in is [Formspree](https://formspree.io):

1. Go to formspree.io and create a free account.
2. Create a new form — it will give you an endpoint that looks like
   `https://formspree.io/f/xxxxabcd`.
3. In `index.html`, search for `YOUR_FORM_ID` and replace it with your real
   ID from that endpoint.
4. Commit and push the change (`git add .`, `git commit -m "connect contact form"`,
   `git push`).

Until that's done, visitors can still reach you directly through the email,
LinkedIn, and GitHub links also listed in the Contact section — those work
with no setup.

## Notes on content accuracy

This site's content reflects a detailed accuracy pass (award names, project
methodology descriptions, coursework status, stats). A few items were left
as-is because they couldn't be independently verified — see the summary from
our conversation for the specific claims worth double-checking before you
share this link widely (exact travel award names, conference attended/upcoming
status, and so on).
