// 50 local Malaysian street foods
let localFoods = [
  { name: "Nasi Lemak", category: "Rice", area: "Kuala Lumpur", img: "image/istockphoto-1488263235-612x612.jpg", rating: 5, description: "Nasi Lemak is Malaysia's national dish, featuring fragrant rice cooked in coconut milk and pandan leaves, served with sambal, fried anchovies, peanuts, cucumber, and a boiled egg." },
  { name: "Char Kway Teow", category: "Noodles", area: "Penang", img: "image/istockphoto-1035944650-612x612.jpg", rating: 4, description: "Char Kway Teow is a stir-fried flat rice noodle dish with prawns, cockles, Chinese sausage, eggs, and bean sprouts, known for its smoky 'wok hei' flavor, iconic in Penang." },
  { name: "Roti Canai", category: "Bread", area: "Kuala Lumpur", img: "image/istockphoto-1296798691-612x612.jpg", rating: 4, description: "Roti Canai is a flaky, crispy flatbread made by stretching and folding dough, grilled and served with dhal or curry, a staple influenced by Indian cuisine." },
  { name: "Cendol", category: "Dessert", area: "Melaka", img: "image/istockphoto-1283335828-612x612.jpg", rating: 4, description: "Cendol is a refreshing dessert with green rice flour jelly noodles in sweetened coconut milk, topped with shaved ice and palm sugar syrup." },
  { name: "Hokkien Mee", category: "Noodles", area: "Kuala Lumpur", img: "image/istockphoto-1277076119-612x612.jpg", rating: 5, description: "Hokkien Mee features thick yellow noodles stir-fried in dark soy sauce with prawns, squid, pork, and lard crisps for a rich, savory taste." },
  { name: "Satay", category: "Snack", area: "Selangor", img: "image/istockphoto-527547742-612x612.jpg", rating: 5, description: "Satay consists of skewered, marinated meat (chicken, beef, or mutton) grilled and served with peanut sauce, rice cakes, cucumber, and onions." },
  { name: "Rojak", category: "Snack", area: "Penang", img: "image/istockphoto-1154410694-612x612.jpg", rating: 3, description: "Rojak is a fruit and vegetable salad tossed in a sweet, spicy shrimp paste sauce, topped with crushed peanuts for added crunch." },
  { name: "Bak Kut Teh", category: "Soup", area: "Kuala Lumpur", img: "image/istockphoto-1304718341-612x612.jpg", rating: 4, description: "Bak Kut Teh is a herbal pork rib soup simmered with garlic, spices, and medicinal herbs, typically served with rice and youtiao." },
  { name: "Nasi Kandar", category: "Rice", area: "Penang", img: "image/istockphoto-2219608764-612x612.jpg", rating: 5, description: "Nasi Kandar is steamed rice with a variety of curries (fish, chicken, squid) and side dishes, originally sold by vendors carrying poles." },
  { name: "Apam Balik", category: "Dessert", area: "Perak", img: "image/istockphoto-1984299900-612x612.jpg", rating: 3, description: "Apam Balik is a thick, fluffy pancake filled with peanuts, sugar, and sometimes corn, folded and crisped on a griddle." },
  { name: "Kuih Lapis", category: "Dessert", area: "Melaka", img: "image/istockphoto-1313082219-612x612.jpg", rating: 4, description: "Kuih Lapis is a colorful layered steamed cake made from rice flour, coconut milk, and pandan, with vibrant alternating layers." },
  { name: "Laksa Penang", category: "Noodles", area: "Penang", img: "image/istockphoto-1310708373-612x612.jpg", rating: 5, description: "Penang Laksa is a tangy, spicy noodle soup with mackerel fish broth, tamarind, lemongrass, and toppings like mint, pineapple, and ginger flower." },
  { name: "Teh Tarik", category: "Drink", area: "Kuala Lumpur", img: "image/istockphoto-1441160692-612x612.jpg", rating: 4, description: "Teh Tarik is frothy pulled tea made from black tea, condensed milk, and sugar, 'pulled' between pitchers for aeration." },
  { name: "Bandung", category: "Drink", area: "Selangor", img: "image/istockphoto-2221161531-612x612.jpg", rating: 3, description: "Bandung is a refreshing pink drink made from rose syrup, evaporated milk, and basil seeds, often served chilled." },
  { name: "Pulut Panggang", category: "Snack", area: "Johor", img: "image/istockphoto-1470005512-612x612.jpg", rating: 4, description: "Pulut Panggang is glutinous rice stuffed with spicy dried shrimp, wrapped in banana leaves, and grilled for a smoky flavor." },
  { name: "Keropok Lekor", category: "Snack", area: "Terengganu", img: "image/istockphoto-896625906-612x612.jpg", rating: 4, description: "Keropok Lekor is a chewy fish sausage made from sago flour and fish paste, deep-fried and served with chili sauce." },
  { name: "Tau Fu Fa", category: "Dessert", area: "Johor", img: "image/istockphoto-2165980003-612x612.jpg", rating: 3, description: "Tau Fu Fa is a silky smooth soybean curd pudding served with sweet ginger syrup or palm sugar." },
  { name: "Hainanese Chicken Rice", category: "Rice", area: "Kuala Lumpur", img: "image/istockphoto-1302272289-612x612.jpg", rating: 5, description: "Hainanese Chicken Rice features poached chicken with rice cooked in chicken stock, served with chili sauce and ginger paste." },
  { name: "Ayam Percik", category: "Rice", area: "Kelantan", img: "image/istockphoto-2219604694-612x612.jpg", rating: 4, description: "Ayam Percik is grilled chicken marinated in a creamy, spicy coconut milk sauce, popular in Kelantan and often served with rice." },
  { name: "Roti Jala", category: "Snack", area: "Kelantan", img: "image/istockphoto-1214781336-612x612.jpg", rating: 3, description: "Roti Jala is a lacy, net-like pancake made from a batter of flour, eggs, and coconut milk, served with curry." },
  { name: "Mee Rebus", category: "Noodles", area: "Johor", img: "image/istockphoto-480739881-612x612.jpg", rating: 4, description: "Mee Rebus is a noodle dish with a thick, spicy sweet potato-based gravy, topped with egg, tofu, and green onions." },
  { name: "Mee Soto", category: "Noodles", area: "Johor", img: "image/istockphoto-1166957908-612x612.jpg", rating: 4, description: "Mee Soto is a spicy chicken noodle soup with a fragrant broth, served with shredded chicken, bean sprouts, and herbs." },
  { name: "Lontong", category: "Rice", area: "Selangor", img: "image/istockphoto-2148696403-612x612.jpg", rating: 3, description: "Lontong is compressed rice cakes served in a coconut-based vegetable stew with sambal and serunding (spiced coconut flakes)." },
  { name: "Nasi Dagang", category: "Rice", area: "Terengganu", img: "image/istockphoto-1201106611-612x612.jpg", rating: 5, description: "Nasi Dagang is glutinous rice steamed with coconut milk, served with fish curry and pickled vegetables, a Terengganu specialty." },
  { name: "Nasi Kerabu", category: "Rice", area: "Kelantan", img: "image/istockphoto-1312743970-612x612.jpg", rating: 4, description: "Nasi Kerabu is blue-tinted rice (from butterfly pea flowers) served with herbs, salted egg, fish crackers, and spicy sambal." },
  { name: "Nasi Kuning", category: "Rice", area: "Johor", img: "image/istockphoto-2224904191-612x612.jpg", rating: 3, description: "Nasi Kuning is turmeric-flavored rice served with side dishes like rendang or fried chicken, often for special occasions." },
  { name: "Popiah", category: "Snack", area: "Penang", img: "image/istockphoto-860900100-612x612.jpg", rating: 4, description: "Popiah is a fresh spring roll filled with shredded jicama, carrots, bean sprouts, and sometimes shrimp, wrapped in a thin crepe." },
  { name: "Kuih Ketayap", category: "Dessert", area: "Melaka", img: "image/istockphoto-2194638431-612x612.jpg", rating: 3, description: "Kuih Ketayap is a pandan-flavored crepe rolled with a sweet coconut filling, also known as kuih dadar." },
  { name: "Pisang Goreng", category: "Snack", area: "Kuala Lumpur", img: "image/istockphoto-628659258-612x612.jpg", rating: 4, description: "Pisang Goreng is deep-fried banana fritters coated in a crispy batter, a popular street snack." },
  { name: "Rendang", category: "Rice", area: "Johor", img: "image/istockphoto-2161659672-612x612.jpg", rating: 5, description: "Rendang is a rich, slow-cooked beef dish in a spicy coconut milk sauce with lemongrass and spices, often served with rice." },
  { name: "Sambal Udang", category: "Rice", area: "Penang", img: "image/istockphoto-2190651052-612x612.jpg", rating: 4, description: "Sambal Udang is prawns cooked in a fiery chili paste with tamarind and spices, typically paired with rice." },
  { name: "Mee Kari", category: "Noodles", area: "Penang", img: "image/istockphoto-2209579682-612x612.jpg", rating: 4, description: "Mee Kari is a creamy, spicy noodle dish in a coconut milk curry broth with chicken, tofu, and bean sprouts." },
  { name: "Teh Halia", category: "Drink", area: "Selangor", img: "image/istockphoto-185880323-612x612.jpg", rating: 3, description: "Teh Halia is ginger tea with milk and sugar, offering a warm, spicy kick, popular in mamak stalls." },
  { name: "ABC (Ais Batu Campur)", category: "Dessert", area: "Melaka", img: "image/istockphoto-2206115764-612x612.jpg", rating: 4, description: "ABC is a shaved ice dessert with red beans, corn, jelly, and palm sugar, drizzled with condensed milk." },
  { name: "Kueh Tutu", category: "Dessert", area: "Johor", img: "image/istockphoto-584215334-612x612.jpg", rating: 3, description: "Kueh Tutu is a steamed rice flour cake filled with sweet coconut or peanut, served in a pandan leaf mold." },
  { name: "Otah", category: "Snack", area: "Penang", img: "image/istockphoto-1247859466-612x612.jpg", rating: 4, description: "Otah is a spicy fish paste wrapped in banana leaves and grilled, offering a smoky, aromatic flavor." },
  { name: "Curry Puff", category: "Snack", area: "Penang", img: "image/istockphoto-2160551649-612x612.jpg", rating: 4, description: "Curry Puff is a flaky pastry filled with spiced potatoes, chicken, or sardines, deep-fried to golden perfection." },
  { name: "Soto Ayam", category: "Soup", area: "Johor", img: "image/istockphoto-1505693807-612x612.jpg", rating: 4, description: "Soto Ayam is a fragrant chicken soup with rice noodles, turmeric, and herbs, served with shredded chicken." },
  { name: "Sup Tulang", category: "Soup", area: "Penang", img: "image/istockphoto-2154732545-612x612.jpg", rating: 5, description: "Sup Tulang is a rich bone marrow soup with beef or mutton bones in a spicy, flavorful broth." },
  { name: "Teh O Limau", category: "Drink", area: "Kuala Lumpur", img: "image/istockphoto-685492198-612x612.jpg", rating: 4, description: "Teh O Limau is iced black tea with a splash of lime juice, refreshing and tangy." },
  { name: "Milo Ais", category: "Drink", area: "Selangor", img: "image/istockphoto-1571060229-612x612.jpg", rating: 3, description: "Milo Ais is a chilled chocolate malt drink, a nostalgic favorite served over ice." },
  { name: "Laksa Johor", category: "Noodles", area: "Johor", img: "image/istockphoto-2191416048-612x612.jpg", rating: 5, description: "Laksa Johor is a rich, coconut-based noodle dish with spaghetti-like noodles and fish curry gravy." },
  { name: "Roti Bom", category: "Snack", area: "Melaka", img: "image/istockphoto-854361942-612x612.jpg", rating: 4, description: "Roti Bom is a thick, sweet flatbread enriched with condensed milk and sugar, griddled until crispy." },
  { name: "Kuih Lompang", category: "Dessert", area: "Kelantan", img: "image/istockphoto-2153956473-612x612.jpg", rating: 3, description: "Kuih Lompang is a steamed rice flour cup-shaped dessert with a coconut topping, soft and slightly chewy." },
  { name: "Ayam Goreng Berempah", category: "Rice", area: "Kuala Lumpur", img: "image/istockphoto-1142551973-612x612.jpg", rating: 5, description: "Ayam Goreng Berempah is crispy fried chicken marinated with a blend of aromatic spices, served with rice." },
  { name: "Putu Piring", category: "Dessert", area: "Penang", img: "image/istockphoto-1491244721-612x612.jpg", rating: 4, description: "Putu Piring is a steamed rice flour cake filled with melted palm sugar, served with grated coconut." },
  { name: "Kuih Seri Muka", category: "Dessert", area: "Melaka", img: "image/istockphoto-887064276-612x612.jpg", rating: 4, description: "Kuih Seri Muka is a two-layered dessert with glutinous rice at the bottom and a pandan custard topping." }
];

