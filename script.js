const products = [
  {
    name: "Dalyace Hair Bandana Scarf",
    category: "Hair Accessories",
    description: "A lightweight scarf made for effortless summer styling.",
    price: "£14.99",
    link: "#WIX_PRODUCT_LINK_1",
    tone: "linear-gradient(145deg, #efe4cf, #c8ad78 52%, #7c8460)",
  },
  {
    name: "MESEF Solid Colour Silk Scarf",
    category: "Hair Accessories",
    description: "A minimal silk-style scarf for polished holiday looks.",
    price: "£16.99",
    link: "#WIX_PRODUCT_LINK_2",
    tone: "linear-gradient(145deg, #f7f1e4, #d8c4a0 55%, #b99a5d)",
  },
  {
    name: "AWAYTR Crochet Head Scarf",
    category: "Hair Accessories",
    description: "A festival-inspired crochet head scarf for sunny days.",
    price: "£18.99",
    link: "#WIX_PRODUCT_LINK_3",
    tone: "linear-gradient(145deg, #f3ead9, #b9bf98 45%, #4f573c)",
  },
  {
    name: "Vastar 2PCS Small Pearl Hair Clips",
    category: "Hair Accessories",
    description: "Elegant pearl clips for soft, feminine styling.",
    price: "£12.99",
    link: "#WIX_PRODUCT_LINK_4",
    tone: "linear-gradient(145deg, #ffffff, #eee4d2 48%, #c9b27d)",
  },
  {
    name: "Mecari Rhinestone Hair Clips",
    category: "Hair Accessories",
    description: "Sparkling hair clips for evening, events and summer outfits.",
    price: "£14.99",
    link: "#WIX_PRODUCT_LINK_5",
    tone: "linear-gradient(145deg, #f8f7f2, #d9d2c1 48%, #171511)",
  },
  {
    name: "Women Chinese Orchid Flower Hair Clip",
    category: "Hair Accessories",
    description: "A statement flower clip for holiday and festival looks.",
    price: "£13.99",
    link: "#WIX_PRODUCT_LINK_6",
    tone: "linear-gradient(145deg, #f4e6d7, #d0a28a 48%, #7c8460)",
  },
  {
    name: "Anthony Flower Rose Hair Clip",
    category: "Hair Accessories",
    description: "A bold rose hair clip for standout summer styling.",
    price: "£15.99",
    link: "#WIX_PRODUCT_LINK_7",
    tone: "linear-gradient(145deg, #f3dfd4, #bb795f 48%, #171511)",
  },
  {
    name: "3 Inch Tortoise Shell Hair Claw Clip",
    category: "Hair Accessories",
    description: "A timeless claw clip for everyday effortless hair.",
    price: "£11.99",
    link: "#WIX_PRODUCT_LINK_8",
    tone: "linear-gradient(145deg, #e5c78f, #8d693d 50%, #271d14)",
  },
  {
    name: "WANLINKER Square Oversized Sunglasses",
    category: "Sunglasses",
    description: "Oversized square sunglasses with a clean, modern finish.",
    price: "£24.99",
    link: "#WIX_PRODUCT_LINK_9",
    tone: "linear-gradient(145deg, #f5f0e5, #91866f 48%, #171511)",
  },
  {
    name: "LVZOIT Black Oversized Sunglasses",
    category: "Sunglasses",
    description: "Classic black oversized sunglasses for a confident summer look.",
    price: "£26.99",
    link: "#WIX_PRODUCT_LINK_10",
    tone: "linear-gradient(145deg, #d8c4a0, #3a332a 48%, #080807)",
  },
  {
    name: "BLOOMWAY Pearl Eyeglass Chain",
    category: "Sunglasses",
    description: "A pearl beaded chain to elevate your sunglasses.",
    price: "£12.99",
    link: "#WIX_PRODUCT_LINK_11",
    tone: "linear-gradient(145deg, #fffdf7, #e3d8c2 50%, #b99a5d)",
  },
  {
    name: "Straw Clutch Purse Summer Beach Bag",
    category: "Bags",
    description: "A chic straw clutch made for holidays, beach days and summer evenings.",
    price: "£34.99",
    link: "#WIX_PRODUCT_LINK_12",
    tone: "linear-gradient(145deg, #f7edd7, #cda965 48%, #7c8460)",
  },
  {
    name: "Zany Dye Heart Raffia Earrings",
    category: "Jewellery",
    description: "Lightweight raffia earrings with a playful summer feel.",
    price: "£13.99",
    link: "#WIX_PRODUCT_LINK_13",
    tone: "linear-gradient(145deg, #fbefe2, #d69b72 48%, #a8864e)",
  },
  {
    name: "RUOFFETTA Raffia Starfish Earrings",
    category: "Jewellery",
    description: "Beach-inspired starfish earrings for holiday outfits.",
    price: "£14.99",
    link: "#WIX_PRODUCT_LINK_14",
    tone: "linear-gradient(145deg, #f9f2df, #d8c4a0 52%, #4f573c)",
  },
];

const productGrid = document.querySelector("#product-grid");
const filterButtons = document.querySelectorAll(".filter-button");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

function productInitial(productName) {
  return productName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

function renderProducts(category = "All") {
  const visibleProducts =
    category === "All" ? products : products.filter((product) => product.category === category);

  productGrid.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="product-card" data-category="${product.category}">
          <div
            class="product-image"
            data-initial="${productInitial(product.name)}"
            style="--placeholder-bg: ${product.tone}"
            aria-label="Image placeholder for ${product.name}"
          ></div>
          <div class="product-body">
            <span class="category">${product.category}</span>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-footer">
              <span class="price">${product.price}</span>
              <a class="buy-button" href="${product.link}" target="_blank" rel="noopener">Buy Now</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
});

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

renderProducts();
