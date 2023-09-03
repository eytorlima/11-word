const closeTutorial = document.querySelector(".close");
const openTutorial = document.querySelector(".tutorial");
const menu = document.querySelector(".menu");

openTutorial.addEventListener("click", () => {
    menu.classList.add("open");
});

closeTutorial.addEventListener("click", () => {
    menu.classList.remove("open");
});
