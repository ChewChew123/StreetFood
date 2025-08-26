// favorites.js - Updated to handle images from Guides, Review, and Recipes
// --- DOM ELEMENTS ---
const favoritesListContainer = document.getElementById('favorites-list');
const sortDropdown = document.getElementById('sort-by');

// --- HELPER FUNCTIONS ---
function getCurrentUsername() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  return currentUser ? currentUser.username : null;
}

// Generate a simple hash for ID if not provided
function generateId(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = ((hash << 5) - hash) + name.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  return 'guide_' + Math.abs(hash).toString(36);
}

// --- DATA FUNCTIONS ---
function getFavorites() {
  const username = getCurrentUsername();
  if (!username) {
    return []; // No favorites for guest
  }
  const favoritesKey = `favorites_${username}`;
  return JSON.parse(localStorage.getItem(favoritesKey)) || [];
}

function saveFavorites(favorites) {
  const username = getCurrentUsername();
  if (!username) {
    return; // Cannot save for guest
  }
  const favoritesKey = `favorites_${username}`;
  localStorage.setItem(favoritesKey, JSON.stringify(favorites));
}

// Updated removeFavorite to handle name-based removal for Guides
function removeFavorite(identifier, type) {
  event.stopPropagation();
  let favorites = getFavorites();
  // Coerce identifier to string for consistency (handles numeric IDs from Reviews)
  identifier = String(identifier);
  // Always filter by id (generate if missing), and coerce item.id to string
  let updatedFavorites = favorites.filter(item => {
    const itemIdStr = String(item.id || generateId(item.name));
    return itemIdStr !== identifier;
  });
  saveFavorites(updatedFavorites);
  renderFavorites();
}

// --- RENDERING FUNCTIONS ---
function renderFavorites(itemsToRender = null) {
  const username = getCurrentUsername();
  if (!username) {
    favoritesListContainer.innerHTML = '<p class="no-favorites-message text-center text-gray-500 py-12">Please log in to view and manage your favorites.</p>';
    return;
  }

  const favorites = itemsToRender === null ? getFavorites() : itemsToRender;
  const validFavorites = favorites.filter(item => item && item.name);
  favoritesListContainer.innerHTML = '';

  if (validFavorites.length === 0) {
    favoritesListContainer.innerHTML = '<p class="no-favorites-message text-center text-gray-500 py-12">You haven\'t added any favorites yet. Start exploring!</p>';
    return;
  }

  validFavorites.forEach(item => {
    let itemType = "Unknown";
    let typeIcon = "";
    const itemId = item.id || generateId(item.name);
    // Handle multiple image fields (img for Guides, image/strMealThumb for Recipes/Review)
    const imageSrc = item.img || item.image || item.strMealThumb || 'default-image.jpg';

    if (item.cuisine) {
      itemType = "Recipe";
      typeIcon = `<div class="type-icon type-recipe flex items-center gap-1 text-orange-500" title="Recipe">
                  <i class="fas fa-utensils"></i>
                </div>`;
    } else if (item.type === 'Guides') {
      itemType = "Guides"; // Changed to plural for consistency
      typeIcon = `<div class="type-icon type-guide flex items-center gap-1 text-blue-500" title="Guide">
                  <i class="fas fa-book-open"></i>
                </div>`;
    } else if (item.location) {
      itemType = "Food Review"; // 更新为 "Food Review" 以匹配分类
      typeIcon = `<div class="type-icon type-review flex items-center gap-1 text-green-500" title="Food Review">
                  <i class="fas fa-map-marker-alt"></i>
                </div>`;
    }

    const favoriteCard = document.createElement('div');
    favoriteCard.className = 'favorite-card bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300';
    favoriteCard.setAttribute('data-id', itemId);
    favoriteCard.setAttribute('data-type', itemType);
    favoriteCard.innerHTML = `
      <div class="card-image-container h-40 overflow-hidden rounded-t-lg">
        <img src="${imageSrc}" alt="${item.name}" class="card-image w-full h-full object-cover">
      </div>
      <div class="card-content p-4">
        <h3 class="card-title text-lg font-semibold text-gray-900 mb-2">${item.name}</h3>
        <p class="card-description text-sm text-gray-600 mb-3">${item.description || 'No description available.'}</p>
        <div class="card-actions flex items-center gap-3 text-gray-500">
          <button class="action-btn like-btn flex items-center gap-1 hover:text-red-500" title="Favorited">
            <i class="fas fa-heart"></i>
          </button>
          <button class="action-btn share-btn flex items-center gap-1 hover:text-blue-500" title="Share">
            <i class="fas fa-share-alt"></i>
          </button>
          ${typeIcon}
        </div>
      </div>
      <button class="remove-btn absolute top-3 right-3 text-gray-400 hover:text-red-600" title="Remove Favorite" onclick="removeFavorite('${itemId}', '${itemType}')">
        <i class="fas fa-times-circle text-xl"></i>
      </button>
    `;
    favoriteCard.addEventListener('click', (e) => {
      if (e.target.closest('.action-btn') || e.target.closest('.remove-btn')) {
        return;
      }
      console.log(`Navigating to detail for item: ${item.name} (id: ${itemId}, type: ${itemType})`);
      if (item.cuisine) {
        window.location.href = `recipe_detail.html?id=${itemId}`;
      } else if (itemType === "Food Review") { // 更新导航逻辑为 "Food Review"
        window.location.href = `FoodReview.html?id=${itemId}`;
      } else if (itemType === "Guides") {
        window.location.href = `foodGuides&Searching.html?food=${encodeURIComponent(item.name)}`;
      } else {
        window.location.href = `recipe_detail.html?id=${itemId}`;
      }
    });
    favoritesListContainer.appendChild(favoriteCard);
  });
  console.log(`Rendered ${validFavorites.length} favorite cards`);
}

// --- EVENT LISTENERS ---
function handleSort() {
  const selectedCategory = sortDropdown.value;

  if (selectedCategory === 'All') {
    renderFavorites(getFavorites());
  } else {
    const filteredFavorites = getFavorites().filter(item => {
      if (selectedCategory === 'Recipes') {
        return item.cuisine;
      } else if (selectedCategory === 'Guides') {
        return item.type === 'Guides';
      } else if (selectedCategory === 'Food Review') { // 更新过滤为 "Food Review"，匹配 HTML 分类
        return item.location;
      }
      return false;
    });
    renderFavorites(filteredFavorites);
  }
}

sortDropdown.addEventListener('change', handleSort);

// Listen for changes in localStorage from other tabs
window.addEventListener('storage', (event) => {
  if (event.key.startsWith('favorites_')) {
    console.log('Favorites updated in another tab. Reloading list.');
    renderFavorites();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  renderFavorites();
  console.log('Favorites page loaded');
});