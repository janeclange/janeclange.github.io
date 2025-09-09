const pubsButton = document.getElementById("pubs-button");
const pubsMenu = document.getElementById("pubs-menu");
const selButton = document.getElementById("selected-button");
const selMenu = document.getElementById("selected-menu");

function wireToggle(button, menu) {
    if (!button || !menu) return;
    const menuId = menu.id || "";
    button.setAttribute("aria-controls", menuId);
    button.setAttribute("aria-expanded", "false");
    button.addEventListener("click", () => {
        const isHidden = menu.classList.toggle("hidden");
        button.setAttribute("aria-expanded", String(!isHidden));
    });
}

wireToggle(pubsButton, pubsMenu);
wireToggle(selButton, selMenu);
