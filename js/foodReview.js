// Force clear potentially existing old localStorage data
function forceCleanOldData() {
    const storageKeys = ['malaysiStreetFoods', 'streetFoods', 'malaysianFoodData'];
    storageKeys.forEach(key => {
        if (localStorage.getItem(key)) {
            console.log(`Found old data, clearing localStorage key: ${key}`);
            localStorage.removeItem(key);
        }
    });
    console.log('Old data cleanup completed');
}

// Execute cleanup immediately when page loads
forceCleanOldData();

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

function toggleFavorite() {
    const username = getCurrentUsername();
    if (!username) {
        const returnUrl = encodeURIComponent(`FoodReview.html?id=${currentFood.id}`); // add returnUrl 
        alert("Please log in to add favorites!");
        window.location.href = `Login.html?returnUrl=${returnUrl}`; // use returnUrl 
        return;
    }

    if (!currentFood) return;

    let favorites = getFavorites();
    const favoriteIndex = favorites.findIndex(item => item.id === currentFood.id);

    if (favoriteIndex > -1) {
        favorites.splice(favoriteIndex, 1);
        updateFavoriteButton(false);
    } else {
        const foodToAdd = {
            id: currentFood.id,
            name: currentFood.name,
            image: currentFood.image,
            description: currentFood.description,
            location: currentFood.location,
            type: "Food Review"
        };
        favorites.push(foodToAdd);
        updateFavoriteButton(true);
    }

    saveFavorites(favorites);
    window.dispatchEvent(new Event('storage'));
}

function updateFavoriteButton(isFavorited) {
    const favoriteBtn = document.getElementById('favorite-btn');
    if (isFavorited) {
        favoriteBtn.innerHTML = '<i class="fas fa-heart"></i> Remove from Favorites';
        favoriteBtn.style.color = '#ef4444';
    } else {
        favoriteBtn.innerHTML = '<i class="far fa-heart"></i> Add to Favorites';
        favoriteBtn.style.color = '';
    }
}

function checkIfFavorited() {
    if (!currentFood) return;
    const favorites = getFavorites();
    const isFavorited = favorites.some(item => item.id === currentFood.id);
    updateFavoriteButton(isFavorited);
}

