/**
 * RecipeSpark - Smart Recipe Finder Application Logic
 * Demonstrates: DOM Manipulation, Event Handling, Array Methods, Local Storage, Theme Toggle
 */

// ==========================================================================
// APPLICATION STATE
// ==========================================================================
const state = {
    recipes: [],
    searchQuery: "",
    selectedCategory: "all",
    favorites: new Set(),
    currentTab: "browse", // 'browse' or 'favorites'
    theme: "light"
};

// ==========================================================================
// DOM ELEMENTS REFERENCE
// ==========================================================================
const elements = {
    // Search
    searchInput: document.getElementById("search-input"),
    clearSearchBtn: document.getElementById("clear-search-btn"),
    searchContainer: document.getElementById("search-container"),
    
    // Theme Toggle
    themeToggleBtn: document.getElementById("theme-toggle-btn"),
    
    // Tabs
    tabBrowse: document.getElementById("tab-browse"),
    tabFavorites: document.getElementById("tab-favorites"),
    favoritesCount: document.getElementById("favorites-count"),
    
    // Filters
    categoriesGroup: document.getElementById("categories-btn-group"),
    activeFiltersBar: document.getElementById("active-filters-info"),
    pillsContainer: document.getElementById("pills-container"),
    resetFiltersBtn: document.getElementById("reset-filters-link"),
    
    // Recipes Grid
    recipeGrid: document.getElementById("recipe-cards-grid"),
    displayHeading: document.getElementById("section-display-heading"),
    
    // Empty State
    emptyState: document.getElementById("empty-state-view"),
    emptyTitle: document.getElementById("empty-title-text"),
    emptyDesc: document.getElementById("empty-desc-text"),
    emptyActionBtn: document.getElementById("empty-action-btn"),
    
    // Modal
    modal: document.getElementById("recipe-detail-modal"),
    modalClose: document.getElementById("modal-close-trigger"),
    modalImage: document.getElementById("modal-recipe-image"),
    modalCategory: document.getElementById("modal-recipe-category"),
    modalName: document.getElementById("modal-recipe-name"),
    modalFavToggle: document.getElementById("modal-fav-toggle"),
    modalPrep: document.getElementById("modal-prep-time"),
    modalCook: document.getElementById("modal-cook-time"),
    modalDifficulty: document.getElementById("modal-difficulty"),
    modalServings: document.getElementById("modal-servings"),
    modalIngredients: document.getElementById("modal-ingredients-list"),
    modalInstructions: document.getElementById("modal-instructions-steps")
};

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // 1. Load data from imported recipes.js
    if (typeof RECIPES_DATA !== "undefined") {
        state.recipes = RECIPES_DATA;
    } else {
        console.error("RECIPES_DATA not found. Make sure recipes.js is loaded before app.js.");
    }
    
    // 2. Initialize State from Local Storage
    initTheme();
    initFavorites();
    
    // 3. Register Event Listeners
    setupEventListeners();
    
    // 4. Initial Render
    render();
});

/**
 * Loads the theme from local storage and applies it.
 */
function initTheme() {
    const savedTheme = localStorage.getItem("recipe-theme") || "light";
    state.theme = savedTheme;
    document.documentElement.setAttribute("data-theme", savedTheme);
}

/**
 * Loads favorites list from local storage.
 */
function initFavorites() {
    const savedFavs = localStorage.getItem("recipe-favorites");
    if (savedFavs) {
        try {
            const parsedArray = JSON.parse(savedFavs);
            state.favorites = new Set(parsedArray);
        } catch (e) {
            console.error("Failed to parse favorites from Local Storage", e);
            state.favorites = new Set();
        }
    }
    updateFavoritesBadge();
}

