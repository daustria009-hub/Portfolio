// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);

// Light / dark toggle. The saved choice is applied by the small script in each
// page's <head> so the colors are right on the very first paint.
const root = document.documentElement;
document.querySelector(".theme-btn").addEventListener("click", () => {
  const isDark =
    root.dataset.theme === "dark" ||
    (!root.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
  root.dataset.theme = isDark ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
});

// Escape text so project content can't break the page
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const tagList = (tags, cls = "tags small") =>
  `<ul class="${cls}">${tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;

// Your projects, with anything left out of projects.js filled in. Without this,
// one forgotten line there (a missing "gallery: []", say) would empty out the
// whole projects list instead of just that one field.
const projects = (typeof PROJECTS === "undefined" ? [] : PROJECTS).map((entry) => {
  const p = entry || {};
  return {
    ...p,
    id: p.id || "",
    title: p.title || "Untitled project",
    summary: p.summary || "",
    cover: p.cover || "images/placeholder-2.svg",
    role: p.role || "—",
    date: p.date || "—",
    demo: p.demo || "",
    code: p.code || "",
    tags: Array.isArray(p.tags) ? p.tags : [],
    description: Array.isArray(p.description) ? p.description : [],
    gallery: Array.isArray(p.gallery) ? p.gallery : [],
  };
});

// Home page: project cards
const grid = document.getElementById("project-grid");
if (grid) {
  grid.innerHTML = projects.length
    ? projects.map(
        (p) => `
    <a class="card project" href="project.html?id=${encodeURIComponent(p.id)}">
      <img class="thumb" src="${esc(p.cover)}" alt="${esc(p.title)} screenshot" loading="lazy">
      <div class="project-body">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
        ${p.tags.length ? tagList(p.tags) : ""}
        <span class="more">View project →</span>
      </div>
    </a>`
      ).join("")
    : `<p class="muted">No projects yet — add them in projects.js.</p>`;
}

// Project page
const detail = document.getElementById("project-detail");
if (detail) {
  const id = new URLSearchParams(location.search).get("id");
  const i = projects.findIndex((p) => p.id === id);
  const p = projects[i];
  if (!p) {
    detail.innerHTML = `<h1>Project not found</h1><p><a href="index.html#projects">← Back to all projects</a></p>`;
  } else {
    document.title = `${p.title} | Portfolio`;
    const next = projects[(i + 1) % projects.length];
    const links = [
      p.demo && `<a class="btn" href="${esc(p.demo)}" target="_blank" rel="noopener">Live demo ↗</a>`,
      p.code && `<a class="btn ghost" href="${esc(p.code)}" target="_blank" rel="noopener">View code ↗</a>`,
    ].filter(Boolean).join("");
    detail.innerHTML = `
      <a class="back" href="index.html#projects">← All projects</a>
      <h1>${esc(p.title)}</h1>
      <p class="role">${esc(p.summary)}</p>
      <ul class="facts">
        <li><span>Role</span>${esc(p.role)}</li>
        <li><span>Date</span>${esc(p.date)}</li>
        <li><span>Built with</span>${p.tags.length ? p.tags.map(esc).join(", ") : "—"}</li>
      </ul>
      <img class="cover" src="${esc(p.cover)}" alt="${esc(p.title)} screenshot">
      <div class="prose">${p.description.map((d) => `<p>${esc(d)}</p>`).join("")}</div>
      ${links ? `<div class="cta">${links}</div>` : ""}
      ${p.gallery.length ? `<h2>Gallery</h2><div class="gallery">${p.gallery
        .map((g, n) => `<a href="${esc(g)}" target="_blank" rel="noopener"><img src="${esc(g)}" alt="${esc(p.title)} picture ${n + 1}" loading="lazy"></a>`)
        .join("")}</div>` : ""}
      ${projects.length > 1 ? `<a class="next card" href="project.html?id=${encodeURIComponent(next.id)}"><span>Next project</span>${esc(next.title)} →</a>` : ""}
    `;
  }
}
