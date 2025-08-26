document.addEventListener('DOMContentLoaded', () => {
    // --- DOM ELEMENT ---
    const recipeContentContainer = document.getElementById('recipe-content');

    // --- GET RECIPE ID FROM URL ---
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');

    // --- FIND AND RENDER THE RECIPE ---
    if (recipeId) {
        const recipe = recipes.find(r => r.id === recipeId);

        if (recipe) {
            renderRecipeDetails(recipe);
        } else {
            renderError("Sorry, we couldn't find that recipe.");
        }
    } else {
        renderError("No recipe specified.");
    }

    // --- RENDERING FUNCTIONS ---

    /**
     * Populates the page with the details of the found recipe.
     * @param {object} recipe - The recipe object to display.
     */
    function renderRecipeDetails(recipe) {
        document.title = recipe.name;

        const ingredientsHtml = recipe.ingredients.map(ingredient =>
            `<li class="ingredient-item">
                <span class="ingredient-check">✓</span>
                <span>${ingredient}</span>
            </li>`
        ).join('');

        const instructionsHtml = recipe.instructions.map(step =>
            `<li class="instruction-item">
                <div class="step-number">${step.split('.')[0]}</div>
                <p>${step.substring(step.indexOf('.') + 1).trim()}</p>
            </li>`
        ).join('');

        recipeContentContainer.innerHTML = `
            <img class="detail-image" src="${recipe.image}" alt="${recipe.name}">
            <div class="content-padding">
                <h1 class="detail-title">${recipe.name}</h1>
                <div class="tag-container">
                    <span class="tag yellow">${recipe.cuisine}</span>
                    <span class="tag green">${recipe.type}</span>
                    <span class="tag blue">⏱ ${recipe.time}</span>
                </div>
                <p class="description-text">${recipe.description}</p>

                <div class="section-grid">
                    <div>
                        <h2 class="section-title">Ingredients</h2>
                        <ul class="ingredients-list">
                            ${ingredientsHtml}
                        </ul>
                    </div>
                    <div>
                        <h2 class="section-title">Instructions</h2>
                        <ol class="instructions-list">
                            ${instructionsHtml}
                        </ol>
                    </div>
                </div>

                ${recipe.video ? `
                    <div class="video-section">
                        <h2 class="section-title">Tutorial Video</h2>
                        <div class="video-wrapper">
                            <iframe class="video-frame" src="${recipe.video}" title="Recipe Video" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                ` : ''}

                <div class="back-button-container">
                    <button onclick="window.history.back()" class="custom-btn">
                        ← Back
                    </button>
                </div>
            </div>
        `;
    }

    /**
     * Displays an error message in the content container.
     * @param {string} message - The error message to show.
     */
    function renderError(message) {
        recipeContentContainer.innerHTML = `
            <div class="content-loading">
                <h1 class="error-title">Error</h1>
                <p class="error-message">${message}</p>
                <a href="recipes.html" class="custom-btn">Back to Recipes</a>
            </div>
        `;
    }
});