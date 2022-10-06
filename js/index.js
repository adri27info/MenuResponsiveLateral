const menu = document.getElementById("menu");
const btnAbrirMenu = document.getElementById("btnAbrirMenu");
const body = document.getElementById("body");

btnAbrirMenu.addEventListener("click", abrirMenu);
window.addEventListener("resize", borrarClaseMenu);

function borrarClaseMenu(e) {
  if (e.target.innerWidth > 600) {
    if (menu.getAttribute("class").includes("mostrar")) {
      menu.classList.remove("mostrar");
    }
    if (
      body.getAttribute("class") !== null &&
      body.getAttribute("class").includes("empujar")
    ) {
      body.classList.remove("empujar");
    }
  }
}

function abrirMenu() {
  if (window.innerWidth <= 600) {
    menu.classList.toggle("mostrar");
    if (menu.getAttribute("class").includes("mostrar")) {
      body.classList.add("empujar");
    } else {
      body.classList.remove("empujar");
    }
  }
}
