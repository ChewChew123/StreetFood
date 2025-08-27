// favorites.js - Updated to handle images from Guides, Review, and Recipes (NO TAILWIND)
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

// --- SHARE FUNCTIONALITY ---
function shareItem(item, event) {
  event.stopPropagation();
  
  const itemId = item.id || generateId(item.name);
  let shareUrl = window.location.origin;
  let shareText = '';
  
  // Determine the correct URL and share text based on item type
  if (item.cuisine) {
    shareUrl += `/recipe_detail.html?id=${itemId}`;
    shareText = `Check out this delicious ${item.name} recipe!`;
  } else if (item.type === 'Guides') {
    shareUrl += `/foodGuides&Searching.html?food=${encodeURIComponent(item.name)}`;
    shareText = `Check out this food guide: ${item.name}`;
  } else if (item.location) {
    shareUrl += `/FoodReview.html?id=${itemId}`;
    shareText = `Check out this food review: ${item.name} at ${item.location}`;
  } else {
    shareText = `Check out: ${item.name}`;
  }

  // Try Web Share API first (modern browsers, especially mobile)
  if (navigator.share) {
    navigator.share({
      title: item.name,
      text: shareText,
      url: shareUrl,
    }).then(() => {
      console.log('Content shared successfully');
      showShareSuccess();
    }).catch((error) => {
      console.log('Error sharing:', error);
      // Fallback to custom share modal
      showShareModal(item, shareUrl, shareText);
    });
  } else {
    // Fallback for browsers without Web Share API
    showShareModal(item, shareUrl, shareText);
  }
}

function showShareSuccess() {
  // Create a temporary success message
  const successMsg = document.createElement('div');
  successMsg.className = 'share-success-toast';
  successMsg.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #10B981, #059669);
    color: white;
    padding: 12px 16px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 9999;
    font-size: 14px;
    animation: slideInRight 0.3s ease-out;
  `;
  successMsg.textContent = 'Shared successfully!';
  document.body.appendChild(successMsg);
  
  setTimeout(() => {
    if (successMsg.parentNode) {
      successMsg.remove();
    }
  }, 3000);
}

function showShareModal(item, shareUrl, shareText) {
  // Remove existing modal if any
  const existingModal = document.getElementById('share-modal');
  if (existingModal) {
    existingModal.remove();
  }

  // Create share modal
  const modal = document.createElement('div');
  modal.id = 'share-modal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  `;
  
  modal.innerHTML = `
    <div style="
      background: white;
      border-radius: 12px;
      padding: 24px;
      max-width: 450px;
      width: 90%;
      margin: 0 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    ">
      <div style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      ">
        <h3 style="
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin: 0;
        ">Share "${item.name}"</h3>
        <button onclick="closeShareModal()" style="
          background: none;
          border: none;
          font-size: 20px;
          color: #666;
          cursor: pointer;
          padding: 4px;
        ">
          <i class="fas fa-times"></i>
        </button>
      </div>
      
      <div style="margin-bottom: 20px;">
        <label style="
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          margin-bottom: 8px;
        ">Share URL:</label>
        <div style="display: flex;">
          <input type="text" id="share-url-input" value="${shareUrl}" readonly style="
            flex: 1;
            padding: 8px 12px;
            border: 1px solid #D1D5DB;
            border-radius: 6px 0 0 6px;
            font-size: 14px;
            background: #F9FAFB;
          ">
          <button onclick="copyToClipboard()" style="
            padding: 8px 16px;
            background: #3B82F6;
            color: white;
            border: none;
            border-radius: 0 6px 6px 0;
            font-size: 14px;
            cursor: pointer;
            transition: background-color 0.2s;
          " onmouseover="this.style.background='#2563EB'" onmouseout="this.style.background='#3B82F6'">
            Copy
          </button>
        </div>
      </div>
      
      <div>
        <p style="
          font-size: 14px;
          color: #6B7280;
          margin-bottom: 12px;
        ">Share via:</p>
        <div style="
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        ">
          <button onclick="shareViaInstagram('${encodeURIComponent(shareText)}', '${encodeURIComponent(shareUrl)}')" style="
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 12px 16px;
            background: linear-gradient(135deg, #8B5CF6, #EC4899);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            cursor: pointer;
            transform: scale(1);
            transition: transform 0.2s;
          " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <i class="fas fa-camera"></i>
            Instagram
          </button>
          <button onclick="shareViaWhatsApp('${encodeURIComponent(shareText + ' ' + shareUrl)}')" style="
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 12px 16px;
            background: linear-gradient(135deg, #10B981, #059669);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            cursor: pointer;
            transform: scale(1);
            transition: transform 0.2s;
          " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <i class="fas fa-comments"></i>
            WhatsApp
          </button>
          <button onclick="shareViaTwitter('${encodeURIComponent(shareText)}', '${encodeURIComponent(shareUrl)}')" style="
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 12px 16px;
            background: linear-gradient(135deg, #60A5FA, #3B82F6);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            cursor: pointer;
            transform: scale(1);
            transition: transform 0.2s;
          " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <i class="fas fa-bird"></i>
            Twitter
          </button>
          <button onclick="shareViaFacebook('${encodeURIComponent(shareUrl)}')" style="
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 12px 16px;
            background: linear-gradient(135deg, #2563EB, #1D4ED8);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            cursor: pointer;
            transform: scale(1);
            transition: transform 0.2s;
          " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <i class="fas fa-thumbs-up"></i>
            Facebook
          </button>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeShareModal();
    }
  });
}

function closeShareModal() {
  const modal = document.getElementById('share-modal');
  if (modal) {
    modal.remove();
  }
}

function copyToClipboard() {
  const input = document.getElementById('share-url-input');
  input.select();
  input.setSelectionRange(0, 99999); // For mobile devices
  
  navigator.clipboard.writeText(input.value).then(() => {
    // Show success message
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    button.style.backgroundColor = '#10B981';
    
    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = '#3B82F6';
    }, 2000);
  }).catch(() => {
    // Fallback for older browsers
    document.execCommand('copy');
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    
    setTimeout(() => {
      button.textContent = originalText;
    }, 2000);
  });
}

function shareViaInstagram(text, url) {
  // Create a temporary text area for copying
  const content = decodeURIComponent(text) + '\n\n' + decodeURIComponent(url);
  
  // Create temporary textarea for copying
  const tempTextarea = document.createElement('textarea');
  tempTextarea.value = content;
  tempTextarea.style.position = 'fixed';
  tempTextarea.style.left = '-9999px';
  tempTextarea.style.top = '-9999px';
  document.body.appendChild(tempTextarea);
  
  // Select and copy
  tempTextarea.select();
  tempTextarea.setSelectionRange(0, 99999); // For mobile
  
  try {
    // Try modern clipboard API first
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(content).then(() => {
        showInstagramSuccess();
      }).catch(() => {
        // Fallback to execCommand
        document.execCommand('copy');
        showInstagramSuccess();
      });
    } else {
      // Use execCommand for older browsers
      document.execCommand('copy');
      showInstagramSuccess();
    }
  } catch (err) {
    console.log('Copy failed:', err);
    // Show manual copy instructions
    showInstagramManualCopy(content);
  }
  
  // Remove temporary textarea
  document.body.removeChild(tempTextarea);
}

function showInstagramSuccess() {
  // Show success message
  const successMsg = document.createElement('div');
  successMsg.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #8B5CF6, #EC4899);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 9999;
    font-size: 14px;
    animation: slideInRight 0.3s ease-out;
  `;
  successMsg.innerHTML = `
    <div style="display: flex; align-items: center; gap: 8px;">
      <i class="fas fa-check-circle"></i>
      <span>📋 Copied! Opening Instagram...</span>
    </div>
  `;
  document.body.appendChild(successMsg);
  
  // Open Instagram after a short delay
  setTimeout(() => {
    window.open('https://www.instagram.com/', '_blank');
  }, 1500);
  
  // Remove success message
  setTimeout(() => {
    if (successMsg.parentNode) {
      successMsg.remove();
    }
  }, 4000);
}

