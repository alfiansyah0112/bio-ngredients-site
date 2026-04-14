# Bio-Ngredients

Multi-page static marketing site for Bio-Ngredients — a regenerative plant-ingredients brand (whole-crop protein meals, stone-milled flours, cold-pressed oils).

## Stack

Pure HTML, CSS, and vanilla JavaScript. No build step, no package manager, no framework. Google Fonts loaded via `<link>`. All visuals are CSS gradients, clip-paths, and inline SVG — no external image assets.

## Structure

```
.
├── index.html          Home
├── products.html       Product range (6 ingredients)
├── protein-meal.html   Sunflower protein meal detail
├── process.html        Farm-to-bag timeline
├── contact.html        Partner enquiry form
├── css/style.css       Design system + components
└── js/main.js          Nav, reveal-on-scroll, form handling
```

## Running locally

Any static server will do. For example:

```
python -m http.server 8000
```

Then open http://localhost:8000.

## Design system

Earthy, agricultural palette — forest green (`#2d4a2b`), clay (`#88451d`), wheat (`#d4a84b`), cream (`#f5f0e6`). Fraunces serif for display, Inter for body. All colour pairings meet WCAG AA.

Responsive breakpoints at 860px (tablet) and 640px (phone). Scroll-triggered reveal animations use IntersectionObserver. Respects `prefers-reduced-motion`.