// ==========================================================================
// EVENT LISTENERS SETUP
// ==========================================================================
function setupEventListeners() {
    // Live Search input
    elements.searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value.trim().toLowerCase();
        
        // Show/hide clear button based on query
        if (state.searchQuery.length > 0) {
            elements.clearSearchBtn.classList.remove("hidden");
        } else {
            elements.clearSearchBtn.classList.add("hidden");
        }
        render();
    });

    // Clear search button
    elements.clearSearchBtn.addEventListener("click", () => {
        elements.searchInput.value = "";
        state.searchQuery = "";
        elements.clearSearchBtn.classList.add("hidden");
        elements.searchInput.focus();
        render();
    });

    // Hotkey: Press '/' to focus search input
    document.addEventListener("keydown", (e) => {
        if (e.key === "/" && document.activeElement !== elements.searchInput) {
            e.preventDefault(); // Prevent character insertion
            elements.searchInput.focus();
            elements.searchInput.select();
        }
    });

    // Theme Toggle
    elements.themeToggleBtn.addEventListener("click", toggleTheme);

    // Tab buttons (Browse vs Favorites)
    elements.tabBrowse.addEventListener("click", () => switchTab("browse"));
    elements.tabFavorites.addEventListener("click", () => switchTab("favorites"));

    // Category button filters
    elements.categoriesGroup.addEventListener("click", (e) => {
        const catBtn = e.target.closest(".category-btn");
        if (!catBtn) return;
        
        // Update active class on DOM
        elements.categoriesGroup.querySelectorAll(".category-btn").forEach(btn => {
            btn.classList.remove("active");
        });
        catBtn.classList.add("active");
        
        // Update state
        state.selectedCategory = catBtn.dataset.category;
        render();
    });

    // Reset all filters button
    elements.resetFiltersBtn.addEventListener("click", clearAllFilters);
    
    // Empty state action button
    elements.emptyActionBtn.addEventListener("click", () => {
        if (state.currentTab === "favorites") {
            switchTab("browse");
        } else {
            clearAllFilters();
        }
    });

    // Modal close events
    elements.modalClose.addEventListener("click", closeModal);
    elements.modal.addEventListener("click", (e) => {
        if (e.target === elements.modal) closeModal();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !elements.modal.classList.contains("hidden")) {
            closeModal();
        }
    });
}

// ==========================================================================
// STATE MUTATIONS & CORE LOGIC
// ==========================================================================

/**
 * Switches the active viewport tab.
 * @param {string} tabName - 'browse' or 'favorites'
 */
function switchTab(tabName) {
    if (state.currentTab === tabName) return;
    state.currentTab = tabName;
    
    // Toggle active state classes
    if (tabName === "browse") {
        elements.tabBrowse.classList.add("active");
        elements.tabFavorites.classList.remove("active");
    } else {
        elements.tabBrowse.classList.remove("active");
        elements.tabFavorites.classList.add("active");
    }
    
    render();
}

/**
 * Resets search input and category buttons back to default 'all'.
 */
