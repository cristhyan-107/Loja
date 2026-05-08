const products = [
  {
    id: 1,
    slug: "dalyace-hair-bandana-scarf",
    name: "Dalyace Hair Bandana Scarf",
    category: "Hair Accessories",
    description: "A lightweight scarf made for effortless summer styling.",
    price: 14.99,
    badge: "Holiday Essential",
    link: "#WIX_PRODUCT_LINK_1",
    occasions: ["Holiday", "Everyday", "Gift"],
    styleTags: ["Minimal", "Elegant"],
    related: [4, 9, 13],
    tone: "linear-gradient(145deg, #efe4cf, #c8ad78 52%, #7c8460)",
  },
  {
    id: 2,
    slug: "mesef-solid-colour-silk-scarf",
    name: "MESEF Solid Colour Silk Scarf",
    category: "Hair Accessories",
    description: "A minimal silk-style scarf for polished holiday looks.",
    price: 16.99,
    badge: "New In",
    link: "#WIX_PRODUCT_LINK_2",
    occasions: ["Holiday", "Evening", "Gift"],
    styleTags: ["Minimal", "Elegant"],
    related: [4, 10, 14],
    tone: "linear-gradient(145deg, #f7f1e4, #d8c4a0 55%, #b99a5d)",
  },
  {
    id: 3,
    slug: "awaytr-crochet-head-scarf",
    name: "AWAYTR Crochet Head Scarf",
    category: "Hair Accessories",
    description: "A festival-inspired crochet head scarf for sunny days.",
    price: 18.99,
    badge: "Festival Pick",
    link: "#WIX_PRODUCT_LINK_3",
    occasions: ["Festival", "Holiday"],
    styleTags: ["Boho", "Bold"],
    related: [6, 9, 12],
    tone: "linear-gradient(145deg, #f3ead9, #b9bf98 45%, #4f573c)",
  },
  {
    id: 4,
    slug: "vastar-small-pearl-hair-clips",
    name: "Vastar 2PCS Small Pearl Hair Clips",
    category: "Hair Accessories",
    description: "Elegant pearl clips for soft, feminine styling.",
    price: 12.99,
    badge: "Easy Gift",
    link: "#WIX_PRODUCT_LINK_4",
    occasions: ["Everyday", "Evening", "Gift"],
    styleTags: ["Elegant", "Minimal"],
    related: [1, 11, 13],
    tone: "linear-gradient(145deg, #ffffff, #eee4d2 48%, #c9b27d)",
  },
  {
    id: 5,
    slug: "mecari-rhinestone-hair-clips",
    name: "Mecari Rhinestone Hair Clips",
    category: "Hair Accessories",
    description: "Sparkling hair clips for evening, events and summer outfits.",
    price: 14.99,
    badge: "New In",
    link: "#WIX_PRODUCT_LINK_5",
    occasions: ["Evening", "Festival", "Gift"],
    styleTags: ["Elegant", "Bold"],
    related: [2, 10, 14],
    tone: "linear-gradient(145deg, #f8f7f2, #d9d2c1 48%, #171511)",
  },
  {
    id: 6,
    slug: "women-chinese-orchid-flower-hair-clip",
    name: "Women Chinese Orchid Flower Hair Clip",
    category: "Hair Accessories",
    description: "A statement flower clip for holiday and festival looks.",
    price: 13.99,
    badge: "Festival Pick",
    link: "#WIX_PRODUCT_LINK_6",
    occasions: ["Festival", "Holiday"],
    styleTags: ["Bold", "Boho"],
    related: [3, 9, 13],
    tone: "linear-gradient(145deg, #f4e6d7, #d0a28a 48%, #7c8460)",
  },
  {
    id: 7,
    slug: "anthony-flower-rose-hair-clip",
    name: "Anthony Flower Rose Hair Clip",
    category: "Hair Accessories",
    description: "A bold rose hair clip for standout summer styling.",
    price: 15.99,
    badge: "Festival Pick",
    link: "#WIX_PRODUCT_LINK_7",
    occasions: ["Festival", "Evening"],
    styleTags: ["Bold", "Elegant"],
    related: [2, 9, 14],
    tone: "linear-gradient(145deg, #f3dfd4, #bb795f 48%, #171511)",
  },
  {
    id: 8,
    slug: "tortoise-shell-hair-claw-clip",
    name: "3 Inch Tortoise Shell Hair Claw Clip",
    category: "Hair Accessories",
    description: "A timeless claw clip for everyday effortless hair.",
    price: 11.99,
    badge: "Under £20",
    link: "#WIX_PRODUCT_LINK_8",
    occasions: ["Everyday", "Holiday"],
    styleTags: ["Minimal", "Elegant"],
    related: [1, 11, 12],
    tone: "linear-gradient(145deg, #e5c78f, #8d693d 50%, #271d14)",
  },
  {
    id: 9,
    slug: "wanlinker-square-oversized-sunglasses",
    name: "WANLINKER Square Oversized Sunglasses",
    category: "Sunglasses",
    description: "Oversized square sunglasses with a clean, modern finish.",
    price: 24.99,
    badge: "Editors Pick",
    link: "#WIX_PRODUCT_LINK_9",
    occasions: ["Holiday", "Festival", "Everyday"],
    styleTags: ["Bold", "Minimal"],
    related: [11, 12, 6],
    tone: "linear-gradient(145deg, #f5f0e5, #91866f 48%, #171511)",
  },
  {
    id: 10,
    slug: "lvzoit-black-oversized-sunglasses",
    name: "LVZOIT Black Oversized Sunglasses",
    category: "Sunglasses",
    description: "Classic black oversized sunglasses for a confident summer look.",
    price: 26.99,
    badge: "Holiday Essential",
    link: "#WIX_PRODUCT_LINK_10",
    occasions: ["Holiday", "Evening", "Festival"],
    styleTags: ["Bold", "Elegant"],
    related: [11, 12, 5],
    tone: "linear-gradient(145deg, #d8c4a0, #3a332a 48%, #080807)",
  },
  {
    id: 11,
    slug: "bloomway-pearl-eyeglass-chain",
    name: "BLOOMWAY Pearl Eyeglass Chain",
    category: "Sunglasses",
    description: "A pearl beaded chain to elevate your sunglasses.",
    price: 12.99,
    badge: "Under £20",
    link: "#WIX_PRODUCT_LINK_11",
    occasions: ["Holiday", "Everyday", "Gift"],
    styleTags: ["Elegant", "Minimal"],
    related: [9, 12, 4],
    tone: "linear-gradient(145deg, #fffdf7, #e3d8c2 50%, #b99a5d)",
  },
  {
    id: 12,
    slug: "straw-clutch-purse-summer-beach-bag",
    name: "Straw Clutch Purse Summer Beach Bag",
    category: "Bags",
    description: "A chic straw clutch made for holidays, beach days and summer evenings.",
    price: 34.99,
    badge: "Holiday Essential",
    link: "#WIX_PRODUCT_LINK_12",
    occasions: ["Holiday", "Evening", "Festival"],
    styleTags: ["Boho", "Elegant"],
    related: [9, 11, 14],
    tone: "linear-gradient(145deg, #f7edd7, #cda965 48%, #7c8460)",
  },
  {
    id: 13,
    slug: "zany-dye-heart-raffia-earrings",
    name: "Zany Dye Heart Raffia Earrings",
    category: "Jewellery",
    description: "Lightweight raffia earrings with a playful summer feel.",
    price: 13.99,
    badge: "Easy Gift",
    link: "#WIX_PRODUCT_LINK_13",
    occasions: ["Holiday", "Festival", "Gift"],
    styleTags: ["Boho", "Bold"],
    related: [1, 6, 9],
    tone: "linear-gradient(145deg, #fbefe2, #d69b72 48%, #a8864e)",
  },
  {
    id: 14,
    slug: "ruoffetta-raffia-starfish-earrings",
    name: "RUOFFETTA Raffia Starfish Earrings",
    category: "Jewellery",
    description: "Beach-inspired starfish earrings for holiday outfits.",
    price: 14.99,
    badge: "Holiday Essential",
    link: "#WIX_PRODUCT_LINK_14",
    occasions: ["Holiday", "Evening", "Gift"],
    styleTags: ["Boho", "Elegant"],
    related: [2, 10, 12],
    tone: "linear-gradient(145deg, #f9f2df, #d8c4a0 52%, #4f573c)",
  },
];

