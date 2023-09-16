const pubsButton = document.getElementById("pubs-button");
const pubsMenu = document.getElementById("pubs-menu");
const selButton = document.getElementById("selected-button");
const selMenu = document.getElementById("selected-menu");

pubsButton.addEventListener("click", () => {
    pubsMenu.classList.toggle("hidden");
});
selButton.addEventListener("click", () => {
    selMenu.classList.toggle("hidden");
});