let isLoading = false;
let currentFoods = []; // 用于存储当前显示的食物列表，便于点击时访问

function showLoading() {
  $("#foods").html(`
    <div class="loading">
      <div class="spinner"></div>
      <p>Searching for delicious food...</p>
    </div>
  `);
}

function generateStars(rating) {
  let stars = '';
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  for (let i = 1; i <= 5; i++) {
    let className = 'star';
    if (i <= fullStars) {
      className += ' filled';
    } else if (i === fullStars + 1 && hasHalf) {
      className += ' half';
    }
    stars += `<span class="${className}">★</span>`;
  }
  return stars;
}

// display main page
function showMainView() {
  $('#foods').show();
  $('.filters').show();
  $('header').show();
  $('#detail-view').hide().removeClass('active');
  //to initial
  window.history.pushState({}, '', 'foodGuides&Searching.html');
  renderFoods();
}

// show detail 
function showDetail(food) {
  $('#detail-img').attr('src', food.img).attr('alt', food.name);
  $('#detail-name').text(food.name);
  $('#detail-description').text(food.description || 'No detailed description available for this food.');
  $('#detail-area').text(food.area || 'Unknown');
  $('#detail-type').text(food.category || 'Unknown');
  $('#detail-stars').html(generateStars(food.rating));
  $('#detail-rating-text').text(`(${food.rating}/5)`);

  //  check favourite or not
  const favorites = getFavorites();
  const isFavorited = favorites.some(fav => fav.name === food.name && fav.type === 'Guides');
  $('#favorite-btn').toggleClass('favorited', isFavorited);
  $('#favorite-btn .heart-icon').text(isFavorited ? '♥' : '♡');

  //hide main page ， show detail
  $('#foods').hide();
  $('.filters').hide();
  $('header').hide();
  $('#detail-view').show().addClass('active');

  // save food to favourite
  $('#favorite-btn').data('current-food', food);
}