// Add CSS styles for favorite button
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .favorite-btn {
            background: none;
            border: 1px solid #ef4444;
            color: #ef4444;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-right: 10px;
        }
        .favorite-btn:hover {
            background: #ef4444;
            color: white;
        }
        .reviews-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            flex-wrap: wrap;
            gap: 12px;
        }
    `;
    document.head.appendChild(style);
});

// Street food data (automatically saved to localStorage)
let streetFoods = [];
// Default data
const defaultStreetFoods = [
    {
        id: 1,
        name: "Char Kway Teow",
        location: "Penang Road, George Town",
        image: "image/istockphoto-1035944650-612x612.jpg",//https://media.istockphoto.com/id/1035944650/photo/char-kway-teow.jpg?s=612x612&w=0&k=20&c=KlrvhHrke1LXIpaBlumnl4nPxZNm2Hg5YWWkNCT_pF8=
        description: "Char Kway Teow, a classic Malaysian street food, is flat vermicelli noodles stir-fried over high heat with shrimp, clams, and chives",
        reviews: [
            { user: "Ahmad", rating: 5, comment: "Best char kway teow in Penang! The wok hei is perfect!", time: "2 days ago" },
            { user: "Siti", rating: 5, comment: "Amazing flavors, perfectly charred noodles", time: "1 week ago" },
            { user: "Raj", rating: 4, comment: "Great taste but a bit oily", time: "2 weeks ago" }
        ]
    },
    {
        id: 2,
        name: "Nasi Lemak",
        image: "image/istockphoto-1488263235-612x612.jpg",//https://media.istockphoto.com/id/1488263235/photo/asian-cuisine-nasi-lemak-is-a-rice-dish-infused-with-coconut-milk.jpg?s=612x612&w=0&k=20&c=bOFAGd7R3XqHrMPJ05iVT2_Yv2CqceFN12rKWec-EEk=
        description: "Nasi Lemak, the national dish of Malaysia, is rice cooked in rich coconut milk and served with sambal, peanuts, and cucumber.",
        reviews: [
            { user: "Fatimah", rating: 5, comment: "Authentic taste, love the sambal!", time: "1 day ago" },
            { user: "Chen Wei", rating: 4, comment: "Good portion size and fresh ingredients", time: "3 days ago" },
            { user: "Kumar", rating: 5, comment: "Best nasi lemak in KL!", time: "1 week ago" }
        ]
    },
    {
        id: 3,
        name: "Roti Canai",
        location: "Jalan Alor, Kuala Lumpur",
        image: "image/istockphoto-1296798691-612x612.jpg",//https:media.istockphoto.com/id/1296798691/photo/roti-parata-or-roti-canai-with-lamb-curry-sauce-popular-malaysian-breakfast.jpg?s=612x612&w=0&k=20&c=wUVGfccFRGl1xvYIKhFQB4juHjF1pPOYHht0UAiuTBU=
        description: "Roti Prata with curry dipping sauce, layered pancakes paired with fragrant curry",
        reviews: [
            { user: "Muthu", rating: 5, comment: "Crispy and fluffy, excellent curry", time: "3 days ago" },
            { user: "Sarah", rating: 4, comment: "Good but could be crispier", time: "6 days ago" },
            { user: "Ali", rating: 4, comment: "Love the dhal curry!", time: "1 week ago" }
        ]
    },
    {
        id: 4,
        name: "Cendol",
        location: "Jonker Street, Melaka",
        image: "image/istockphoto-1283335828-612x612.jpg",//https://media.istockphoto.com/id/1283335828/photo/malaysian-desserts-called-cendol-cendol-is-made-from-crushed-ice-cubes-and-a-variety-of.jpg?s=612x612&w=0&k=20&c=-TXp9RHw4L1ggRAo8lrfi3xyAvdTYcGV-HAneWATuNs=
        description: "Cendol, a traditional Malaysian dessert, green vermicelli noodles with coconut milk and palm sugar syrup",
        reviews: [
            { user: "Lim", rating: 4, comment: "Refreshing dessert, perfect for hot weather", time: "5 days ago" },
            { user: "Aisha", rating: 5, comment: "Love the gula melaka!", time: "1 week ago" },
            { user: "Wong", rating: 3, comment: "A bit too sweet for my taste", time: "2 weeks ago" }
        ]
    },
    {
        id: 5,
        name: "Laksa",
        location: "Gurney Drive, Penang",
        image: "image/istockphoto-1310708373-612x612.jpg",//https://www.istockphoto.com/photo/assam-laksa-is-a-special-malaysian-popular-food-gm1310708373-400019440?searchscope=image%2Cfilm
        description: "Laksa, a spicy and sour noodle soup with rich coconut milk broth, rice noodles, and various toppings",
        reviews: [
            { user: "David", rating: 4, comment: "Spicy and tangy, authentic flavor", time: "4 days ago" },
            { user: "Priya", rating: 3, comment: "Too spicy for me but good taste", time: "1 week ago" },
            { user: "Hassan", rating: 5, comment: "Best laksa I've ever had!", time: "2 weeks ago" }
        ]
    },
    {
        id: 6,
        name: "Satay",
        location: "Kajang, Selangor",
        image: "image/istockphoto-527547742-612x612.jpg",//https://media.istockphoto.com/id/527547742/photo/chicken-satay-shot-from-top-down.jpg?s=612x612&w=0&k=20&c=m4c13gl_xKRSa0mAKrIpksOg8m0Ca5pcqOXd7Zh5DnE=
        description: "Satay, grilled meat skewers served with peanut sauce, cucumber, and onions",
        reviews: [
            { user: "Amir", rating: 5, comment: "Juicy and flavorful, peanut sauce is amazing", time: "1 day ago" },
            { user: "Jessica", rating: 4, comment: "Love the smoky flavor", time: "3 days ago" },
            { user: "Mani", rating: 5, comment: "Best satay I've had in Malaysia!", time: "1 week ago" }
        ]
    },
    {
        id: 7,
        name: "Mee Goreng Mamak",
        location: "Little India, Penang",
        image: "image/istockphoto-1699715253-612x612.jpg",//https://media.istockphoto.com/id/1699715253/photo/spicy-asian-style-stir-fried-noodles-mee-goreng-mamak.jpg?s=612x612&w=0&k=20&c=sGcGAfL26E-3PYXK9I1j6oqopyt6wWdy0I5pMzv8z2E=
        description: "Malaysian fried noodles, Indian-style, savory and slightly spicy with eggs and tofu",
        reviews: [
            { user: "Farid", rating: 4, comment: "Spicy and tasty, portion is big", time: "2 days ago" },
            { user: "Ling", rating: 5, comment: "Authentic mamak flavor, delicious!", time: "5 days ago" },
            { user: "Ravi", rating: 4, comment: "A bit oily but still very good", time: "1 week ago" }
        ]
    },
    {
        id: 8,
        name: "Apam Balik",
        location: "Night Market, Ipoh",
        image: "image/istockphoto-2188334681-612x612.jpg",//https://media.istockphoto.com/id/2188334681/photo/traditional-malaysian-street-food-apam-balik-thick-soft-pancake-with-peanuts-bananas.jpg?s=612x612&w=0&k=20&c=V9SOWgOs-i0QcvHRUVhNYCyAdZgzabZ8jS4VPEd9WR4=
        description: "Malaysian pancake, sweet snack filled with crushed peanuts and corn",
        reviews: [
            { user: "Hui Min", rating: 5, comment: "Crispy outside, soft inside, love it!", time: "2 days ago" },
            { user: "Zain", rating: 4, comment: "Nice but a bit too sweet", time: "4 days ago" },
            { user: "Arun", rating: 5, comment: "Best apam balik in the pasar malam!", time: "1 week ago" }
        ]
    },
    {
        id: 9,
        name: "Teh Tarik",
        location: "Mamak Stall, Johor Bahru",
        image: "image/istockphoto-1441160692-612x612.jpg",//https://media.istockphoto.com/id/1441160692/photo/tea-with-milk-or-popularly-known-as-teh-tarik-in-a-mug-on-the-table.jpg?s=612x612&w=0&k=20&c=gHoeeDbLzi5w4agroCw-J4vJNv5lPwFXSJEhvntRez0=
        description: "Pulled tea, Malaysia's iconic drink, frothy and aromatic",
        reviews: [
            { user: "Nora", rating: 5, comment: "Smooth and creamy, my favorite drink!", time: "1 day ago" },
            { user: "James", rating: 4, comment: "Good balance of sweetness", time: "3 days ago" },
            { user: "Vijay", rating: 5, comment: "Best teh tarik, very authentic", time: "6 days ago" }
        ]
    },
    {
        id: 10,
        name: "Kuih Lapis",
        location: "Traditional Market, Kuching",
        image: "image/istockphoto-1313082219-612x612.jpg",//https://media.istockphoto.com/id/1313082219/photo/kuih-lapis-is-a-traditional-malay-nyonya-sweet-desert.jpg?s=612x612&w=0&k=20&c=cy5r7n-K85X27yTbO__Le1Clu5bdT_s_ZuuiKPsaU6k=
        description: "Layered cake, traditional Malaysian colorful steamed cake, soft and sweet",
        reviews: [
            { user: "Melissa", rating: 5, comment: "Colorful and tasty, kids love it", time: "2 days ago" },
            { user: "Azlan", rating: 4, comment: "Good snack, a bit sweet though", time: "5 days ago" },
            { user: "Chang", rating: 5, comment: "Classic kuih, reminds me of childhood", time: "1 week ago" }
        ]
    },
    {
        id: 21,
        name: "Kolo Mee",
        location: "Kuching, Sarawak",
        image: "image/istockphoto-2075066984-612x612.jpg",//https://media.istockphoto.com/id/2075066984/photo/stir-fried-dry-wanton-noodle-mee-with-meat-dumpling-in-plate-on-dark-grey-wood-table-asian.jpg?s=612x612&w=0&k=20&c=W9-ODZ4oMg3pBTKf0gk6mijukKlKdoQb7eHPFf1suIE=
        description: "Kolo Mee, Sarawak specialty dry noodles with char siu and scallion oil",
        reviews: [
            { user: "Wei Ling", rating: 5, comment: "Authentic Sarawak taste!", time: "2 days ago" },
            { user: "Andrew", rating: 4, comment: "Delicious but portion small", time: "1 week ago" }
        ]
    },
    {
        id: 22,
        name: "Ulam with Sambal Belacan",
        location: "Kampung Baru, Kuala Lumpur",
        image: "image/istockphoto-1177037197-612x612.jpg",//https://media.istockphoto.com/id/1177037197/photo/laksa-johor-popular-malay-noodle-with-ulam-and-sambal-belacan.jpg?s=612x612&w=0&k=20&c=63ga6yl1EdTVhHasTpvol2VcY11cIJ6li5flYCPcvDM=
        description: "Malay traditional salad with shrimp paste chili sauce",
        reviews: [
            { user: "Farah", rating: 4, comment: "Very fresh vegetables!", time: "3 days ago" },
            { user: "Hafiz", rating: 5, comment: "Spicy and appetizing!", time: "1 week ago" }
        ]
    },
    {
        id: 23,
        name: "Kaya Toast",
        location: "Kopitiam, Ipoh",
        image: "image/istockphoto-1402975138-612x612.jpg",//https://media.istockphoto.com/id/1402975138/photo/breakfast-set-with-toast-bread-half-boiled-eggs-and-coffee.jpg?s=612x612&w=0&k=20&c=3w0FOk6l-INrVbaD00LUFfZyQ0kM7-OtXedo3I7STAY=
        description: "Kaya toast, toasted bread with coconut jam and butter, classic breakfast",
        reviews: [
            { user: "Mei", rating: 5, comment: "Best with kopi!", time: "2 days ago" },
            { user: "John", rating: 4, comment: "Simple but delicious", time: "5 days ago" }
        ]
    },
    {
        id: 24,
        name: "Pulut Panggang",
        location: "Terengganu Night Market",
        image: "image/istockphoto-1470005512-612x612.jpg",//https://media.istockphoto.com/id/1470005512/photo/a-close-up-of-lontong-traditional-food-from-indonesia-originating-from-rice-filled-with.jpg?s=612x612&w=0&k=20&c=9p9MG8-xI-JSvOrlfdShDc_lizP9loSE37ygH7PLdk4=
        description: "Grilled glutinous rice rolls, filled with coconut or fish, wrapped in banana leaves and grilled",
        reviews: [
            { user: "Azlan", rating: 4, comment: "Fragrant banana leaf aroma!", time: "1 week ago" },
            { user: "Nurul", rating: 5, comment: "Reminds me of childhood snacks", time: "2 weeks ago" }
        ]
    },
    {
        id: 25,
        name: "Mee Rebus",
        location: "Johor Bahru",
        image: "image/istockphoto-480739881-612x612.jpg",//https://media.istockphoto.com/id/480739881/photo/mee-rebus-spicy-noodle-table-set.jpg?s=612x612&w=0&k=20&c=PcGvga8ntmEAAMP_E5EwPb4PXNUbWp9t96TLBIQOJL8=
        description: "Malay-style yellow noodles with thick potato peanut gravy",
        reviews: [
            { user: "Rahman", rating: 5, comment: "Rich and flavorful sauce", time: "4 days ago" },
            { user: "Aida", rating: 4, comment: "Good balance of sweet and spicy", time: "1 week ago" }
        ]
    },
    {
        id: 26,
        name: "Kacang Pool",
        location: "Johor Bahru",
        image: "image/istockphoto-1130968926-612x612.jpg",//https://media.istockphoto.com/id/1130968926/photo/specially-made-toasted-bread-with-bean-sauce-served-with-egg-popular-in-state-of-johor-in.jpg?s=612x612&w=0&k=20&c=rjtwE2nglRzt9K0iXiu2qXvExXcH0pGfXFSKLBedckw=
        description: "Johor specialty, broad bean sauce with half-boiled eggs and bread",
        reviews: [
            { user: "Nadia", rating: 5, comment: "So hearty and filling!", time: "3 days ago" },
            { user: "Azmi", rating: 4, comment: "Unique dish, love the egg", time: "1 week ago" }
        ]
    },
    {
        id: 27,
        name: "Rojak Penang",
        location: "Gurney Drive, Penang",
        image: "image/istockphoto-1154410694-612x612.jpg",//https://media.istockphoto.com/id/1154410694/photo/popular-penang-fruit-rojak-served-with-prawn-paste-and-groundnuts.jpg?s=612x612&w=0&k=20&c=WnW0aIiFZ-UX4yAy0_V0QHVZAim9wrq_8CSGAk_kgRo=
        description: "Penang rojak, fruits and vegetables mixed with shrimp paste sauce, sweet, sour and spicy",
        reviews: [
            { user: "Ling", rating: 5, comment: "Best balance of flavors!", time: "2 days ago" },
            { user: "Tan", rating: 3, comment: "Too strong shrimp paste for me", time: "5 days ago" }
        ]
    },
    {
        id: 28,
        name: "Prawn Noodles",
        location: "Penang",
        image: "image/istockphoto-1471563658-612x612.jpg",//https://media.istockphoto.com/id/1471563658/photo/famous-prawn-mee.jpg?s=612x612&w=0&k=20&c=6xJfWnQ1gBuBhlzwl2p80s-M94OMk1GO1Qp8SV345j0=
        description: "Layered cake, colorful traditional Malay dessert with chewy texture",
        reviews: [
            { user: "Alice", rating: 5, comment: "So pretty and tasty!", time: "1 day ago" },
            { user: "Jason", rating: 4, comment: "Sweet but nice texture", time: "1 week ago" }
        ]
    },
    {
        id: 29,
        name: "Ayam Penyet",
        location: "Shah Alam",
        image: "image/istockphoto-505893758-612x612.jpg",//https://media.istockphoto.com/id/505893758/photo/rice-penyet-chicken-indonesian-fried-chicken-rice.jpg?s=612x612&w=0&k=20&c=7lcP7bU-JVulTgy11tl_BB6RPQqP1Ys7pgaTjQ5Nl8Q=
        description: "Indonesian-style fried chicken with chili sauce and rice, crispy outside and tender inside",
        reviews: [
            { user: "Firdaus", rating: 5, comment: "Crispy and spicy, perfect combo!", time: "3 days ago" },
            { user: "Lina", rating: 4, comment: "Portion is big!", time: "6 days ago" }
        ]
    },
    {
        id: 30,
        name: "Spring Rolls",
        location: "Night Market, Malaysia",
        image: "image/istockphoto-860900100-612x612.jpg",//https://media.istockphoto.com/id/860900100/photo/teochew-popiah-the-chinese-fresh-vegetable-spring-roll-on-wooden-serving-block.jpg?s=612x612&w=0&k=20&c=2Ow6rjtTeN33yGlo8RWD6XOBu6Sdeukjbzh5C5AIln4=
        description: "Malaysian pancake, sweet dessert with crushed peanuts, corn and sugar",
        reviews: [
            { user: "Daniel", rating: 5, comment: "Crispy edges, soft inside", time: "2 days ago" },
            { user: "Nora", rating: 4, comment: "Love the sauce filling!", time: "1 week ago" }
        ]
    },
    {
        id: 31,
        name: "Satay Celup",
        location: "Ipoh,night-market",
        image: "image/istockphoto-1082846460-612x612.jpg",//https://media.istockphoto.com/id/1082846460/photo/satay-celup-or-lok-lok-traditional-malaysian-meal-cooking-process-steamed-round-wooden-bowl.jpg?s=612x612&w=0&k=20&c=B6XLsdfrr7IdPZpji0SGkdn1IfhuZzx73fJBuuKJyMw=
        description: "Skewered meats and vegetables dipped in satay peanut sauce hotpot",
        reviews: [
            { user: "Kevin", rating: 5, comment: "Unique Melaka specialty!", time: "2 days ago" },
            { user: "Ying", rating: 4, comment: "Messy but super tasty", time: "1 week ago" }
        ]
    },
    {
        id: 32,
        name: " Clay Pot Chicken Rice",
        location: "Penang",
        image: "image/istockphoto-1651891983-612x612.jpg",//https://media.istockphoto.com/id/1651891983/photo/steamed-sparerib-rice-in-claypot.jpg?s=612x612&w=0&k=20&c=o0qOnDAZNP-SsPVuMFfOhQSxSn6Ef3b-lreDuUgt8k0=
        description: "Fried yellow noodles with eggs, potatoes, tofu and special sauce",
        reviews: [
            { user: "Raj", rating: 5, comment: "Flavorful!", time: "3 days ago" },
            { user: "Ali", rating: 4, comment: "Classic taste", time: "5 days ago" }
        ]
    },
    {
        id: 33,
        name: "Steamed Rice Flour Cake",
        location: "Brickfields, KL",
        image: "image/istockphoto-1438136062-612x612.jpg",//https://media.istockphoto.com/id/1438136062/photo/thai-steamed-cupcakes-khanom-pui-fai.jpg?s=612x612&w=0&k=20&c=rDTpKXNoVDCFcxMd0RDVW0rsfI-MrlcLEUdb_AMizE4=
        description: "A Chinese tradisional Food",
        reviews: [
            { user: "Suresh", rating: 5, comment: "Authentic South Indian vibes!", time: "2 days ago" },
            { user: "Anu", rating: 4, comment: "Rice refill unlimited!", time: "1 week ago" }
        ]
    },
    {
        id: 34,
        name: "Roti John",
        location: "Johor Bahru",
        image: "image/istockphoto-1091015204-612x612.jpg",//https://media.istockphoto.com/id/1091015204/photo/malaysian-roti-john-stuffed-sandwich.jpg?s=612x612&w=0&k=20&c=8YAcEraYwA24L1UZ0ivV2kVA55ewPhqc8f8E0BjYUhY=
        description: "Malaysian-style long bread, fried with eggs, meat filling and sauce",
        reviews: [
            { user: "Farid", rating: 5, comment: "Big portion, very filling!", time: "4 days ago" },
            { user: "Nadia", rating: 4, comment: "Cheesy version is best", time: "6 days ago" }
        ]
    },
    {
        id: 35,
        name: "Ikan Bakar",
        location: "Port Dickson",
        image: "image/istockphoto-2199487832-612x612.jpg",//https://media.istockphoto.com/id/2199487832/photo/ikan-bakar-is-a-popular-malaysian-dish.jpg?s=612x612&w=0&k=20&c=r95qUaHhRfuRMIdV7pAFQDPffhG1qSTV4bNaJ-Xvtw0=
        description: "Grilled fish, usually wrapped in banana leaves and coated with spicy sauce",
        reviews: [
            { user: "Amir", rating: 5, comment: "So smoky and spicy!", time: "2 days ago" },
            { user: "Siti", rating: 4, comment: "Fresh fish, but a bit spicy", time: "1 week ago" }
        ]
    },
    {
        id: 36,
        name: "Nasi Dagang",
        location: "Terengganu",
        image: "image/istockphoto-1201106611-612x612.jpg",//https://media.istockphoto.com/id/1201106611/photo/nasi-dagang-a-popular-malaysian-meal-on-the-east-coast-of-the-malaysian-peninsular.jpg?s=612x612&w=0&k=20&c=bJTD1-SKifOKe4peoRNTgtKp2tHS4J44HxmaM3o9qZI=
        description: "Steamed coconut rice with fish curry, traditional breakfast in Terengganu and Kelantan",
        reviews: [
            { user: "Hakim", rating: 5, comment: "Very fragrant rice!", time: "3 days ago" },
            { user: "Zahra", rating: 4, comment: "Best with fish curry", time: "5 days ago" }
        ]
    },
    {
        id: 37,
        name: "Pisang Goreng",
        location: "Night Market",
        image: "image/istockphoto-628659258-612x612.jpg",//https://media.istockphoto.com/id/628659258/photo/pisang-goreng-fried-bananas-in-batter-on-plate-macro-horizontal.jpg?s=612x612&w=0&k=20&c=UQyfZc6XCDNs9WtJOlvceSNBoPi_jGUIJkVX5vPSuls=
        description: "Fried banana, crispy outside and soft inside, one of the most popular street snacks",
        reviews: [
            { user: "Ling", rating: 5, comment: "Hot and crispy, so good!", time: "1 day ago" },
            { user: "Faiz", rating: 4, comment: "Best with cheese topping", time: "1 week ago" }
        ]
    },
    {
        id: 38,
        name: "Keropok Lekor",
        location: "Night-market",
        image:"image/istockphoto-896625906-612x612.jpg",//https://media.istockphoto.com/id/896625906/photo/keropok-lekor-isolated-on-wooden-background.jpg?s=612x612&w=0&k=20&c=LYSXHq0D5WWKaFNs52mX8wSMFUaxB-fMT6hc4OGdXAU=
        description: "Keropok Lekor, a famous Terengganu fish sausage snack, deep-fried until crispy on the outside and chewy inside.",
        reviews: [
             { user: "Hafiz", rating: 5, comment: "So crispy and chewy, the best snack!", time: "2 days ago" },
        { user: "Aminah", rating: 4, comment: "Tasty but a little oily", time: "5 days ago" },
        { user: "Tan", rating: 5, comment: "Brings back childhood memories, love it!", time: "1 week ago" }
        ]
    },
    {
        id: 39,
        name: "Laksa Johor",
        location: "Johor",
        image: "image/istockphoto-2191416048-612x612.jpg",//https://media.istockphoto.com/id/2191416048/photo/a-bowl-of-laksa-johor.jpg?s=612x612&w=0&k=20&c=Ky35TviV23G4aV0VoHxqJ79p2pf9PvAdIRTxx-E5PTo=
        description: "Unique Johor laksa, uses spaghetti instead of rice noodles with rich fish broth",
        reviews: [
            { user: "Amin", rating: 5, comment: "So unique compared to other laksa!", time: "3 days ago" },
            { user: "Rina", rating: 4, comment: "Love the thick gravy", time: "5 days ago" }
        ]
    },
    {
        id: 40,
        name: "Hokkien Mee",
        location: "Ipoh",
        image: "image/istockphoto-1277076119-612x612.jpg",//https://media.istockphoto.com/id/1277076119/photo/steamy-fried-hokkien-mee-on-table-ready-to-eat.jpg?s=612x612&w=0&k=20&c=n5S48OH8HvM7TB7SFflAkzHlzyEqdObqCMKwMCFEdbc=
        description: "Green bean noodles, coconut milk, palm sugar syrup and shaved ice refreshing dessert",
        reviews: [
            { user: "James", rating: 5, comment: "Refreshing in hot weather!", time: "2 days ago" },
            { user: "Sophia", rating: 4, comment: "Very classic and nice", time: "1 week ago" }
        ]
    },
    {
        id: 41,
        name: "Nasi Lemak Kukus",
        location: "Cheras, KL",
        image: "image/istockphoto-1135962086-612x612.jpg",//https://media.istockphoto.com/id/1135962086/photo/fried-tilapia-fish-and-rice.jpg?s=612x612&w=0&k=20&c=DSo1XbAccRZPvX8eAKF0DshbxmLr4Y96FUSDa12qP04=
        description: "Steamed instead of boiled rice, fluffier texture, served with sambal chili sauce",
        reviews: [
            { user: "Adam", rating: 5, comment: "Fluffy rice and spicy sambal!", time: "2 days ago" },
            { user: "Chong", rating: 4, comment: "Unique steaming method", time: "1 week ago" }
        ]
    },
    {
        id: 42,
        name: "Homemade Nasi Tim Ayam Jamur ",
        location: "Ipoh",
        image: "image/istockphoto-1335554418-612x612.jpg",//https://media.istockphoto.com/id/1335554418/photo/homemade-nasi-tim-ayam-jamur-with-soy-sauce-and-boiled-egg-served-with-cracker-and-sambal.jpg?s=612x612&w=0&k=20&c=B5Dx31sZd4CZMmPnszmoWOBkwONxBwbEfVKIcbOoWVQ=
        description: "Fried radish cake with dark soy sauce, eggs, bean sprouts and preserved vegetables",
        reviews: [
            { user: "Tan", rating: 5, comment: "Crispy edges and savory taste!", time: "3 days ago" },
            { user: "Joyce", rating: 4, comment: "Best eaten hot", time: "5 days ago" }
        ]
    },
    {
        id: 43,
        name: "Ang Ku Kueh",
        location: "Ipoh",
        image: "image/istockphoto-1311901852-612x612.jpg",//https://media.istockphoto.com/id/1311901852/photo/kuih-angku.jpg?s=612x612&w=0&k=20&c=w1r8_E2WDkRVDJjYx_63epi_YKY_0IfB_MlyvqSTdjs=
        description: "Red tortoise cake is a small round or oval-shaped Chinese sweet dumpling with soft, sticky glutinous rice flour skin wrapped around a sweet central filling.",
        reviews: [
            { user: "Ali", rating: 5, comment: "Sweet and savory gravy!", time: "1 day ago" },
            { user: "Farah", rating: 4, comment: "Unique peanut flavor", time: "1 week ago" }
        ]
    },
    {
        id: 44,
        name: "Sliced Chicken Noodle Soup",
        location: "Kopitiam",
        image: "image/istockphoto-810747360-612x612.jpg",//https://media.istockphoto.com/id/810747360/photo/close-up-on-popular-delicious-malaysia-ipoh-sliced-chicken-noodle-soup.jpg?s=612x612&w=0&k=20&c=I3f9-lBdJRY2GOSk-c5qQqvwLGlgCDxNAbjsQC2_4GM=
        description: "Yee Mee noodles with eggs, vegetables and special soup",
        reviews: [
            { user: "Danial", rating: 5, comment: "Comfort food anytime!", time: "2 days ago" },
            { user: "Wei", rating: 4, comment: "Spicy version is best", time: "6 days ago" }
        ]
    },
    {
        id: 45,
        name: "Claypot Noodles",
        location: "Kopitiam",
        image: "image/istockphoto-1305946388-612x612.jpg",//https://media.istockphoto.com/id/1305946388/photo/restaurant-situation.jpg?s=612x612&w=0&k=20&c=J2HrWjaIcpRVTAPMg-aj8kvmKsxTrXmDKZryGzHcppI=
        description: "Claypo noodles. the asia food",
        reviews: [
            { user: "Grace", rating: 5, comment: "Since I have a big bag of yee mee (yi mein/伊面 aka Cantonese egg noodles), I have been making several versions of claypot noodles for lunch.", time: "3 days ago" },
            { user: "Lim", rating: 4, comment: "Perfect with spicy sauce", time: "1 week ago" }
        ]
    },
    {
        id: 46,
        name: "Nasi Kerabu",
        location: "Kelantan",
        image: "image/istockphoto-1312743970-612x612.jpg",//https://media.istockphoto.com/id/179065177/photo/nasi-kerabu-or-ulam.jpg?s=612x612&w=0&k=20&c=p-qnOBKP-AgqoHYYGTmZkHhDPxDGau2NdZDmugZDhdk=
        description: "Blue flower rice with herbs, fried chicken and fish sauce",
        reviews: [
            { user: "Zul", rating: 5, comment: "So colorful and tasty!", time: "2 days ago" },
            { user: "Amirah", rating: 4, comment: "A bit strong for first-timers", time: "5 days ago" }
        ]
    },
    {
        id: 47,
        name: "Sup Kambing",
        location: "Mamak Stall",
        image: "image/istockphoto-1058109932-612x612.jpg",//https://media.istockphoto.com/id/1058109932/photo/soup.jpg?s=612x612&w=0&k=20&c=jtN6t3AntQzcn_nrCqyXGK9liZXdunKCRhkukFpWx8E=
        description: "Fragrant mutton soup with spices and fried shallots",
        reviews: [
            { user: "Hafiz", rating: 5, comment: "Warm and hearty!", time: "3 day ago" },
            { user: "Nora", rating: 4, comment: "Strong mutton taste", time: "1 week ago" }
        ]
    },
    {
        id: 48,
        name: "Tau Fu Fah",
        location: "Ipoh",
        image: "image/istockphoto-2165980003-612x612.jpg",//https://media.istockphoto.com/id/2165980003/photo/tau-fu-fah-a-desert-made-with-soy-product-and-caramel.jpg?s=612x612&w=0&k=20&c=ln9w_ooHScL-9OYY4vANDgXYKkzUia3h0VIy2Zi96I8=
        description: "Soft tofu pudding with brown sugar or ginger syrup",
        reviews: [
            { user: "Chee", rating: 5, comment: "Super silky texture!", time: "3 days ago" },
            { user: "Mei", rating: 4, comment: "Prefer ginger syrup version", time: "6 days ago" }
        ]
    },
    {
        id: 49,
        name: "Bak kut teh",
        location: "Ipoh",
        image: "image/istockphoto-1304718341-612x612.jpg",//https://media.istockphoto.com/id/1304718341/photo/close-up-bak-kut-teh-or-chinese-malaysian-broth-in-clay-pot.jpg?s=612x612&w=0&k=20&c=EOAM-SNv94Rkp0FwZTrTKXjTsJte_DHKyVc8yohzarQ=
        description: "Is a pork rib dish cooked in broth popularly served in Malaysia",
        reviews: [
            { user: "Yen", rating: 5, comment: "Good taste for soup!", time: "2 days ago" },
            { user: "Jason", rating: 4, comment: "I like the soup!", time: "1 week ago" }
        ]
    },
    {
        id: 50,
        name: "Rojak Pasembur",
        location: "Penang",
        image: "image/istockphoto-2182789176-612x612.jpg",//https://media.istockphoto.com/id/2182789176/photo/rojak-pasembur-a-popular-cuisine-in-malaysia.jpg?s=612x612&w=0&k=20&c=y2SwWgfcfUFC048SiDCwoUm5hDt3d4dCZrRVE-w4gMw=
        description: "Malaysian-style salad with fried items, vegetables and peanut sauce",
        reviews: [
            { user: "Mani", rating: 5, comment: "So many textures!", time: "1 day ago" },
            { user: "Tan", rating: 4, comment: "Sweet and spicy combo", time: "5 days ago" }
        ]
    }
];


let currentFood = null;
let currentRating = 5;

function saveToLocalStorage() {
    try {
        localStorage.setItem('malaysiStreetFoods', JSON.stringify(streetFoods));
        console.log('Data saved to localStorage');
    } catch (error) {
        console.error('Failed to save data:', error);
    }
}

function loadFromLocalStorage() {
    try {
        const savedFoods = localStorage.getItem('malaysiStreetFoods');
        if (savedFoods) {
            const parsedFoods = JSON.parse(savedFoods);
            if (parsedFoods.length >= defaultStreetFoods.length) {
                streetFoods = parsedFoods;
                console.log('Successfully loaded data from localStorage');
                return true;
            } else {
                console.log('Incomplete localStorage data, using default data');
                const mergedFoods = [...defaultStreetFoods];
                parsedFoods.forEach(savedFood => {
                    const existingIndex = mergedFoods.findIndex(f => f.id === savedFood.id);
                    if (existingIndex !== -1) {
                        mergedFoods[existingIndex] = {
                            ...mergedFoods[existingIndex],
                            reviews: savedFood.reviews || mergedFoods[existingIndex].reviews
                        };
                    } else {
                        mergedFoods.push(savedFood);
                    }
                });
                streetFoods = mergedFoods;
                saveToLocalStorage();
                return true;
            }
        }
    } catch (error) {
        console.error('Failed to load data:', error);
    }
    return false;
}

function resetToDefault() {
    streetFoods = JSON.parse(JSON.stringify(defaultStreetFoods));
    saveToLocalStorage();
    renderFoodGrid();
    alert('Data has been reset to default values');
}

function calculateAverageRating(reviews) {
    if (!reviews || reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + (parseInt(review.rating) || 0), 0);
    return (sum / reviews.length).toFixed(1);
}

function generateStars(rating, interactive = false) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHTML += interactive 
                ? `<span class="star filled" data-rating="${i}">&#9733;</span>`
                : `<span class="star filled">&#9733;</span>`;
        } else if (i === fullStars + 1 && halfStar) {
            starsHTML += interactive 
                ? `<span class="star half" data-rating="${i}">&#9733;</span>`
                : `<span class="star half">&#9733;</span>`;
        } else {
            starsHTML += interactive 
                ? `<span class="star" data-rating="${i}">&#9733;</span>`
                : `<span class="star">&#9733;</span>`;
        }
    }
    return starsHTML;
}

