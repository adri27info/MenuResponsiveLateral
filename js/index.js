const menu = document.getElementById("menu");
const btnAbrirMenu = document.getElementById("btnAbrirMenu");
const contenedorNav = document.getElementById("contenedorNav");
const datos = document.getElementById("datos");

btnAbrirMenu.addEventListener("click", abrirMenu);
window.addEventListener("resize", borrarClaseMenu);

function borrarClaseMenu(e) {
  if (e.target.innerWidth > 600) {
    if (menu.getAttribute("class").includes("mostrar")) {
      menu.classList.remove("mostrar");
    }
    if (contenedorNav.getAttribute("class").includes("empujar")) {
      contenedorNav.classList.remove("empujar");
      datos.classList.remove("empujar");
    }
  }
}

function abrirMenu() {
  if (window.innerWidth <= 600) {
    menu.classList.toggle("mostrar");
    if (menu.getAttribute("class").includes("mostrar")) {
      contenedorNav.classList.add("empujar");
      datos.classList.add("empujar");
    } else {
      contenedorNav.classList.remove("empujar");
      datos.classList.remove("empujar");
    }
  }
}
