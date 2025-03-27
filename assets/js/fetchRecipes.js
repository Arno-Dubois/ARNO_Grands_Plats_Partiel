async function fetchRecipe() {
    const response = await fetch("assets/json/recipes.json");
    if (response.ok) {
        const json = response.json();
        return json;
    }
}

const recipes = await fetchRecipe();

export default recipes;
