document.addEventListener('DOMContentLoaded', () => {
    const recommendationList = document.getElementById('recommendation-list');

    // Datasets (make sure these scripts are included in HTML before this one)
    const recipesData = typeof recipes !== 'undefined' ? recipes : [];
    const localFoodsData = typeof localFoods !== 'undefined' ? localFoods : [];

    // Helper: shorten text
    function shorten(text, maxLength = 60) {
        if (!text) return '';
        return text.length > maxLength ? text.substring(0, maxLength) + '…' : text;
    }

    // Normalize recipes
    const normalizedRecipes = recipesData.map(item => ({
        ...item,
        source: "Recipe"
    }));
    
    // Normalize guides (localFoods)
    const normalizedLocalFoods = localFoodsData.map(item => ({
        id: item.name.replace(/\s+/g, '-').toLowerCase(),
        name: item.name,
        image: item.img || null,
        description: `Read a guide about ${item.name}.`,
        source: "Guide",
        url: `foodGuides&Searching.html?food=${encodeURIComponent(item.name)}`
    }));

    // Combine only recipes and guides
    const allContent = [...normalizedRecipes, ...normalizedLocalFoods];

    renderSuggestions(allContent, 5);
});

function renderSuggestions(allContent, count) {
    const recommendationList = document.getElementById('recommendation-list');
    recommendationList.innerHTML = '';

    if (allContent.length === 0) {
        recommendationList.innerHTML = '<p class="text-sm text-gray-500">No suggestions available right now.</p>';
        return;
    }

    // Shuffle + pick random
    const shuffled = allContent.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);

    selected.forEach(item => {
        const suggestionLink = document.createElement('a');
        suggestionLink.href = item.url || '#';
        suggestionLink.className = 'suggestion-card';

        // Add category label
        let badgeText = '';
        let badgeClass = '';
        let description = '';
        
        if (item.source === "Recipe") {
            badgeText = "Recipe";
            badgeClass = "type-recipe";
            description = `A recipe for ${item.name}.`;
        } else if (item.source === "Guide") {
            badgeText = "Guide";
            badgeClass = "type-guide";
            description = `A guide about ${item.name}.`;
        }

        suggestionLink.innerHTML = `
            ${item.image 
                ? `<img src="${item.image}" alt="${item.name}" class="suggestion-image" onerror="this.style.display='none'">`
                : ''}
            <div class="suggestion-content">
                <h4>${item.name}
                    <span class="${badgeClass}">${badgeText}</span>
                </h4>
                <p>${description}</p>
            </div>
        `;
        recommendationList.appendChild(suggestionLink);
    });
}