function displayRecipes(recipes) {
    const recipesList = document.querySelector("#recipes-list");
    recipesList.innerHTML = "";

    for (const recipe of recipes) {
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="col" id="${recipe.id}">
            <div class="card h-100">
                <div class="card-img-top"></div>
                <div class="card-body">
                    <div class="row mb-2">
                        <h2 class="card-title col-8 card-name">
                            ${recipe.name}
                        </h2>
                        <div class="card-title col-4 text-end card-time-container">
                            <img class="me-1 card-time-watch" alt="" src="./assets/img/watch-time.svg"><span class="card-time">${recipe.time} min</span>
                        </div>
                    </div>
                    <div class="row">
                        <ul class="card-text col-6 list-unstyled card-ingredients-list">
                            <!-- Ingredients loading -->
                        </ul>
                        <p class="card-text col-6 card-description">
                            ${recipe.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;

        recipesList.appendChild(card);

        const ingredientList = card.querySelector(".card-ingredients-list");

        for (const ingredient of recipe.ingredients) {
            const cardIngredientItem = document.createElement("li");
            cardIngredientItem.innerHTML = `
            <li class="card-ingredients-list-item">
                <span class="card-ingredients-list-item-ingredient">${
                    ingredient.ingredient
                }</span>
                <span class="card-ingredients-list-item-quantity">${
                    ingredient.quantity || ""
                }</span>
                <span class="card-ingredients-list-item-unit">${
                    ingredient.unit || ""
                }</span>
            </li>
        `;

            ingredientList.appendChild(cardIngredientItem);
        }
    }
}

export default displayRecipes;