function clearAllFilters() {
    state.searchQuery = "";
    state.selectedCategory = "all";
    elements.searchInput.value = "";
    elements.clearSearchBtn.classList.add("hidden");
    
    // Reset active category button
    elements.categoriesGroup.querySelectorAll(".category-btn").forEach(btn => {
        if (btn.dataset.category === "all") {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    render();
}

/**
 * Toggles dark/light theme state and updates Local Storage.
 */
function toggleTheme() {
    const nextTheme = state.theme === "light" ? "dark" : "light";
    state.theme = nextTheme;
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("recipe-theme", nextTheme);
}

/**
 * Toggles a recipe favorited status.
 * @param {number} recipeId - The ID of the recipe to toggle
 * @param {HTMLElement} btnElement - Optional heart button node to animate
 */
function toggleFavorite(recipeId, btnElement = null) {
    const isFav = state.favorites.has(recipeId);
    
    if (isFav) {
        state.favorites.delete(recipeId);
    } else {
        state.favorites.add(recipeId);
    }
    
    // Save updated list in local storage
    localStorage.setItem("recipe-favorites", JSON.stringify(Array.from(state.favorites)));
    updateFavoritesBadge();
    
    // Animate heart button
    if (btnElement) {
        btnElement.classList.toggle("favorited", !isFav);
        const svg = btnElement.querySelector("svg");
        if (svg) {
            svg.classList.add("animate-pulse");
            svg.addEventListener("animationend", () => {
                svg.classList.remove("animate-pulse");
            }, { once: true });
        }
    }
    
    // Re-render
    // Note: If on favorites tab, we should full re-render since cards are added/removed.
    // If not, we can either re-render or selectively update other nodes.
    // For simplicity and correctness, we trigger a re-render.
    render();
    
    // Also sync the modal fav button if modal is open and has this recipe loaded
    const modalRecipeId = elements.modalFavToggle.dataset.id;
    if (modalRecipeId == recipeId) {
        elements.modalFavToggle.classList.toggle("favorited", !isFav);
    }
}

/**
 * Synchronizes the visual favorited badge count in the tabs.
 */
function updateFavoritesBadge() {
    elements.favoritesCount.textContent = state.favorites.size;
}

// ==========================================================================
// RENDER ENGINE
// ==========================================================================

/**
 * Master render function that filters list and populates grid.
 */
function render() {
    // 1. Filtering list using ES6 Array methods
    let filteredList = state.recipes;
    
    // Filter by Tab (My Favorites)
    if (state.currentTab === "favorites") {
        filteredList = filteredList.filter(recipe => state.favorites.has(recipe.id));
    }
    
    // Filter by Category
    if (state.selectedCategory !== "all") {
        filteredList = filteredList.filter(recipe => recipe.category === state.selectedCategory);
    }
    
    // Filter by Search Query (Name or Ingredient match)
    if (state.searchQuery.length > 0) {
        filteredList = filteredList.filter(recipe => {
            const nameMatch = recipe.name.toLowerCase().includes(state.searchQuery);
            const ingredientMatch = recipe.ingredients.some(ing => ing.toLowerCase().includes(state.searchQuery));
            return nameMatch || ingredientMatch;
        });
    }
    
    // 2. Render Cards Grid
    renderCards(filteredList);
    
    // 3. Render Active Filter Bar Pills
    renderFilterPills();
    
    // 4. Update Header Title based on filters and tab
    updateViewTitles(filteredList.length);
}

/**
 * Handles generating card markup and populating grid.
 * @param {Array} list - Filtered array of recipes
 */
function renderCards(list) {
    elements.recipeGrid.innerHTML = "";
    
    if (list.length === 0) {
        // Show empty state
        elements.recipeGrid.classList.add("hidden");
        elements.emptyState.classList.remove("hidden");
        
        // Custom empty state messages
        if (state.currentTab === "favorites") {
            elements.emptyTitle.textContent = "No Favorites Saved Yet";
            elements.emptyDesc.textContent = "Browse recipes and click the heart icon on any card to save it here for offline access.";
            elements.emptyActionBtn.textContent = "Browse All Recipes";
        } else {
            elements.emptyTitle.textContent = "No Matching Recipes";
            elements.emptyDesc.textContent = `We couldn't find any recipes matching "${state.searchQuery || state.selectedCategory}". Try clearing your filters.`;
            elements.emptyActionBtn.textContent = "Reset All Filters";
        }
        return;
    }
    
    // Hide empty state & show grid
    elements.emptyState.classList.add("hidden");
    elements.recipeGrid.classList.remove("hidden");
    
    // Build Fragment for performance
    const fragment = document.createDocumentFragment();
    
    list.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.dataset.id = recipe.id;
        
        const isFav = state.favorites.has(recipe.id);
        
        card.innerHTML = `
            <div class="card-img-container">
                <img src="${recipe.image}" alt="${recipe.name}" loading="lazy" onerror="this.src='images/default-recipe.png'">
                <button class="fav-card-btn ${isFav ? 'favorited' : ''}" data-id="${recipe.id}" aria-label="Add to favorites">
                    <svg class="heart-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
                <span class="card-category-badge badge-${recipe.category}">${recipe.category}</span>
            </div>
            <div class="card-body">
                <h3 class="card-title">${recipe.name}</h3>
                <div class="card-metadata">
                    <div class="meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <span>${recipe.cookTime}</span>
                    </div>
                    <div class="meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        <span>${recipe.difficulty}</span>
                    </div>
                </div>
            </div>
        `;
        
        // Event delegation fallback: click on card opens modal, click on favorite button triggers favorite
        const cardTitle = card.querySelector(".card-title");
        const cardImg = card.querySelector(".card-img-container img");
        const favBtn = card.querySelector(".fav-card-btn");
        
        cardTitle.addEventListener("click", () => openModal(recipe.id));
        cardImg.addEventListener("click", () => openModal(recipe.id));
        
        favBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleFavorite(recipe.id, favBtn);
        });
        
        fragment.appendChild(card);
    });
    
    elements.recipeGrid.appendChild(fragment);
}

/**
 * Handles updating active filter pills bar visual states.
 */