function showInstagramManualCopy(content) {
  // Show manual copy modal
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  `;
  modal.innerHTML = `
    <div style="
      background: white;
      border-radius: 12px;
      padding: 24px;
      max-width: 450px;
      width: 90%;
      margin: 0 16px;
    ">
      <div style="
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 16px;
      ">
        <i class="fas fa-camera" style="color: #8B5CF6; font-size: 20px;"></i>
        <h3 style="font-size: 18px; font-weight: 600; margin: 0;">Share to Instagram</h3>
      </div>
      <p style="font-size: 14px; color: #6B7280; margin-bottom: 16px;">Copy the text below and share it on Instagram:</p>
      <textarea readonly onclick="this.select()" style="
        width: 100%;
        padding: 12px;
        border: 1px solid #D1D5DB;
        border-radius: 6px;
        font-size: 14px;
        height: 96px;
        margin-bottom: 16px;
        resize: none;
        font-family: inherit;
      ">${content}</textarea>
      <div style="display: flex; gap: 12px;">
        <button onclick="this.parentElement.parentElement.parentElement.remove(); window.open('https://www.instagram.com/', '_blank')" style="
          flex: 1;
          padding: 10px 16px;
          background: linear-gradient(135deg, #8B5CF6, #EC4899);
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
        ">
          Open Instagram
        </button>
        <button onclick="this.parentElement.parentElement.parentElement.remove()" style="
          padding: 10px 16px;
          background: #E5E7EB;
          color: #374151;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
        ">
          Close
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function shareViaWhatsApp(text) {
  window.open(`https://wa.me/?text=${text}`, '_blank');
}

function shareViaTwitter(text, url) {
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

function shareViaFacebook(url) {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
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
    favoritesListContainer.innerHTML = '<p class="no-favorites-message" style="text-align: center; color: #6B7280; padding: 48px 0;">Please log in to view and manage your favorites.</p>';
    return;
  }

  const favorites = itemsToRender === null ? getFavorites() : itemsToRender;
  const validFavorites = favorites.filter(item => item && item.name);
  favoritesListContainer.innerHTML = '';

  if (validFavorites.length === 0) {
    favoritesListContainer.innerHTML = '<p class="no-favorites-message" style="text-align: center; color: #6B7280; padding: 48px 0;">You haven\'t added any favorites yet. Start exploring!</p>';
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
      typeIcon = `<div class="type-icon type-recipe" style="display: flex; align-items: center; gap: 4px; color: #EA580C;" title="Recipe">
                  <i class="fas fa-utensils"></i>
                </div>`;
    } else if (item.type === 'Guides') {
      itemType = "Guides";
      typeIcon = `<div class="type-icon type-guide" style="display: flex; align-items: center; gap: 4px; color: #2563EB;" title="Guide">
                  <span style="font-size: 14px;">🧭</span>
                </div>`;
    } else if (item.location) {
      itemType = "Food Review"; 
      typeIcon = `<div class="type-icon type-review" style="display: flex; align-items: center; gap: 4px; color: #DC2626;" title="Food Review">
                  <span style="font-size: 14px;">🔥</span>
                </div>`;
    }

    const favoriteCard = document.createElement('div');
    favoriteCard.className = 'favorite-card';
    favoriteCard.style.cssText = `
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      cursor: pointer;
    `;
    favoriteCard.setAttribute('data-id', itemId);
    favoriteCard.setAttribute('data-type', itemType);
    
    favoriteCard.innerHTML = `
      <div class="card-image-container" style="height: 160px; overflow: hidden;">
        <img src="${imageSrc}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div class="card-content" style="padding: 16px;">
        <h3 style="font-size: 18px; font-weight: 600; color: #111827; margin: 0 0 8px 0;">${item.name}</h3>
        <p style="font-size: 14px; color: #6B7280; margin: 0 0 12px 0; line-height: 1.4;">${item.description || 'No description available.'}</p>
        <div class="card-actions" style="display: flex; align-items: center; gap: 12px; color: #6B7280;">
          <button class="action-btn like-btn" style="
            display: flex;
            align-items: center;
            gap: 4px;
            background: none;
            border: none;
            cursor: pointer;
            color: #6B7280;
            transition: color 0.2s;
          " title="Favorited" onmouseover="this.style.color='#DC2626'" onmouseout="this.style.color='#6B7280'">
            <i class="fas fa-heart"></i>
          </button>
          <button class="action-btn share-btn" style="
            display: flex;
            align-items: center;
            gap: 4px;
            background: none;
            border: none;
            cursor: pointer;
            color: #6B7280;
            transition: color 0.2s;
          " title="Share" onmouseover="this.style.color='#2563EB'" onmouseout="this.style.color='#6B7280'">
            <i class="fas fa-share-alt"></i>
          </button>
          ${typeIcon}
        </div>
      </div>
      <button class="remove-btn" onclick="removeFavorite('${itemId}', '${itemType}')" style="
        position: absolute;
        top: 12px;
        right: 12px;
        background: rgba(255,255,255,0.9);
        border: none;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #6B7280;
        transition: all 0.2s;
        backdrop-filter: blur(4px);
      " title="Remove Favorite" onmouseover="this.style.color='#DC2626'; this.style.background='rgba(255,255,255,1)'" onmouseout="this.style.color='#6B7280'; this.style.background='rgba(255,255,255,0.9)'">
        <i class="fas fa-times"></i>
      </button>
    `;

    // Add hover effect to card
    favoriteCard.addEventListener('mouseenter', () => {
      favoriteCard.style.transform = 'translateY(-4px)';
      favoriteCard.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
    });
    
    favoriteCard.addEventListener('mouseleave', () => {
      favoriteCard.style.transform = 'translateY(0)';
      favoriteCard.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    });

    // Add share button event listener
    const shareBtn = favoriteCard.querySelector('.share-btn');
    if (shareBtn) {
      shareBtn.addEventListener('click', (e) => {
        console.log('Share button clicked!', item.name);
        shareItem(item, e);
      });
    } else {
      console.error('Share button not found for item:', item.name);
    }

    favoriteCard.addEventListener('click', (e) => {
      if (e.target.closest('.action-btn') || e.target.closest('.remove-btn')) {
        return;
      }
      console.log(`Navigating to detail for item: ${item.name} (id: ${itemId}, type: ${itemType})`);
      if (item.cuisine) {
        window.location.href = `recipe_detail.html?id=${itemId}`;
      } else if (itemType === "Food Review") {
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
      } else if (selectedCategory === 'Food Review') {
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
  
  // Test if share functions are available
  if (typeof shareItem === 'function') {
    console.log('✅ Share functions loaded successfully');
  } else {
    console.error('❌ Share functions not loaded');
  }
});

// Close share modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeShareModal();
  }
});

// Add CSS animation styles
if (!document.getElementById('share-animations')) {
  const style = document.createElement('style');
  style.id = 'share-animations';
  style.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    .share-success-toast {
      animation: slideInRight 0.3s ease-out;
    }
  `;
  document.head.appendChild(style);
}