function renderFoodGrid() {
    // Sort streetFoods by average rating in descending order
    const sortedFoods = [...streetFoods].sort((a, b) => {
        const avgRatingA = parseFloat(calculateAverageRating(a.reviews));
        const avgRatingB = parseFloat(calculateAverageRating(b.reviews));
        return avgRatingB - avgRatingA; // Descending order
    });

    const gridHTML = sortedFoods.map(food => {
        const averageRating = parseFloat(calculateAverageRating(food.reviews));
        const totalReviews = food.reviews.length;
        const latestReview = food.reviews[0] || { comment: "No reviews yet" };
        return `
            <div class="food-card" onclick="showDetailView(${food.id})">
                <div class="food-header">
                    <div class="food-image">
                        <img src="${food.image}" alt="${food.name}">
                    </div>
                    <div class="rating-section">
                        <div class="stars">
                            ${generateStars(averageRating)}
                        </div>
                        <div class="review-count">${totalReviews} reviews</div>
                    </div>
                </div>
                <div class="food-name">${food.name}</div>
                <div class="food-description">${food.description}</div>
                <div class="food-location">
                    <span class="location-icon">📍</span>
                    ${food.location || 'No location provided'}
                </div>
                <div class="latest-review">
                    <div class="latest-review-label">Latest review:</div>
                    <div class="latest-review-text">"${latestReview.comment}"</div>
                </div>
            </div>
        `;
    }).join('');

    console.log("Generated HTML string length:", gridHTML.length);
    document.getElementById('food-grid').innerHTML = gridHTML;
    
    setTimeout(() => {
        const renderedCards = document.querySelectorAll('.food-card').length;
        console.log("Actual number of rendered food cards:", renderedCards);
        console.log("=== Rendering completed ===");
    }, 100);
}

