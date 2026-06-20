const menu = document.querySelector(".header__menu");

menu?.addEventListener("click", () => {
    const isExpanded = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", `${!isExpanded}`);
});
