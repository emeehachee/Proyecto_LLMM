document.addEventListener("DOMContentLoaded", function() {

    const botones = document.querySelectorAll(".pedir-btn");

    botones.forEach(function(boton) {
        boton.addEventListener("click", function(e) {
            alert("El plato ha sido añadido al carrito");
        });
    });

});