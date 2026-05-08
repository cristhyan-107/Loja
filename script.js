const products = [
  {
    id: 1,
    name: "Dalyace Hair Bandana Scarf",
    category: "Hair Accessories",
    description: "A lightweight scarf made for effortless summer styling.",
    price: 14.99,
    badge: "Holiday Essential",
    link: "#WIX_PRODUCT_LINK_1",
    tone: "linear-gradient(145deg, #efe4cf, #c8ad78 52%, #7c8460)",
  },
  {
    id: 2,
    name: "MESEF Solid Colour Silk Scarf",
    category: "Hair Accessories",
    description: "A minimal silk-style scarf for polished holiday looks.",
    price: 16.99,
    badge: "New In",
    link: "#WIX_PRODUCT_LINK_2",
    tone: "linear-gradient(145deg, #f7f1e4, #d8c4a0 55%, #b99a5d)",
  },
  {
    id: 3,
    name: "AWAYTR Crochet Head Scarf",
    category: "Hair Accessories",
    description: "A festival-inspired crochet head scarf for sunny days.",
    price: 18.99,
    badge: "Festival Pick",
    link: "#WIX_PRODUCT_LINK_3",
    tone: "linear-gradient(145deg, #f3ead9, #b9bf98 45%, #4f573c)",
  },
  {
    id: 4,
    name: "Vastar 2PCS Small Pearl Hair Clips",
    category: "Hair Accessories",
    description: "Elegant pearl clips for soft, feminine styling.",
    price: 12.99,
    badge: "Best Seller",
    link: "#WIX_PRODUCT_LINK_4",
    tone: "linear-gradient(145deg, #ffffff, #eee4d2 48%, #c9b27d)",
  },
  {
    id: 5,
    name: "Mecari Rhinestone Hair Clips",
    category: "Hair Accessories",
    description: "Sparkling hair clips for evening, events and summer outfits.",
    price: 14.99,
    badge: "New In",
    link: "#WIX_PRODUCT_LINK_5",
    tone: "linear-gradient(145deg, #f8f7f2, #d9d2c1 48%, #171511)",
  },
  {
    id: 6,
    name: "Women Chinese Orchid Flower Hair Clip",
    category: "Hair Accessories",
    description: "A statement flower clip for holiday and festival looks.",
    price: 13.99,
    badge: "Festival Pick",
    link: "#WIX_PRODUCT_LINK_6",
    tone: "linear-gradient(145deg, #f4e6d7, #d0a28a 48%, #7c8460)",
  },
  {
    id: 7,
    name: "Anthony Flower Rose Hair Clip",
    category: "Hair Accessories",
    description: "A bold rose hair clip for standout summer styling.",
    price: 15.99,
    badge: "Festival Pick",
    link: "#WIX_PRODUCT_LINK_7",
    tone: "linear-gradient(145deg, #f3dfd4, #bb795f 48%, #171511)",
  },
  {
    id: 8,
    name: "3 Inch Tortoise Shell Hair Claw Clip",
    category: "Hair Accessories",
    description: "A timeless claw clip for everyday effortless hair.",
    price: 11.99,
    badge: "Everyday Essential",
    link: "#WIX_PRODUCT_LINK_8",
    tone: "linear-gradient(145deg, #e5c78f, #8d693d 50%, #271d14)",
  },
  {
    id: 9,
    name: "WANLINKER Square Oversized Sunglasses",
    category: "Sunglasses",
    description: "Oversized square sunglasses with a clean, modern finish.",
    price: 24.99,
    badge: "Best Seller",
    link: "#WIX_PRODUCT_LINK_9",
    tone: "linear-gradient(145deg, #f5f0e5, #91866f 48%, #171511)",
  },
  {
    id: 10,
    name: "LVZOIT Black Oversized Sunglasses",
    category: "Sunglasses",
    description: "Classic black oversized sunglasses for a confident summer look.",
    price: 26.99,
    badge: "Holiday Essential",
    link: "#WIX_PRODUCT_LINK_10",
    tone: "linear-gradient(145deg, #d8c4a0, #3a332a 48%, #080807)",
  },
  {
    id: 11,
    name: "BLOOMWAY Pearl Eyeglass Chain",
    category: "Sunglasses",
    description: "A pearl beaded chain to elevate your sunglasses.",
    price: 12.99,
    badge: "New In",
    link: "#WIX_PRODUCT_LINK_11",
    tone: "linear-gradient(145deg, #fffdf7, #e3d8c2 50%, #b99a5d)",
  },
  {
    id: 12,
    name: "Straw Clutch Purse Summer Beach Bag",
    category: "Bags",
    description: "A chic straw clutch made for holidays, beach days and summer evenings.",
    price: 34.99,
    badge: "Holiday Essential",
    link: "#WIX_PRODUCT_LINK_12",
    tone: "linear-gradient(145deg, #f7edd7, #cda965 48%, #7c8460)",
  },
  {
    id: 13,
    name: "Zany Dye Heart Raffia Earrings",
    category: "Jewellery",
    description: "Lightweight raffia earrings with a playful summer feel.",
    price: 13.99,
    badge: "Summer Pick",
    link: "#WIX_PRODUCT_LINK_13",
    tone: "linear-gradient(145deg, #fbefe2, #d69b72 48%, #a8864e)",
  },
  {
    id: 14,
    name: "RUOFFETTA Raffia Starfish Earrings",
    category: "Jewellery",
    description: "Beach-inspired starfish earrings for holiday outfits.",
    price: 14.99,
    badge: "Holiday Essential",
    link: "#WIX_PRODUCT_LINK_14",
    tone: "linear-gradient(145deg, #f9f2df, #d8c4a0 52%, #4f573c)",
  },
];

