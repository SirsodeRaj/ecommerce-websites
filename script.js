const projects = [
  // 🔹 OLD 15 PROJECTS

  {
    name: "Clothing Store",
    description: "Fashion e-commerce website with product listing and UI interactions.",
    image: "./assets/clothing-store.png",
    live: "./projects/01-clothing-store/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },
  {
    name: "Grocery Store",
    description: "Online grocery shop layout with clean UI and responsive design.",
    image: "./assets/grocery-store.png",
    live: "./projects/02-grocery-store/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },
  {
    name: "Electronics Store",
    description: "Electronics e-commerce website with filters, cart, and product comparison.",
    image: "./assets/electronics-store.png",
    live: "./projects/03-electronics-store/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },
  {
    name: "Book Store",
    description: "Online book store with genre filter, search, sorting, and shopping cart functionality.",
    image: "./assets/book-store.png",
    live: "./projects/04-book-store/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },
  {
    name: "Footwear Store",
    description: "Modern shoe store with filters and cart system.",
    image: "./assets/footwear-store.png",
    live: "./projects/05-footwear-store/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },
  {
    name: "Furniture Store",
    description: "Premium furniture showroom website.",
    image: "./assets/furniture-store.png",
    live: "./projects/06-furniture-store/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },
  {
    name: "Plant Nursery Store",
    description: "Nature-inspired plant store UI.",
    image: "./assets/plant-nursery-store.png",
    live: "./projects/07-plant-nursery-store/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },
  {
    name: "Sports Equipment Store",
    description: "Sports ecommerce UI with filters.",
    image: "./assets/sports-equipment-store.png",
    live: "./projects/08-sports-equipment-store/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },
  {
    name: "Gift Shop",
    description: "Gift store with categories and UI.",
    image: "./assets/gift-shop.png",
    live: "./projects/09-gift-shop/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },
  {
    name: "Pharmacy Store",
    description: "Healthcare ecommerce UI.",
    image: "./assets/pharmacy-store.png",
    live: "./projects/10-pharmacy-store/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },
  {
    name: "Pet Supplies Store",
    description: "Pet product ecommerce UI.",
    image: "./assets/pet-supplies-store.png",
    live: "./projects/11-pet-supplies-store/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },
  {
    name: "Mobile Store",
    description: "Smartphone ecommerce UI.",
    image: "./assets/mobile-store.png",
    live: "./projects/12-mobile-store/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },
  {
    name: "Toy Store",
    description: "Colorful toy shop UI.",
    image: "./assets/toy-store.png",
    live: "./projects/13-toy-store/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },
  {
    name: "Jewelry Store",
    description: "Luxury jewelry UI design.",
    image: "./assets/jewelry-store.png",
    live: "./projects/14-jewelry-store/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },
  {
    name: "Bakery Store",
    description: "Warm bakery UI design.",
    image: "./assets/bakery-store.png",
    live: "./projects/15-bakery-store/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },

  // 🔥 NEW 10 PROJECTS

  {
    name: "Age Calculator",
    description: "Calculate age from DOB.",
    image: "https://via.placeholder.com/400x200?text=Age+Calculator",
    live: "./projects/16-age-calculator/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },
  {
    name: "Animated Search Bar",
    description: "Search UI animation.",
    image: "https://via.placeholder.com/400x200?text=Search+Bar",
    live: "./projects/17-animated-search-bar/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },
  {
    name: "Basic Calculator",
    description: "Simple calculator app.",
    image: "https://via.placeholder.com/400x200?text=Calculator",
    live: "./projects/18-basic-calculator/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },
  {
    name: "BMI Calculator",
    description: "Calculate BMI.",
    image: "https://via.placeholder.com/400x200?text=BMI",
    live: "./projects/19-bmi-calculator/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },
  {
    name: "Loading Bar",
    description: "Animated loading bar.",
    image: "https://via.placeholder.com/400x200?text=Loading",
    live: "./projects/20-loading-bar/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },
  {
    name: "Loan Calculator",
    description: "Loan EMI calculator.",
    image: "https://via.placeholder.com/400x200?text=Loan",
    live: "./projects/21-loan-calculator/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },
  {
    name: "Mouse Event",
    description: "Mouse interaction UI.",
    image: "https://via.placeholder.com/400x200?text=Mouse",
    live: "./projects/22-mouse-event/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },
  {
    name: "Sidebar",
    description: "Responsive sidebar UI.",
    image: "https://via.placeholder.com/400x200?text=Sidebar",
    live: "./projects/23-sidebar/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },
  {
    name: "Sticky Navbar",
    description: "Sticky navigation bar.",
    image: "https://via.placeholder.com/400x200?text=Navbar",
    live: "./projects/24-sticky-navbar/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  },
  {
    name: "Stopwatch",
    description: "Digital stopwatch.",
    image: "https://via.placeholder.com/400x200?text=Stopwatch",
    live: "./projects/25-stopwatch/index.html",
    code: "https://github.com/SirsodeRaj/ecommerce-websites"
  }
];

const grid = document.getElementById("projectsGrid");
const count = document.getElementById("projectCount");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <img src="${project.image}" alt="${project.name}" class="project-image">
    <div class="project-content">
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <div class="buttons">
        <a href="${project.live}" class="btn primary">Open Website</a>
        <a href="${project.code}" target="_blank" class="btn secondary">View Code</a>
      </div>
    </div>
  `;

  grid.appendChild(card);
});

count.textContent = projects.length;
