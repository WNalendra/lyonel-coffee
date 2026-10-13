/**
 * Lyonel Coffee – shared behaviour
 * Depends on: Bootstrap bundle (modal, collapse) and assets/js/products.js
 */
(function () {
  "use strict";

  const formatPrice = (value) => "Rp " + value.toLocaleString("id-ID");
  const byId = (id) => LYONEL_PRODUCTS.find((product) => product.id === id);

  /* ------------------------------------------------------------
   * "+" button – shared markup. Opens the product detail modal.
   * (There is no cart/checkout: that would need a backend.)
   * ---------------------------------------------------------- */
  const addButton = (product) => `
    <button type="button" class="btn-add" data-bs-toggle="modal"
            data-bs-target="#productModal" data-product-id="${product.id}"
            aria-label="Lihat detail ${product.name}">
      <i class="bi bi-plus-lg" aria-hidden="true"></i>
    </button>`;

  /* ------------------------------------------------------------
   * Home – Best Seller cards
   * ---------------------------------------------------------- */
  function renderBestSellers() {
    const container = document.getElementById("bestSellerList");
    if (!container) return;

    container.innerHTML = LYONEL_PRODUCTS.filter((p) => p.bestSeller)
      .map(
        (p) => `
        <div class="col-6 col-md-auto">
          <article class="feature-card">
            <img class="feature-card__img" src="${p.featuredImage}" alt="${p.name}"
                 width="97" height="112" loading="lazy">
            <div class="feature-card__body">
              <h3 class="feature-card__name">${p.name}</h3>
              <div class="feature-card__row">
                <span class="price">${formatPrice(p.price)}</span>
                ${addButton(p)}
              </div>
            </div>
          </article>
        </div>`
      )
      .join("");
  }

  /* ------------------------------------------------------------
   * Menu page – tabs + product grids
   * ---------------------------------------------------------- */
  function renderMenu() {
    const tablist = document.getElementById("menuTabs");
    if (!tablist) return;

    const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
    const panels = Array.from(document.querySelectorAll("[data-menu-panel]"));
    const heading = document.getElementById("menuHeading");

    // Build each panel's grid from the data
    panels.forEach((panel) => {
      const category = panel.dataset.menuPanel;
      panel.querySelector(".row").innerHTML = LYONEL_PRODUCTS.filter(
        (p) => p.category === category
      )
        .map(
          (p) => `
          <div class="col-6 col-md-4 col-xl">
            <article class="product-card">
              <img class="product-card__img" src="${p.image}" alt="${p.name}" loading="lazy">
              <h3 class="product-card__name">${p.name}</h3>
              <p class="product-card__desc">${p.description}</p>
              <div class="product-card__row">
                <span class="price">${formatPrice(p.price)}</span>
                ${addButton(p)}
              </div>
            </article>
          </div>`
        )
        .join("");
    });

    function select(category, { updateUrl = true, focus = false } = {}) {
      tabs.forEach((tab) => {
        const active = tab.dataset.category === category;
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
        tab.classList.toggle("is-active", active);
        if (active && focus) tab.focus();
      });
      panels.forEach((panel) => {
        panel.hidden = panel.dataset.menuPanel !== category;
      });
      heading.textContent = LYONEL_CATEGORIES[category];

      if (updateUrl) {
        const url = new URL(window.location.href);
        url.searchParams.set("kategori", category);
        history.replaceState(null, "", url);
      }
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => select(tab.dataset.category));
      // Arrow-key navigation, as per the WAI-ARIA tabs pattern
      tab.addEventListener("keydown", (event) => {
        const move = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
        if (!move) return;
        event.preventDefault();
        const next = tabs[(index + move + tabs.length) % tabs.length];
        select(next.dataset.category, { focus: true });
      });
    });

    // Home page links use menu.html?kategori=coffee | non-coffee
    const requested = new URLSearchParams(window.location.search).get("kategori");
    select(requested in LYONEL_CATEGORIES ? requested : "coffee", { updateUrl: false });
  }

  /* ------------------------------------------------------------
   * Product detail modal (filled from the button that opened it)
   * ---------------------------------------------------------- */
  function setupProductModal() {
    const modalEl = document.getElementById("productModal");
    if (!modalEl) return;

    modalEl.addEventListener("show.bs.modal", (event) => {
      const product = byId(event.relatedTarget?.dataset.productId);
      if (!product) return;
      const image = modalEl.querySelector("[data-modal-image]");
      image.src = product.image;
      image.alt = product.name;
      modalEl.querySelector("[data-modal-name]").textContent = product.name;
      modalEl.querySelector("[data-modal-category]").textContent =
        LYONEL_CATEGORIES[product.category];
      modalEl.querySelector("[data-modal-description]").textContent = product.description;
      modalEl.querySelector("[data-modal-price]").textContent = formatPrice(product.price);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderBestSellers();
    renderMenu();
    setupProductModal();
  });
})();
