import search from "./search.js";
const searchBar = document.querySelector("#search");

searchBar.addEventListener("input", () => {
    search(searchBar.value);
});