const state = {
  category: "All",
  occasion: "All",
  under20Only: false,
  search: "",
  sort: "featured",
  wishlist: loadWishlist(),
  recentlyViewed: loadRecentlyViewed(),
  lastFocusedElement: null,
};

const selectors = {
  header: document.querySelector("[data-header]"),
  nav: document.querySelector("#site-nav"),
  navLinks: document.querySelectorAll("[data-nav-link]"),
  menuToggle: document.querySelector("[data-menu-toggle]"),
  productGrid: document.querySelector("#product-grid"),
  filterButtons: document.querySelectorAll("[data-filter]"),
  occasionButtons: document.querySelectorAll("[data-occasion-filter]"),
  under20Buttons: document.querySelectorAll("[data-under-20-filter]"),
  searchInput: document.querySelector("[data-search-input]"),
  searchSuggestions: document.querySelector("[data-search-suggestions]"),
  sortSelect: document.querySelector("[data-sort-select]"),
  wishlistCount: document.querySelector("[data-wishlist-count]"),
  quickViewModal: document.querySelector("[data-quick-view-modal]"),
  wishlistModal: document.querySelector("[data-wishlist-modal]"),
  mobileCta: document.querySelector("[data-mobile-cta]"),
  backToTop: document.querySelector("[data-back-to-top]"),
  productDetail: document.querySelector("[data-product-detail]"),
  recentlyViewedGrid: document.querySelector("[data-recently-viewed-grid]"),
  quizForm: document.querySelector("[data-style-quiz]"),
  quizResults: document.querySelector("[data-quiz-results]"),
  exitIntent: document.querySelector("[data-exit-intent]"),
};

const currencyFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

function formatPrice(price) {
  return currencyFormatter.format(price);
}

function productUrl(product) {
  if (window.location.pathname.includes("/products/")) {
    return `../${product.slug}/`;
  }

  if (window.location.pathname.includes("/style-journal/")) {
    return `../products/${product.slug}/`;
  }

  return `products/${product.slug}/`;
}

function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}

function getRelatedProducts(product, limit = 3) {
  const relatedIds = product.related || [];
  const explicit = relatedIds.map((id) => products.find((item) => item.id === id)).filter(Boolean);
  const fallback = products.filter(
    (item) =>
      item.id !== product.id &&
      (item.category === product.category || item.occasions.some((occasion) => product.occasions.includes(occasion)))
  );

  return [...explicit, ...fallback.filter((item) => !explicit.some((related) => related.id === item.id))].slice(0, limit);
}

function productCardMini(product) {
  return `
    <article class="mini-product-card">
      <div class="mini-product-image" data-initial="${productInitial(product.name)}" style="--placeholder-bg: ${product.tone}" role="img" aria-label="${product.name} image placeholder"></div>
      <div>
        <span class="category">${product.category}</span>
        <h3>${product.name}</h3>
        <p>${formatPrice(product.price)}</p>
        <div class="mini-actions">
          <a class="quick-button" href="${productUrl(product)}">View Product</a>
          <a class="buy-button" href="${product.link}" target="_blank" rel="noopener" data-buy-link data-product-name="${product.name}" data-product-link="${product.link}">Buy Now</a>
        </div>
      </div>
    </article>
  `;
}

function productInitial(productName) {
  return productName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

function loadWishlist() {
  try {
    return JSON.parse(localStorage.getItem("meridianWishlist")) || [];
  } catch {
    return [];
  }
}

function loadRecentlyViewed() {
  try {
    return JSON.parse(localStorage.getItem("meridianRecentlyViewed")) || [];
  } catch {
    return [];
  }
}

function saveRecentlyViewed(productId) {
  state.recentlyViewed = [productId, ...state.recentlyViewed.filter((id) => id !== productId)].slice(0, 4);
  localStorage.setItem("meridianRecentlyViewed", JSON.stringify(state.recentlyViewed));
}

function saveWishlist() {
  localStorage.setItem("meridianWishlist", JSON.stringify(state.wishlist));
  updateWishlistCount();
}

function updateWishlistCount() {
  if (!selectors.wishlistCount) return;
  selectors.wishlistCount.textContent = state.wishlist.length;
}

function isWishlisted(productId) {
  return state.wishlist.includes(productId);
}

function getFilteredProducts() {
  const query = state.search.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const matchesCategory = state.category === "All" || product.category === state.category;
    const matchesOccasion = state.occasion === "All" || product.occasions.includes(state.occasion);
    const matchesPrice = !state.under20Only || product.price < 20;
    const matchesSearch =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.badge.toLowerCase().includes(query) ||
      product.occasions.join(" ").toLowerCase().includes(query) ||
      product.styleTags.join(" ").toLowerCase().includes(query);

    return matchesCategory && matchesOccasion && matchesPrice && matchesSearch;
  });

  if (state.sort === "price-asc") {
    return [...filtered].sort((a, b) => a.price - b.price);
  }

  if (state.sort === "price-desc") {
    return [...filtered].sort((a, b) => b.price - a.price);
  }

  return filtered;
}

