# Smart Recipe Finder

A premium, responsive, and developer-interview-ready Recipe Finder web application built from scratch using clean, semantic HTML5, modern CSS3 (Flexbox, Grid, Custom Properties, Dark Mode), and Vanilla JavaScript. 

---

## 🚀 Key Features

1. **Comprehensive Recipe Catalog**: Includes 20 curated recipes covering Breakfast, Lunch, Dinner, Snacks, and Dessert categories with preparation details.
2. **Instant Search & Filter**:
   - Live-search by recipe name or ingredients.
   - Instantly filter by category button groups.
   - Combined filters (e.g., search within a specific category) represented with interactive filter pills.
3. **Favorites Manager**:
   - Save or remove recipes to/from a local favorites bank.
   - Instant persistence utilizing browser `LocalStorage`.
   - Separate "My Favorites" dashboard tab that updates in real-time.
4. **Detailed Cooking Modal**:
   - Click cards to reveal a slide-in glassmorphic popup detailed view.
   - Interactive checklist for ingredients so you can mark them off as you cook.
   - Clear step-by-step instructions.
5. **Aesthetic Dark / Light Mode**:
   - Toggle button changes theme seamlessly with smooth transitions.
   - Saves preferences to `LocalStorage` to persist across reloads.
6. **Fully Responsive Design**: Beautifully fits desktop, tablet, and mobile displays using custom-tailored media queries, CSS Grid, and Flexbox.

---

## 🛠️ Tech Stack & Architecture

- **Structure**: HTML5 (Semantic elements: `<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`, `<dialog>`).
- **Styling**: Vanilla CSS3 using custom properties (variables) for theme control, flexbox/grid for layout, and cubic-bezier transitions for micro-interactions.
- **Logic**: Vanilla ES6 JavaScript (pure state-driven UI updates, no frameworks, zero dependencies).
- **Data Persistence**: HTML5 `LocalStorage` API.

---

## 📂 Folder Structure

```
recipe-finder/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js          # Core Application Logic & Event Handlers
│   └── recipes.js      # Local JSON Recipe Dataset (22 items)
├── images/
│   ├── logo.png        # Generated Brand Logo Asset
│   └── default-recipe.png # Fallback/Default Recipe Placeholder Image
└── README.md
```

---

## 💻 JavaScript Concepts Demonstrated

This project is structured specifically to show off solid frontend core concepts during engineering interviews:
- **DOM Manipulation & Dynamic Rendering**: Constructing card layouts on-the-fly and injecting content using custom document fragments (optimizing paint/reflows).
- **Event Handling & Delegation**: Efficiently mapping events for cards, tabs, and filters.
- **Array Methods**: Utilizing `.filter()`, `.some()`, `.map()`, `.find()`, and `.includes()` for search logic and favorites management.
- **State Management**: Keeping a single source of truth (`state` object) that maps state variables to immediate DOM updates.
- **Storage Persistence**: Serialization and parsing of lists using `JSON.stringify` / `JSON.parse` with `localStorage.setItem` / `localStorage.getItem`.

---

## 🖥️ How to Run the Project

This is a static frontend project built with HTML, CSS, and JavaScript, so no installation or build tools are required.

1. Open the project in IntelliJ IDEA.
2. Open the `index.html` file.
3. Click the browser icon in the top-right corner of the editor (Chrome, Edge, Firefox, etc.).
4. The application will open in your default web browser and is ready to use.
--