// obtain username（same with foodReview.js and favorites.js ）
function getCurrentUsername() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  return currentUser ? currentUser.username : null;
}

// getFavorites
function getFavorites() {
  const username = getCurrentUsername();
  if (!username) {
    return []; // No favorites for guest
  }
  const favoritesKey = `favorites_${username}`;
  return JSON.parse(localStorage.getItem(favoritesKey)) || [];
}

// saveFavorites
function saveFavorites(favorites) {
  const username = getCurrentUsername();
  if (!username) {
    return; // Cannot save for guest
  }
  const favoritesKey = `favorites_${username}`;
  localStorage.setItem(favoritesKey, JSON.stringify(favorites));
  
  window.dispatchEvent(new Event('storage'));
}

// toggleFavorite
function toggleFavorite() {
  const username = getCurrentUsername();
  const food = $('#favorite-btn').data('current-food');
  if (!food) return;

  if (!username) {
    // returnUrl
    const foodName = $('#detail-name').text();
    const returnUrl = encodeURIComponent(`foodGuides&Searching.html?food=${foodName}`);
    window.location.href = `Login.html?returnUrl=${returnUrl}`;
    return;
  }

  // if logged，directly save favourite
  let favorites = getFavorites();
  const isFavorited = favorites.some(fav => fav.name === food.name && fav.type === 'Guides');

  if (isFavorited) {
    favorites = favorites.filter(fav => !(fav.name === food.name && fav.type === 'Guides'));
    $('#favorite-btn').removeClass('favorited');
    $('#favorite-btn .heart-icon').text('♡');
  } else {
    favorites.push({
      id: 'guide_' + btoa(food.name).replace(/=/g, ''), // Generate unique ID
      name: food.name,
      img: food.img,
      type: 'Guides',
      area: food.area,
      category: food.category,
      rating: food.rating,
      description: food.description
    });
    $('#favorite-btn').addClass('favorited');
    $('#favorite-btn .heart-icon').text('♥');
  }

  saveFavorites(favorites);
}