function renderProducts() {
  if (!selectors.productGrid) return;
  const visibleProducts = getFilteredProducts();

  if (!visibleProducts.length) {
    selectors.productGrid.innerHTML = `
      <div class="empty-state">
        <h3>No products found</h3>
        <p>Try another category or search term.</p>
      </div>
    `;
    return;
  }

  selectors.productGrid.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="product-card" data-category="${product.category}">
          <span class="product-badge">${product.badge}</span>
          <button
            class="wishlist-button ${isWishlisted(product.id) ? "active" : ""}"
            type="button"
            aria-label="${isWishlisted(product.id) ? "Remove from wishlist" : "Add to wishlist"}: ${product.name}"
            data-wishlist-toggle="${product.id}"
          >&#9825;</button>
          <div
            class="product-image"
            data-initial="${productInitial(product.name)}"
            style="--placeholder-bg: ${product.tone}"
            role="img"
            aria-label="${product.name} image placeholder"
            loading="lazy"
          ></div>
          <div class="product-body">
            <span class="category">${product.category}</span>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-footer">
              <span class="price">${formatPrice(product.price)}</span>
            </div>
            <div class="product-actions">
              <a class="quick-button" href="${productUrl(product)}">View Product</a>
              <a
                class="buy-button"
                href="${product.link}"
                target="_blank"
                rel="noopener"
                data-buy-link
                data-product-name="${product.name}"
                data-product-link="${product.link}"
              >Buy Now</a>
              <button class="quick-button" type="button" data-quick-view="${product.id}">Quick View</button>
            </div>
            <p class="buy-microcopy">Secure checkout via our store partner.</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderProductCollections() {
  document.querySelectorAll("[data-look-products]").forEach((look) => {
    const target = look.querySelector("[data-look-grid]");
    const ids = look.dataset.lookProducts.split(",").map(Number);
    target.innerHTML = ids.map((id) => products.find((product) => product.id === id)).filter(Boolean).map(productCardMini).join("");
  });

  const under20Grid = document.querySelector("[data-under-20-grid]");
  if (under20Grid) {
    under20Grid.innerHTML = products.filter((product) => product.price < 20).slice(0, 8).map(productCardMini).join("");
  }

  const giftGrid = document.querySelector("[data-gift-grid]");
  if (giftGrid) {
    giftGrid.innerHTML = products
      .filter((product) => product.occasions.includes("Gift") || product.badge === "Easy Gift")
      .slice(0, 4)
      .map(productCardMini)
      .join("");
  }
}

function renderRecentlyViewed() {
  if (!selectors.recentlyViewedGrid) return;
  const viewed = state.recentlyViewed.map((id) => products.find((product) => product.id === id)).filter(Boolean);
  selectors.recentlyViewedGrid.innerHTML = viewed.length
    ? viewed.map(productCardMini).join("")
    : `<p class="empty-inline">Products you view will appear here.</p>`;
}

function renderSearchSuggestions() {
  if (!selectors.searchSuggestions) return;
  const query = state.search.trim().toLowerCase();
  const knownTerms = ["scarf", "sunglasses", "festival", "pearl", "bag", "holiday", "hair clip", "jewellery"];

  if (!query) {
    selectors.searchSuggestions.innerHTML = "";
    return;
  }

  const suggestions = products
    .filter((product) => {
      const haystack = `${product.name} ${product.category} ${product.description} ${product.badge} ${product.occasions.join(" ")}`.toLowerCase();
      return haystack.includes(query) || knownTerms.some((term) => term.includes(query) && haystack.includes(term));
    })
    .slice(0, 4);

  selectors.searchSuggestions.innerHTML = suggestions
    .map((product) => `<a href="${productUrl(product)}">${product.name}<span>${formatPrice(product.price)}</span></a>`)
    .join("");
}

function initStyleQuiz() {
  if (!selectors.quizForm || !selectors.quizResults) return;

  selectors.quizForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(selectors.quizForm);
    const occasion = formData.get("occasion");
    const style = formData.get("style");
    const category = formData.get("category");

    const scored = products
      .map((product) => {
        let score = 0;
        if (product.occasions.includes(occasion)) score += 2;
        if (product.styleTags.includes(style)) score += 2;
        if (product.category === category) score += 3;
        if (product.price < 20) score += 1;
        return { product, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((item) => item.product);

    selectors.quizResults.innerHTML = `
      <h3>Your Meridian edit</h3>
      <div class="horizontal-products">${scored.map(productCardMini).join("")}</div>
    `;
    trackQuizCompleted(`${occasion} / ${style} / ${category}`);
  });
}

function buildProductDetailBullets(product) {
  const under20 = product.price < 20 ? "An easy under £20 styling piece." : "A polished piece for elevated summer looks.";
  return [
    `Selected for ${product.occasions.slice(0, 2).join(" and ").toLowerCase()} styling.`,
    under20,
    "Designed to add a simple finishing touch without overcomplicating your outfit.",
  ];
}

function buildStyleTips(product) {
  if (product.category === "Sunglasses") {
    return ["Pair with a silk scarf for travel days.", "Add a pearl eyeglass chain for a refined detail.", "Style with a straw bag for holiday plans."];
  }
  if (product.category === "Bags") {
    return ["Carry with oversized sunglasses for city breaks.", "Pair with raffia earrings for warm evenings.", "Style with neutral linens and sandals."];
  }
  if (product.category === "Jewellery") {
    return ["Wear with swept-back hair to show the shape.", "Pair with a scarf for a holiday-ready look.", "Use as a lightweight finish for summer evenings."];
  }
  return ["Tie with loose waves for an effortless holiday feel.", "Pair with oversized sunglasses for a finished edit.", "Use with simple jewellery to keep the look polished."];
}

function renderProductDetail() {
  if (!selectors.productDetail) return;
  const product = getProductBySlug(selectors.productDetail.dataset.productSlug);
  if (!product) {
    selectors.productDetail.innerHTML = `<section class="policy-hero"><h1>Product not found</h1><p>This product may have moved.</p><a class="button button-dark" href="../../index.html#summer-edit">Shop Summer Edit</a></section>`;
    return;
  }

  saveRecentlyViewed(product.id);
  renderRecentlyViewed();

  document.title = `${product.name} | Meridian Attire`;
  const metaDescription = document.querySelector("meta[name='description']");
  if (metaDescription) metaDescription.content = `${product.description} Shop securely through Meridian Attires store partner checkout.`;

  selectors.productDetail.innerHTML = `
    <section class="product-detail-hero reveal-section is-visible">
      <div class="detail-image" data-initial="${productInitial(product.name)}" style="--placeholder-bg: ${product.tone}" role="img" aria-label="${product.name} image placeholder"></div>
      <div class="detail-copy">
        <p class="eyebrow">${product.category}</p>
        <span class="product-badge inline-badge">${product.badge}</span>
        <h1>${product.name}</h1>
        <p class="detail-price">${formatPrice(product.price)}</p>
        <p>${product.description}</p>
        <a class="button button-dark detail-buy" href="${product.link}" target="_blank" rel="noopener" data-buy-link data-product-name="${product.name}" data-product-link="${product.link}">Buy Now</a>
        <p class="buy-microcopy">You'll be redirected to complete your purchase securely.</p>
        <ul class="trust-microcopy">
          <li>Secure checkout via our store partner.</li>
          <li>Delivery details shown before payment.</li>
          <li>Easy returns guidance available.</li>
          <li>UK-focused customer care.</li>
        </ul>
      </div>
    </section>
    <section class="detail-content reveal-section is-visible">
      <article>
        <h2>Why You'll Love It</h2>
        <ul>${buildProductDetailBullets(product).map((item) => `<li>${item}</li>`).join("")}</ul>
      </article>
      <article>
        <h2>How to Style It</h2>
        <ul>${buildStyleTips(product).map((item) => `<li>${item}</li>`).join("")}</ul>
      </article>
      <article class="detail-accordions">
        <details open><summary>Delivery</summary><p>Selected styles may be available with fast UK delivery. Final delivery details are shown at checkout.</p></details>
        <details><summary>Returns</summary><p>Easy returns guidance is available. Return details are provided during checkout and in our customer care pages.</p></details>
        <details><summary>Product Details</summary><p>Category: ${product.category}. Occasion: ${product.occasions.join(", ")}. Style: ${product.styleTags.join(", ")}.</p></details>
      </article>
    </section>
    <section class="related-section reveal-section is-visible">
      <div class="section-heading"><div><p class="eyebrow">Complete the Look</p><h2>Related products</h2></div><p>Pair this piece with complementary summer accessories.</p></div>
      <div class="horizontal-products">${getRelatedProducts(product, 4).map(productCardMini).join("")}</div>
    </section>
    <section class="recent-section reveal-section is-visible">
      <div class="section-heading"><div><p class="eyebrow">Recently Viewed</p><h2>Your latest pieces</h2></div><p>Saved locally in your browser.</p></div>
      <div class="horizontal-products">${state.recentlyViewed
        .filter((id) => id !== product.id)
        .map((id) => products.find((item) => item.id === id))
        .filter(Boolean)
        .slice(0, 4)
        .map(productCardMini)
        .join("") || `<p class="empty-inline">View more products to build your recent edit.</p>`}</div>
    </section>
    <a class="mobile-sticky-cta visible product-sticky-buy" href="${product.link}" target="_blank" rel="noopener" data-buy-link data-product-name="${product.name}" data-product-link="${product.link}">Buy Now ${formatPrice(product.price)}</a>
  `;

  injectSingleProductSchema(product);
}

function injectSingleProductSchema(product) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    category: product.category,
    description: product.description,
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: product.price.toFixed(2),
      availability: "https://schema.org/InStock",
      url: product.link,
    },
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

function toggleWishlist(productId) {
  if (isWishlisted(productId)) {
    state.wishlist = state.wishlist.filter((id) => id !== productId);
  } else {
    state.wishlist = [...state.wishlist, productId];
    const product = products.find((item) => item.id === productId);
    if (product) trackWishlistAdd(product.name);
  }

  saveWishlist();
  renderProducts();
  renderWishlistModal();
}

function renderWishlistModal() {
  const container = document.querySelector("[data-wishlist-items]");
  if (!container) return;
  const wishlistProducts = products.filter((product) => state.wishlist.includes(product.id));

  if (!wishlistProducts.length) {
    container.innerHTML = `<p>Your wishlist is empty. Save your favourite summer pieces here.</p>`;
    return;
  }

  container.innerHTML = wishlistProducts
    .map(
      (product) => `
        <article class="wishlist-item">
          <div>
            <h3>${product.name}</h3>
            <p>${product.category} &middot; ${formatPrice(product.price)}</p>
          </div>
          <button class="quick-button" type="button" data-wishlist-toggle="${product.id}">Remove</button>
          <a
            class="buy-button"
            href="${product.link}"
            target="_blank"
            rel="noopener"
            data-buy-link
            data-product-name="${product.name}"
            data-product-link="${product.link}"
          >Buy Now</a>
        </article>
      `
    )
    .join("");
}

function openModal(modal) {
  state.lastFocusedElement = document.activeElement;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  const dialog = modal.querySelector("[role='dialog']");
  requestAnimationFrame(() => dialog.focus());
}

function closeModal(modal) {
  modal.hidden = true;
  document.body.classList.remove("modal-open");

  if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === "function") {
    state.lastFocusedElement.focus();
  }
}

