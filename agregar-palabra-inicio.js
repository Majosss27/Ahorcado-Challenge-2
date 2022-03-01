var listaPalabras = ["DROMEDARIO", "ALURA", "PROGRAMACION", "OFENSA", "JAVASCRIPT", "CORRECCION", "SINONIMO", "ANTONIMO", "ADJETIVO"];
var inpPalabra = document.querySelector("#input-nueva-palabra");
var btnAgregar = document.querySelector("#nueva-palabra");

btnAgregar.addEventListener("click", function(){
    agregarPalabra();
});

function agregarPalabra() {
 
    var palabra = inpPalabra.value.toUpperCase().trim();
          if (palabra =="" || palabra == null) {
        alert("Campo de texto vacío");
        inpPalabra.focus();
        return;
    }
    
    if (listaPalabras.indexOf(palabra) >= 0 ) {
        alert("Palabra existente en la base de datos");
        inpPalabra.focus();
        return;
    }
    if (validarPalabra(palabra)) {
        listaPalabras.push(palabra);
        alert("Palabra agregada")
        inpPalabra.focus();
    }
}
function validarPalabra(palabra) {
    var exito  = true;
    var palabra = palabra.toUpperCase();
    for (let i = 0; i < palabra.length; i++) {
        var codigo = palabra[i].charCodeAt(0);

        if( !(codigo > 64 && codigo < 91) || palabra.trim().length == 0) {
            alert("Campo de texto vacío y/o con caracteres no permitidos!!!");
            exito = false;
            break;
        }

    }
    return exito;
}


