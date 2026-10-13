/**
 * Lyonel Coffee – menu data
 * ---------------------------------------------------------------
 * Single source of truth for every product on the site.
 * Edit names, descriptions, prices and images here; the Home
 * "Best Seller" cards and the Menu page both render from this list.
 *
 * category : "coffee" | "non-coffee"
 * price    : number in Rupiah (formatted automatically)
 * bestSeller: true -> shown in the Home "Best Seller" section
 * featuredImage: optional photo used on the Home Best Seller card
 */
const LYONEL_PRODUCTS = [
  // ---------- Coffee ----------
  {
    id: "coffee-latte",
    category: "coffee",
    name: "Coffee Latte",
    description: "Espresso dengan susu hangat dan creamy.",
    price: 18000,
    image: "assets/img/products/coffee-latte.png",
    bestSeller: true,
    featuredImage: "assets/img/products/best-coffee-latte.png",
  },
  {
    id: "americano",
    category: "coffee",
    name: "Americano",
    description: "Espresso dengan rasa yang kuat.",
    price: 10000,
    image: "assets/img/products/americano.png",
  },
  {
    id: "cappuccino",
    category: "coffee",
    name: "Cappuccino",
    description: "Campuran espresso, susu, dan milk foam.",
    price: 15000,
    image: "assets/img/products/cappuccino.png",
  },
  {
    id: "butterscotch-aren-latte",
    category: "coffee",
    name: "Butterscotch Aren Latte",
    description: "Espresso dengan rasa yang kuat.",
    price: 10000, // as written in the Canva reference – please confirm
    image: "assets/img/products/butterscotch-aren-latte.png",
  },
  {
    id: "mocha-latte",
    category: "coffee",
    name: "Mocha Latte",
    description: "Perpaduan espresso, susu, dan cokelat bubuk.",
    price: 18000,
    image: "assets/img/products/mocha-latte.png",
  },

  // ---------- Non Coffee ----------
  {
    id: "chocolate",
    category: "non-coffee",
    name: "Chocolate",
    description: "Minuman yang dibuat dari olahan biji kakao.",
    price: 18000,
    image: "assets/img/products/chocolate.png",
  },
  {
    id: "matcha-latte",
    category: "non-coffee",
    name: "Matcha Latte",
    description: "Campuran bubuk teh hijau matcha, air, dan susu.",
    price: 24000, // Home reference shows Rp 15.000 – Menu reference shows Rp 24.000
    image: "assets/img/products/matcha-latte.png",
    bestSeller: true,
    featuredImage: "assets/img/products/best-matcha-latte.png",
  },
  {
    id: "milk-tea",
    category: "non-coffee",
    name: "Milk Tea",
    description: "Campuran teh dan susu.",
    price: 15000,
    image: "assets/img/products/milk-tea.png",
  },
  {
    id: "red-velvet",
    category: "non-coffee",
    name: "Red Velvet",
    description: "Minuman berwarna merah, terinspirasi dari kue red velvet.",
    price: 24000,
    image: "assets/img/products/red-velvet.png",
  },
  {
    id: "avocado-milk",
    category: "non-coffee",
    name: "Avocado Milk",
    description: "Minuman buah alpukat yang dihaluskan dengan susu.",
    price: 26000,
    image: "assets/img/products/avocado-milk.png",
  },
];

/** Category labels shown in the Menu page heading. */
const LYONEL_CATEGORIES = {
  coffee: "Coffee",
  "non-coffee": "Non Coffee",
};