function openQuickView(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const modal = selectors.quickViewModal;
  const image = modal.querySelector("[data-modal-image]");
  const buyButton = modal.querySelector("[data-modal-buy]");

  image.style.setProperty("--placeholder-bg", product.tone);
  image.dataset.initial = productInitial(product.name);
  image.setAttribute("aria-label", `${product.name} image placeholder`);
  modal.querySelector("[data-modal-category]").textContent = product.category;
  modal.querySelector("[data-modal-title]").textContent = product.name;
  modal.querySelector("[data-modal-price]").textContent = formatPrice(product.price);
  modal.querySelector("[data-modal-description]").textContent = product.description;
  buyButton.href = product.link;
  buyButton.dataset.productName = product.name;
  buyButton.dataset.productLink = product.link;

  const recommendations = modal.querySelector("[data-modal-recommendations]");
  if (recommendations) {
    recommendations.innerHTML = getRelatedProducts(product, 3).map(productCardMini).join("");
  }

  trackQuickView(product.name);
  openModal(modal);
}

function handleProductGridClick(event) {
  const wishlistButton = event.target.closest("[data-wishlist-toggle]");
  if (wishlistButton) {
    toggleWishlist(Number(wishlistButton.dataset.wishlistToggle));
    return;
  }

  const quickViewButton = event.target.closest("[data-quick-view]");
  if (quickViewButton) {
    openQuickView(Number(quickViewButton.dataset.quickView));
  }
}

