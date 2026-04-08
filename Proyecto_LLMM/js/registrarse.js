let enlace = document.getElementById("registro");
let sesion = document.getElementById("iniciarSesion");
let nombre = document.getElementById("nombre");
let contraseña = document.getElementById("password");

enlace.addEventListener("click", () => {
    alert("Sitio en mantenimiento, por favor contacte con atención al cliente");
});

sesion.addEventListener("click", () => {

    if(nombre.value=="" || contraseña.value==""){
        alert("Datos no validos");
    }else{
        alert("Usuario logeado correctamente!");
    }
});