function showDetailView(foodId) {
    currentFood = streetFoods.find(food => food.id === foodId);
    if (!currentFood) return;

    const averageRating = parseFloat(calculateAverageRating(currentFood.reviews));
    const totalReviews = currentFood.reviews.length;

    const headerHTML = `
        <div class="detail-image">
            <img src="${currentFood.image}" alt="${currentFood.name}">
        </div>
        <div class="detail-info">
            <h1>${currentFood.name}</h1>
            <p>${currentFood.description}</p>
            <div class="detail-location">
                <span style="margin-right: 8px;">📍</span>
                ${currentFood.location || 'No location provided'}
            </div>
            <div class="detail-rating">
                <div class="stars">
                    ${generateStars(averageRating)}
                </div>
                <span style="color: #666;">(${totalReviews} reviews)</span>
            </div>
        </div>
    `;

    document.getElementById('detail-header').innerHTML = headerHTML;
    renderReviews();

    document.getElementById('main-view').style.display = 'none';
    document.getElementById('detail-view').classList.add('active');

    checkIfFavorited();
}

function showMainView() {
    document.getElementById('main-view').style.display = 'block';
    document.getElementById('detail-view').classList.remove('active');
    document.getElementById('review-form').classList.remove('active');
    renderFoodGrid();
}