function trackBuyClick(productName, productLink) {
  // Replace this console log with Meta Pixel, Google Analytics or TikTok Pixel purchase intent events later.
  console.log(`Buy click: ${productName} - ${productLink}`);
}

function trackWishlistAdd(productName) {
  // Replace this console log with Meta Pixel, Google Analytics or TikTok Pixel wishlist events later.
  console.log(`Wishlist add: ${productName}`);
}

function trackQuizCompleted(result) {
  // Replace this console log with Meta Pixel, Google Analytics or TikTok Pixel lead/recommendation events later.
  console.log(`Quiz completed: ${result}`);
}

function trackQuickView(productName) {
  // Replace this console log with Meta Pixel, Google Analytics or TikTok Pixel product view events later.
  console.log(`Quick view: ${productName}`);
}

function injectProductSchema() {
  if (!selectors.productGrid) return;
  const schema = {
    "@context": "https://schema.org",
    "@graph": products.map((product) => ({
      "@type": "Product",
      name: product.name,
      category: product.category,
      description: product.description,
      offers: {
        "@type": "Offer",
        priceCurrency: "GBP",
        price: product.price.toFixed(2),
        availability: "https://schema.org/InStock",
        url: product.link,
      },
    })),
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

function initHeaderBehaviour() {
  if (!selectors.header) return;
  const onScroll = () => {
    const isScrolled = window.scrollY > 18;
    selectors.header.classList.toggle("is-scrolled", isScrolled);
    selectors.backToTop?.classList.toggle("visible", window.scrollY > 650);
    selectors.mobileCta?.classList.toggle("visible", window.scrollY > window.innerHeight * 0.75);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initNavigation() {
  if (!selectors.menuToggle || !selectors.nav) return;
  selectors.menuToggle.addEventListener("click", () => {
    const isOpen = selectors.nav.classList.toggle("open");
    selectors.menuToggle.setAttribute("aria-expanded", String(isOpen));
    selectors.menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  selectors.nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      selectors.nav.classList.remove("open");
      selectors.menuToggle.setAttribute("aria-expanded", "false");
      selectors.menuToggle.setAttribute("aria-label", "Open menu");
    }
  });

  const sections = document.querySelectorAll("[data-section]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        selectors.navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-38% 0px -55% 0px", threshold: 0.01 }
  );

  sections.forEach((section) => observer.observe(section));
}

function initRevealAnimation() {
  const revealItems = document.querySelectorAll(".reveal-section");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initControls() {
  if (!selectors.productGrid) return;
  selectors.filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.filter;
      selectors.filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      renderProducts();
    });
  });

  selectors.occasionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.occasion = button.dataset.occasionFilter;
      selectors.occasionButtons.forEach((item) => item.classList.toggle("active", item === button));
      renderProducts();
    });
  });

  selectors.under20Buttons.forEach((button) => {
    button.addEventListener("click", () => {
      state.under20Only = !state.under20Only;
      selectors.under20Buttons.forEach((item) => item.classList.toggle("active", state.under20Only));
      renderProducts();
    });
  });

  selectors.searchInput?.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderProducts();
    renderSearchSuggestions();
  });

  selectors.sortSelect?.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderProducts();
  });
}

