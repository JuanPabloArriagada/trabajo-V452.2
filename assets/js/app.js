document.addEventListener("DOMContentLoaded", function () {
    var numberCart = document.getElementById("empire-cart__number");
    var contenedorCart = document.getElementById("empire-cart-container");
    // Función para mostrar u ocultar el contenedor
    function toggleContenedor() {
        if (contenedorCart.style.display === "none") {
            contenedorCart.style.display = "flex";
        } else {
            contenedorCart.style.display = "none";
        }
    }
    // Ocultar el contenedor al cargar la página
    contenedorCart.style.display = "none";

    // Agregar evento de clic a la numberCart
    numberCart.addEventListener("click", toggleContenedor);
});