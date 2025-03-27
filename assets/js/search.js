import recipes from "./fetchRecipes.js";
import displayRecipes from "./dislayRecipes.js";

function search(searchedValue) {
    let outputRecipe = recipes;
    searchedValue = searchedValue.toLowerCase();

    if (searchedValue !== null) {
        outputRecipe = outputRecipe.filter((recipe) => {
            if (recipe.name.toLowerCase().includes(searchedValue)) return true;

            const checkInIngredients = recipe.ingredients.filter(
                (ingredient) => {
                    if (
                        ingredient.ingredient
                            .toLowerCase()
                            .includes(searchedValue)
                    )
                        return true;
                    return false;
                }
            );
            if (checkInIngredients.length !== 0) return true;

            if (recipe.appliance.toLowerCase().includes(searchedValue))
                return true;

            const checkInUstensils = recipe.ustensils.filter((ustensil) => {
                if (ustensil.toLowerCase().includes(searchedValue)) return true;
                return false;
            });
            if (checkInUstensils.length !== 0) return true;

            return false;
        });
    }
    displayRecipes(outputRecipe);
}

export default search;
