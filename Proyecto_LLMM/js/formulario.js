let mensajeArea = document.getElementById("mensaje");
let contadorTexto = document.getElementById("cuentaCaracteres");

mensajeArea.addEventListener("input", () => {
    let max = 500;
    let actuales = mensajeArea.value.length;
    let restantes = max - actuales;

    contadorTexto.textContent = "Caracteres restantes: " + restantes;

    if(restantes<=50){
        contadorTexto.style.color = "red";
    }
});