# Lyonel Coffee – website

Static site: HTML5 + CSS3 + vanilla JS, Bootstrap 5.3 and Bootstrap Icons via CDN (no build step).

## Run locally
Open `index.html` in a browser (needs internet for the Bootstrap / Google Fonts CDNs), or serve the folder:

    python3 -m http.server 8000      # then open http://localhost:8000

## Structure
    index.html            Home (hero, categories, best seller, promo, footer)
    menu.html             Menu with Coffee / Non Coffee tabs  (menu.html?kategori=non-coffee)
    assets/css/style.css  Design tokens (:root) + all custom styles
    assets/js/products.js ALL product names, descriptions, prices, images  <- edit here
    assets/js/main.js     Renders best sellers + menu from products.js, tabs, product modal
    assets/img/           brand/ hero/ icons/ products/ promo/

## Editing
- Prices / products / best sellers: `assets/js/products.js` (set `bestSeller: true` + `featuredImage`).
- Colours, fonts, radii: CSS variables at the top of `style.css`.
- Opening hours, email, address: footer block in both HTML files.
- Promo copy: `#promo` section in `index.html`.

## Notes
- The "+" buttons open a product detail modal. A real cart / checkout / WhatsApp order flow needs a backend or a confirmed order channel.
- `lyonel-coffee-logo.png` is a trimmed, web-sized copy of the original logo (kept untouched in `assets/img/brand/`).
- `hero-bg.png` is the supplied photo with its baked white corners made transparent.