function initModals() {
  selectors.productGrid?.addEventListener("click", handleProductGridClick);

  document.querySelector("[data-open-wishlist]")?.addEventListener("click", () => {
    renderWishlistModal();
    openModal(selectors.wishlistModal);
  });

  document.querySelector("[data-wishlist-items]")?.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-wishlist-toggle]");
    if (removeButton) {
      toggleWishlist(Number(removeButton.dataset.wishlistToggle));
    }
  });

  document.querySelector("[data-close-modal]")?.addEventListener("click", () => closeModal(selectors.quickViewModal));
  document
    .querySelector("[data-close-wishlist]")
    ?.addEventListener("click", () => closeModal(selectors.wishlistModal));

  [selectors.quickViewModal, selectors.wishlistModal].filter(Boolean).forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    const openModalElement = [selectors.quickViewModal, selectors.wishlistModal]
      .filter(Boolean)
      .find((modal) => !modal.hidden);

    if (event.key === "Tab" && openModalElement) {
      const focusableItems = openModalElement.querySelectorAll(
        "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      );
      const firstItem = focusableItems[0];
      const lastItem = focusableItems[focusableItems.length - 1];

      if (!firstItem || !lastItem) return;

      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }

      return;
    }

    if (event.key !== "Escape") return;
    [selectors.quickViewModal, selectors.wishlistModal].filter(Boolean).forEach((modal) => {
      if (!modal.hidden) closeModal(modal);
    });
  });
}

function initNewsletter() {
  const form = document.querySelector("[data-newsletter-form]");
  const input = document.querySelector("[data-newsletter-email]");
  const message = document.querySelector("[data-newsletter-message]");
  if (!form || !input || !message) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = input.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValid) {
      message.textContent = "Please enter a valid email address.";
      input.setAttribute("aria-invalid", "true");
      input.focus();
      return;
    }

    input.removeAttribute("aria-invalid");
    message.textContent = "Thank you for joining Meridian Attire.";
    form.reset();
  });
}