function renderReviews() {
    const reviewsHTML = currentFood.reviews.map(review => {
        const userRating = parseInt(review.rating) || 5;
        return `
            <div class="review-item">
                <div class="review-header">
                    <div class="reviewer-info">
                        <div class="reviewer-avatar">${review.user.charAt(0).toUpperCase()}</div>
                        <div class="reviewer-details">
                            <h4>${review.user}</h4>
                            <div class="stars">
                                ${generateStars(userRating)}
                            </div>
                        </div>
                    </div>
                    <div class="review-time">
                        <span>🕒</span> ${review.time}
                    </div>
                </div>
                <div class="review-comment">${review.comment}</div>
            </div>
        `;
    }).join('');

    document.getElementById('reviews-list').innerHTML = reviewsHTML;
}

function toggleReviewForm() {
    const form = document.getElementById('review-form');
    form.classList.toggle('active');
    if (!form.classList.contains('active')) {
        document.getElementById('reviewer-name').value = '';
        document.getElementById('review-comment').value = '';
        setRating(5);
    } else {
        initializeRatingStars();
        setRating(5);
        setTimeout(() => {
            document.getElementById('reviewer-name').focus();
        }, 100);
    }
}

function initializeRatingStars() {
    const starsContainer = document.getElementById('rating-stars');
    if (starsContainer) {
        starsContainer.innerHTML = generateStars(5, true);
        const stars = starsContainer.querySelectorAll('.star');
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const rating = parseInt(star.getAttribute('data-rating'));
                setRating(rating);
            });
        });
    } else {
        console.error('Rating stars container not found');
    }
}

