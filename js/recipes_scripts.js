// recipes_scripts.js - Update toggleFavorite to require login
const cuisineFilter = document.getElementById('cuisine');
const typeFilter = document.getElementById('type');
const timeFilter = document.getElementById('cooking_time');
const sortByFilter = document.getElementById('sort_by');
const recipeGrid = document.getElementById('recipe-grid');

// Helper to get current username
function getCurrentUsername() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  return currentUser ? currentUser.username : null;
}

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

function toggleFavorite(recipeId) {
  const username = getCurrentUsername();
  if (!username) {
    alert("Please log in to add favorites!");
    window.location.href = "Login.html"; // Redirect to login
    return;
  }

  let favorites = getFavorites();
  const favoriteIndex = favorites.findIndex(item => item.id === recipeId);

  if (favoriteIndex > -1) {
    favorites.splice(favoriteIndex, 1);
  } else {
    const recipeToAdd = recipes.find(recipe => recipe.id === recipeId);
    if (recipeToAdd) {
      favorites.push(recipeToAdd);
    }
  }

  saveFavorites(favorites);
  updateFavoriteButtons();
}

function updateFavoriteButtons() {
  const favorites = getFavorites();

  document.querySelectorAll('.favorite-btn').forEach(button => {
    const recipeId = button.getAttribute('data-id');
    const isFavorited = favorites.some(item => item.id === recipeId);

    if (isFavorited) {
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
        </svg>
      `;
      button.style.color = '#ef4444'; // text-red-500 equivalent
    } else {
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      `;
      button.style.color = '#a0aec0'; // text-gray-500 equivalent
    }
  });
}

function renderRecipes(filteredRecipes) {
  recipeGrid.innerHTML = '';
  filteredRecipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.className = 'recipe-card';
    recipeCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <div class="details">
        <h3>${recipe.name}</h3>
        <span class="tag">${recipe.cuisine}</span>
        <span class="tag">${recipe.type}</span>
        <span class="tag">${recipe.time}</span>
        <span>🔥 ${recipe.popularity}</span>
        <span>${'★'.repeat(recipe.rating)}${'☆'.repeat(5 - recipe.rating)}</span>
      </div>
      <a href="${recipe.url}">View Full Recipe</a>
      <button class="favorite-btn" data-id="${recipe.id}" onclick="toggleFavorite('${recipe.id}')">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
    `;
    recipeGrid.appendChild(recipeCard);
  });

  updateFavoriteButtons();
}

function applyFiltersAndSort() {
  const selectedCuisine = cuisineFilter.value;
  const selectedType = typeFilter.value;
  const selectedTime = timeFilter.value;
  const sortBy = sortByFilter.value;

  let filteredRecipes = recipes.filter(recipe => {
    const matchesCuisine = selectedCuisine === 'All' || recipe.cuisine === selectedCuisine;
    const matchesType = selectedType === 'All' || recipe.type === selectedType;
    const matchesTime = selectedTime === 'Any' || recipe.time === selectedTime;
    return matchesCuisine && matchesType && matchesTime;
  });

  if (sortBy === 'popularity') {
    filteredRecipes.sort((a, b) => b.popularity - a.popularity);
  } else if (sortBy === 'rating') {
    filteredRecipes.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'level') {
    const levelOrder = { "Easy": 1, "Medium": 2, "Hard": 3 };
    filteredRecipes.sort((a, b) => levelOrder[a.level] - levelOrder[b.level]);
  }

  renderRecipes(filteredRecipes);
}

document.getElementById('applyFilters').addEventListener('click', applyFiltersAndSort);

window.addEventListener('storage', (event) => {
  if (event.key.startsWith('favorites_')) {
    console.log('Favorites updated in another tab. Reloading buttons.');
    updateFavoriteButtons();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  applyFiltersAndSort();
});