const state = {
  category: "All",
  search: "",
  sort: "featured",
  wishlist: loadWishlist(),
  lastFocusedElement: null,
};

const selectors = {
  header: document.querySelector("[data-header]"),
  nav: document.querySelector("#site-nav"),
  navLinks: document.querySelectorAll("[data-nav-link]"),
  menuToggle: document.querySelector("[data-menu-toggle]"),
  productGrid: document.querySelector("#product-grid"),
  filterButtons: document.querySelectorAll("[data-filter]"),
  searchInput: document.querySelector("[data-search-input]"),
  sortSelect: document.querySelector("[data-sort-select]"),
  wishlistCount: document.querySelector("[data-wishlist-count]"),
  quickViewModal: document.querySelector("[data-quick-view-modal]"),
  wishlistModal: document.querySelector("[data-wishlist-modal]"),
  mobileCta: document.querySelector("[data-mobile-cta]"),
  backToTop: document.querySelector("[data-back-to-top]"),
};

const currencyFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

function formatPrice(price) {
  return currencyFormatter.format(price);
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

function saveWishlist() {
  localStorage.setItem("meridianWishlist", JSON.stringify(state.wishlist));
  updateWishlistCount();
}

function updateWishlistCount() {
  selectors.wishlistCount.textContent = state.wishlist.length;
}

function isWishlisted(productId) {
  return state.wishlist.includes(productId);
}

function getFilteredProducts() {
  const query = state.search.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const matchesCategory = state.category === "All" || product.category === state.category;
    const matchesSearch =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.badge.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
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
          >♡</button>
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
          </div>
        </article>
      `
    )
    .join("");
}

function toggleWishlist(productId) {
  if (isWishlisted(productId)) {
    state.wishlist = state.wishlist.filter((id) => id !== productId);
  } else {
    state.wishlist = [...state.wishlist, productId];
  }

  saveWishlist();
  renderProducts();
  renderWishlistModal();
}

function renderWishlistModal() {
  const container = document.querySelector("[data-wishlist-items]");
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
            <p>${product.category} · ${formatPrice(product.price)}</p>
          </div>
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
  console.log(`Buy click: ${productName} - ${productLink}`);
}

function injectProductSchema() {
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
  const onScroll = () => {
    const isScrolled = window.scrollY > 18;
    selectors.header.classList.toggle("is-scrolled", isScrolled);
    selectors.backToTop.classList.toggle("visible", window.scrollY > 650);
    selectors.mobileCta.classList.toggle("visible", window.scrollY > window.innerHeight * 0.75);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initNavigation() {
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
  selectors.filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.filter;
      selectors.filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      renderProducts();
    });
  });

  selectors.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderProducts();
  });

  selectors.sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderProducts();
  });
}

function initModals() {
  selectors.productGrid.addEventListener("click", handleProductGridClick);

  document.querySelector("[data-open-wishlist]").addEventListener("click", () => {
    renderWishlistModal();
    openModal(selectors.wishlistModal);
  });

  document.querySelector("[data-close-modal]").addEventListener("click", () => closeModal(selectors.quickViewModal));
  document
    .querySelector("[data-close-wishlist]")
    .addEventListener("click", () => closeModal(selectors.wishlistModal));

  [selectors.quickViewModal, selectors.wishlistModal].forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    const openModalElement = [selectors.quickViewModal, selectors.wishlistModal].find((modal) => !modal.hidden);

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
    [selectors.quickViewModal, selectors.wishlistModal].forEach((modal) => {
      if (!modal.hidden) closeModal(modal);
    });
  });
}

function initNewsletter() {
  const form = document.querySelector("[data-newsletter-form]");
  const input = document.querySelector("[data-newsletter-email]");
  const message = document.querySelector("[data-newsletter-message]");

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

  selectors.backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function init() {
  updateWishlistCount();
  renderProducts();
  renderWishlistModal();
  injectProductSchema();
  initHeaderBehaviour();
  initNavigation();
  initRevealAnimation();
  initControls();
  initModals();
  initNewsletter();
  initGlobalClicks();
}

init();