function setRating(rating) {
    currentRating = parseInt(rating);
    const stars = document.querySelectorAll('#rating-stars .star');
    stars.forEach(star => {
        const starRating = parseInt(star.getAttribute('data-rating'));
        star.classList.remove('filled');
        if (starRating <= currentRating) {
            star.classList.add('filled');
        }
    });
    console.log(`Rating set to: ${currentRating} stars`);
}

function submitReview() {
    const name = document.getElementById('reviewer-name').value.trim();
    const comment = document.getElementById('review-comment').value.trim();

    if (!name || !comment) {
        alert('Please fill in username and review content');
        return;
    }

    if (currentRating < 1 || currentRating > 5) {
        alert('Please select a 1-5 star rating');
        return;
    }

    const newReview = {
        user: name,
        rating: parseInt(currentRating),
        comment: comment,
        time: "Just now"
    };

    currentFood.reviews.unshift(newReview);

    const foodIndex = streetFoods.findIndex(food => food.id === currentFood.id);
    if (foodIndex !== -1) {
        streetFoods[foodIndex] = { ...currentFood };
    }

    saveToLocalStorage();
    updateDetailViewRating();
    renderReviews();
    toggleReviewForm();
    renderFoodGrid();
}

function updateDetailViewRating() {
    const averageRating = parseFloat(calculateAverageRating(currentFood.reviews));
    const totalReviews = currentFood.reviews.length;
    const ratingElement = document.querySelector('.detail-rating');
    if (ratingElement) {
        ratingElement.innerHTML = `
            <div class="stars">
                ${generateStars(averageRating)}
            </div>
            <span style="color: #666;">(${totalReviews} reviews)</span>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (!loadFromLocalStorage()) {
        console.log('No saved data found, using default data');
        streetFoods = JSON.parse(JSON.stringify(defaultStreetFoods));
        saveToLocalStorage();
    }

    const urlParams = new URLSearchParams(window.location.search);
    const foodId = urlParams.get('id');
    
    if (foodId) {
        console.log(`URL parameter id: ${foodId}`);
        const id = isNaN(foodId) ? foodId : parseInt(foodId);
        const foundFood = streetFoods.find(food => food.id === id);
        if (foundFood) {
            console.log(`Found food: ${foundFood.name} (id: ${id})`);
            showDetailView(id);
        } else {
            console.log(`Food with id ${id} not found, rendering grid`);
            renderFoodGrid();
        }
    } else {
        console.log('No id parameter, rendering food grid');
        renderFoodGrid();
    }
    
    initializeRatingStars();
    setRating(5);
    
    document.addEventListener('keydown', function(event) {
        if (document.getElementById('review-form').classList.contains('active')) {
            if (event.key >= '1' && event.key <= '5') {
                setRating(parseInt(event.key));
                event.preventDefault();
            }
        }
        if (event.key === 'Escape') {
            if (document.getElementById('review-form').classList.contains('active')) {
                toggleReviewForm();
            } else if (document.getElementById('detail-view').classList.contains('active')) {
                showMainView();
            }
        }
    });
    
    console.log('Malaysian Street Food Rating System initialized');
    console.log('Shortcuts: Number keys 1-5 to set rating, ESC key to return/close');
});
