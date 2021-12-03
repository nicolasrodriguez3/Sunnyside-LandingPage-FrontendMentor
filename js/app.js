const $boton = document.querySelector(".burger");
const $menu = document.querySelector(".nav-header-mobile");
$boton.addEventListener("click", abrirMenu);

function abrirMenu() {
	$menu.classList.toggle("show");
}