function renderFilterPills() {
    elements.pillsContainer.innerHTML = "";
    
    const showCategoryPill = state.selectedCategory !== "all";
    const showSearchPill = state.searchQuery.length > 0;
    
    if (!showCategoryPill && !showSearchPill) {
        elements.activeFiltersBar.classList.add("hidden");
        return;
    }
    
    elements.activeFiltersBar.classList.remove("hidden");
    
    if (showCategoryPill) {
        const pill = createPill(`Category: ${state.selectedCategory}`, () => {
            // Remove category filter
            state.selectedCategory = "all";
            elements.categoriesGroup.querySelectorAll(".category-btn").forEach(btn => {
                if (btn.dataset.category === "all") btn.classList.add("active");
                else btn.classList.remove("active");
            });
            render();
        });
        elements.pillsContainer.appendChild(pill);
    }
    
    if (showSearchPill) {
        const pill = createPill(`Search: "${state.searchQuery}"`, () => {
            // Remove search filter
            state.searchQuery = "";
            elements.searchInput.value = "";
            elements.clearSearchBtn.classList.add("hidden");
            render();
        });
        elements.pillsContainer.appendChild(pill);
    }
}

/**
 * Helper to build pill elements.
 * @param {string} text - Title of pill
 * @param {Function} onClose - Handler when pill is closed
 * @returns {HTMLElement} pill element
 */
function createPill(text, onClose) {
    const pill = document.createElement("div");
    pill.className = "filter-pill";
    pill.innerHTML = `
        <span>${text}</span>
        <button class="remove-pill-btn" aria-label="Remove filter">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    `;
    pill.querySelector("button").addEventListener("click", onClose);
    return pill;
}

/**
 * Updates section header heading titles based on tab and length.
 * @param {number} count - Total visible recipes
 */
function updateViewTitles(count) {
    const textPrefix = state.currentTab === "favorites" ? "My Saved Favorites" : "All Available Recipes";
    const countSuffix = count > 0 ? ` (${count})` : "";
    elements.displayHeading.textContent = `${textPrefix}${countSuffix}`;
}

// ==========================================================================
// RECIPE DETAILS MODAL LOGIC
// ==========================================================================

/**
 * Populates details and displays the modal window.
 * @param {number} recipeId - The ID of the recipe to display
 */
function openModal(recipeId) {
    const recipe = state.recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    // 1. Populate image & meta
    elements.modalImage.src = recipe.image;
    elements.modalImage.alt = recipe.name;
    elements.modalCategory.textContent = recipe.category;
    
    // Clear existing badges classes and add current one
    elements.modalCategory.className = "category-pill";
    elements.modalCategory.classList.add(`badge-${recipe.category}`);
    
    elements.modalName.textContent = recipe.name;
    
    // Set favorite button active state and assign data-id
    const isFav = state.favorites.has(recipe.id);
    elements.modalFavToggle.dataset.id = recipe.id;
    elements.modalFavToggle.classList.toggle("favorited", isFav);
    
    // Re-bind favorite click event specifically for this instance
    elements.modalFavToggle.onclick = () => {
        toggleFavorite(recipe.id, elements.modalFavToggle);
    };
    
    // 2. Quick stats
    elements.modalPrep.textContent = recipe.prepTime;
    elements.modalCook.textContent = recipe.cookTime;
    elements.modalDifficulty.textContent = recipe.difficulty;
    elements.modalServings.textContent = recipe.servings;
    
    // 3. Ingredients list (Checklist)
    elements.modalIngredients.innerHTML = "";
    recipe.ingredients.forEach((ingredient, index) => {
        const item = document.createElement("li");
        item.className = "ingredient-item";
        item.innerHTML = `
            <div class="ingredient-checkbox" role="checkbox" aria-checked="false" tabindex="0"></div>
            <span>${ingredient}</span>
        `;
        
        // Listeners for checkbox toggling
        const toggleCheck = () => {
            const isChecked = item.classList.toggle("checked");
            item.querySelector(".ingredient-checkbox").setAttribute("aria-checked", isChecked);
        };
        
        item.addEventListener("click", toggleCheck);
        item.addEventListener("keydown", (e) => {
            if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                toggleCheck();
            }
        });
        
        elements.modalIngredients.appendChild(item);
    });
    
    // 4. Instructions list (Numbered steps)
    elements.modalInstructions.innerHTML = "";
    recipe.instructions.forEach((step, index) => {
        const item = document.createElement("li");
        item.className = "step-item";
        item.innerHTML = `
            <div class="step-number">${index + 1}</div>
            <div class="step-text">${step}</div>
        `;
        elements.modalInstructions.appendChild(item);
    });
    
    // 5. Open and disable background scrolling
    elements.modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

/**
 * Closes modal and resets scroll parameters.
 */
function closeModal() {
    elements.modal.classList.add("hidden");
    document.body.style.overflow = "";
}