function renderFoods(query = "") {
  if (isLoading) return;
  
  isLoading = true;
  showLoading();

  setTimeout(() => {
    $("#foods").empty();
    let filterRegion = $("#regionFilter").val().toLowerCase();
    let filterType = $("#typeFilter").val().toLowerCase();
    let filterRating = $("#ratingFilter").val();

    let combined = [...localFoods];

    if (query) {
      // Use jQuery's $.getJSON method to send a GET request to the API and retrieve JSON data
      $.getJSON(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .done(function(data) {
          if (data.meals) {
            data.meals.forEach(meal => {
              combined.push({
                id: 'guide_' + btoa(meal.strMeal).replace(/=/g, ''),
                name: meal.strMeal,
                category: meal.strCategory || "Unknown",
                area: meal.strArea || "Unknown",
                img: meal.strMealThumb, // Use img for consistency
                rating: 4,
                description: meal.strInstructions || "No description available.",
                type: 'Guides'
              });
            });
          }
          displayFoods(combined, filterRegion, filterType, filterRating);
          isLoading = false;
        })
        .fail(function() {
          displayFoods(combined, filterRegion, filterType, filterRating);
          isLoading = false;
        });
    } else {
      displayFoods(combined, filterRegion, filterType, filterRating);
      isLoading = false;
    }
  }, 500);
}

function displayFoods(arr, region, type, rating) {
  let filtered = arr.filter(food => {
    let matchRegion = !region || (food.area && food.area.toLowerCase().includes(region));
    let matchType = !type || (food.category && food.category.toLowerCase().includes(type));
    let matchRating;
    if (!rating || rating === "All Ratings") {
      matchRating = true;
    } else if (rating === "5 stars") {
      matchRating = food.rating === 5;
    } else {
      let minRating = parseInt(rating);
      matchRating = food.rating >= minRating;
    }
    let matchSearch = $("#searchInput").val() === "" || food.name.toLowerCase().includes($("#searchInput").val().toLowerCase());
    return matchRegion && matchType && matchRating && matchSearch;
  });

  currentFoods = filtered;

  if (filtered.length === 0) {
    $("#foods").html('<div class="no-results">No delicious matches found. Try different filters!</div>');
    return;
  }

  filtered.forEach((food, index) => {
    let card = `
      <div class="food-card" data-index="${index}" style="animation-delay: ${index * 0.1}s">
        <img src="${food.img}" alt="${food.name}" loading="lazy">
        <h3>${food.name}</h3>
        <div class="food-details">
          <span class="food-type">${food.category}</span>
          <span class="food-area">${food.area}</span>
        </div>
        <div class="rating">${food.rating}/5</div>
      </div>
    `;
    $("#foods").append(card);
  });

  
  $('.food-card').on('click', function() {
    const index = $(this).data('index');
    const food = currentFoods[index];
    showDetail(food);
  });
}

// return button
$("#back-btn").on("click", function() {
  showMainView();
});

// favourite event
$("#favorite-btn").on("click", function() {
  toggleFavorite();
});

// Enhanced event listeners with debouncing
let searchTimeout;

$("#searchBtn").on("click", function() {
  if (!isLoading) {
    renderFoods($("#searchInput").val());
  }
});

$("#searchInput").on("input", function() {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    if (!isLoading) {
      renderFoods($(this).val());
    }
  }, 300);
});

$("#searchInput").on("keypress", function(e) {
  if (e.which === 13 && !isLoading) {
    $("#searchBtn").click();
  }
});

$("#regionFilter, #typeFilter, #ratingFilter").on("change", function() {
  if (!isLoading) {
    renderFoods($("#searchInput").val());
  }
});

// Add click effects to search button
$("#searchBtn").on("mousedown", function() {
  $(this).css("transform", "translateY(-1px) scale(0.98)");
});

$("#searchBtn").on("mouseup mouseleave", function() {
  $(this).css("transform", "translateY(-3px) scale(1)");
});

// Initialize
$(document).ready(function() {
  renderFoods();

 
  const urlParams = new URLSearchParams(window.location.search);
  const foodName = urlParams.get('food');
  if (foodName) {
    const food = localFoods.find(f => f.name === foodName) || currentFoods.find(f => f.name === foodName);
    if (food) {
      showDetail(food);
    }
  }
});