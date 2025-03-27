import recipes from "./fetchRecipes.js";

const datalist = document.querySelector("#form > datalist");
const input = document.querySelector("#search");

for (const recipe of recipes) {
    const name = document.createElement("option");
    name.value = recipe.name;
    name.innerText = recipe.name;
    datalist.appendChild(name);

    for (const ingredient of recipe.ingredients) {
        const ingredientOption = document.createElement("option");
        ingredientOption.value = ingredient.ingredient;
        ingredientOption.innerText = ingredient.ingredient;
        datalist.appendChild(ingredientOption);
    }

    const applianceOption = document.createElement("option");
    applianceOption.value = recipe.appliance;
    applianceOption.innerText = recipe.appliance;
    datalist.appendChild(applianceOption);

    for (const ustensil of recipe.ustensils) {
        const ustensilOption = document.createElement("option");
        ustensilOption.value = ustensil;
        ustensilOption.innerText = ustensil;
        datalist.appendChild(ustensilOption);
    }
}

// https://codepen.io/iamsidd_j/pen/qBRWNQQ
input.onfocus = function () {
    datalist.style.display = "block";
    input.style.borderRadius = "5px 5px 0 0";
};
for (let option of datalist.options) {
    option.onclick = function () {
        input.value = option.value;
        search(option.value);
        datalist.style.display = "none";
        input.style.borderRadius = "5px";
    };
}

input.oninput = function () {
    currentFocus = -1;
    var text = input.value.toUpperCase();
    for (let option of datalist.options) {
        if (option.value.toUpperCase().indexOf(text) > -1) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    }
};
var currentFocus = -1;
input.onkeydown = function (e) {
    if (e.keyCode == 40) {
        currentFocus++;
        addActive(datalist.options);
    } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(datalist.options);
    } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (datalist.options) datalist.options[currentFocus].click();
        }
    }
};

function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    x[currentFocus].classList.add("active");
}
function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
}