function initGlobalClicks() {
  document.addEventListener("click", (event) => {
    const buyLink = event.target.closest("[data-buy-link]");
    if (buyLink) {
      trackBuyClick(buyLink.dataset.productName, buyLink.dataset.productLink);
    }
  });

  selectors.backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function loadAnalytics() {
  // Add Google Analytics or other analytics scripts here after analytics consent is granted.
  console.log("Analytics consent granted");
}

function loadMarketingPixels() {
  // Add Meta Pixel, TikTok Pixel or other marketing pixels here after marketing consent is granted.
  console.log("Marketing consent granted");
}

function getCookieConsent() {
  try {
    return JSON.parse(localStorage.getItem("meridianCookieConsent"));
  } catch {
    return null;
  }
}

function saveCookieConsent(consent) {
  localStorage.setItem("meridianCookieConsent", JSON.stringify(consent));

  if (consent.analytics) {
    loadAnalytics();
  }

  if (consent.marketing) {
    loadMarketingPixels();
  }
}

function createCookieConsentUI() {
  const banner = document.createElement("section");
  banner.className = "cookie-banner";
  banner.setAttribute("aria-label", "Cookie consent");
  banner.hidden = true;
  banner.innerHTML = `
    <p>
      We use cookies to improve your browsing experience, understand site performance and support marketing where
      permitted. You can accept all cookies, reject non-essential cookies or manage your preferences.
    </p>
    <div class="cookie-actions">
      <button class="cookie-button primary" type="button" data-cookie-accept>Accept all</button>
      <button class="cookie-button" type="button" data-cookie-reject>Reject non-essential</button>
      <button class="cookie-button" type="button" data-cookie-manage>Manage preferences</button>
    </div>
  `;

  const modal = document.createElement("div");
  modal.className = "modal-backdrop";
  modal.hidden = true;
  modal.setAttribute("data-cookie-modal", "");
  modal.innerHTML = `
    <div class="cookie-modal" role="dialog" aria-modal="true" aria-labelledby="cookie-title" tabindex="-1">
      <button class="modal-close" type="button" aria-label="Close cookie preferences" data-cookie-close>&times;</button>
      <h2 id="cookie-title">Cookie preferences</h2>
      <p>Choose which optional cookies Meridian Attire may use. Strictly necessary cookies are always active.</p>
      <div class="cookie-choice">
        <div>
          <h3>Strictly necessary cookies</h3>
          <p>Required for security, page navigation, cookie preferences and external checkout links.</p>
        </div>
        <label class="toggle" aria-label="Strictly necessary cookies always active">
          <input type="checkbox" checked disabled />
          <span></span>
        </label>
      </div>
      <div class="cookie-choice">
        <div>
          <h3>Analytics cookies</h3>
          <p>Help us understand site performance and product interest.</p>
        </div>
        <label class="toggle" aria-label="Analytics cookies">
          <input type="checkbox" data-cookie-analytics />
          <span></span>
        </label>
      </div>
      <div class="cookie-choice">
        <div>
          <h3>Marketing cookies</h3>
          <p>Support advertising measurement and marketing where permitted.</p>
        </div>
        <label class="toggle" aria-label="Marketing cookies">
          <input type="checkbox" data-cookie-marketing />
          <span></span>
        </label>
      </div>
      <div class="cookie-choice">
        <div>
          <h3>Preference cookies</h3>
          <p>Remember choices such as display and cookie settings.</p>
        </div>
        <label class="toggle" aria-label="Preference cookies">
          <input type="checkbox" data-cookie-preferences />
          <span></span>
        </label>
      </div>
      <div class="cookie-modal-actions">
        <button class="cookie-button" type="button" data-cookie-modal-reject>Reject non-essential</button>
        <button class="cookie-button primary" type="button" data-cookie-save>Save choices</button>
      </div>
    </div>
  `;

  document.body.append(banner, modal);
  return { banner, modal };
}

function initCookieConsent() {
  const { banner, modal } = createCookieConsentUI();
  const existingConsent = getCookieConsent();

  if (existingConsent) {
    saveCookieConsent(existingConsent);
  } else {
    banner.hidden = false;
  }

  const closePreferences = () => {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  };

  const storeConsent = (consent) => {
    saveCookieConsent({ necessary: true, ...consent });
    banner.hidden = true;
    closePreferences();
  };

  banner.querySelector("[data-cookie-accept]").addEventListener("click", () => {
    storeConsent({ analytics: true, marketing: true, preferences: true });
  });

  banner.querySelector("[data-cookie-reject]").addEventListener("click", () => {
    storeConsent({ analytics: false, marketing: false, preferences: false });
  });

  banner.querySelector("[data-cookie-manage]").addEventListener("click", () => {
    modal.hidden = false;
    document.body.classList.add("modal-open");
    requestAnimationFrame(() => modal.querySelector("[role='dialog']").focus());
  });

  modal.querySelector("[data-cookie-close]").addEventListener("click", closePreferences);
  modal.querySelector("[data-cookie-modal-reject]").addEventListener("click", () => {
    storeConsent({ analytics: false, marketing: false, preferences: false });
  });
  modal.querySelector("[data-cookie-save]").addEventListener("click", () => {
    storeConsent({
      analytics: modal.querySelector("[data-cookie-analytics]").checked,
      marketing: modal.querySelector("[data-cookie-marketing]").checked,
      preferences: modal.querySelector("[data-cookie-preferences]").checked,
    });
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closePreferences();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closePreferences();
    }
  });
}

function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  const message = document.querySelector("[data-contact-message]");
  if (!form || !message) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      message.textContent = "Please complete the required fields.";
      form.reportValidity();
      return;
    }

    form.reset();
    message.textContent = "Thank you for contacting Meridian Attire. We aim to reply within 12 business days.";
  });
}

function initExitIntent() {
  if (!selectors.exitIntent || window.matchMedia("(max-width: 900px)").matches) return;
  if (sessionStorage.getItem("meridianExitIntentShown")) return;

  const showExitIntent = (event) => {
    if (event.clientY > 8) return;
    sessionStorage.setItem("meridianExitIntentShown", "true");
    selectors.exitIntent.hidden = false;
    document.body.classList.add("modal-open");
    document.removeEventListener("mouseout", showExitIntent);
  };

  document.addEventListener("mouseout", showExitIntent);
  selectors.exitIntent.querySelectorAll("[data-exit-close], a").forEach((item) => {
    item.addEventListener("click", () => {
      selectors.exitIntent.hidden = true;
      document.body.classList.remove("modal-open");
    });
  });
}

function init() {
  updateWishlistCount();
  renderProducts();
  renderProductDetail();
  renderProductCollections();
  renderRecentlyViewed();
  renderWishlistModal();
  injectProductSchema();
  initHeaderBehaviour();
  initNavigation();
  initRevealAnimation();
  initControls();
  initModals();
  initNewsletter();
  initStyleQuiz();
  initContactForm();
  initCookieConsent();
  initExitIntent();
  initGlobalClicks();
}

init();
