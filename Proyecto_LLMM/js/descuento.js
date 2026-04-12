let input = document.getElementById('descuento');
let boton = document.getElementById('botonDescuento');
let precio = document.getElementById('precioTotal');
let mensaje = document.getElementById('mensajeAplicado');

boton.addEventListener('click', () => {
    if (input.value === "EATUP10") {
        let precioActual = 40.75;
        let calculo=0;

        calculo = precioActual - (precioActual / 10)
        precio.textContent =calculo.toFixed(2)+ "€"; 

        mensaje.textContent = "Descuento aplicado ✅";

        input.disabled = true;
    } else {
        mensaje.textContent = "Descuento no valido ❌";
    }
});