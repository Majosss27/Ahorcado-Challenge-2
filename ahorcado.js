var listaPalabras = ["DROMEDARIO", "ALURA", "PROGRAMACION", "OFENSA", "JAVASCRIPT", "CORRECCION", "SINONIMO", "ANTONIMO", "ADJETIVO"];
var letrasIngresadas =[];
var palabraIngresada;
var intentos = 0;

var palabraAleatoria;

var btnIniciar = document.querySelector("#iniciar-juego2");

btnIniciar.addEventListener("click",function(){
    iniciarJuego();
});

function iniciarJuego(){
     intentos = 0;
     letrasIngresadas =[];
     palabraAleatoria = escojerPalabra();

     window.addEventListener("keydown", capturaLetra);
     dibujarTablero(palabraAleatoria);
 }

function escojerPalabra() {

    var I = Math.round(Math.random() * listaPalabras.length);
    I = listaPalabras.length == I ? (I - 1):I;
    palabraAleatoria = listaPalabras[I];
    palabraIngresada = new Array(palabraAleatoria.length);
    return palabraAleatoria;
}

function validarLetra(letraTipeada, codigo) {

    letraTipeada = letraTipeada.toUpperCase();
    var acentos = ['Á','É','Í','Ó','Ú']
    if (codigo > 64 && codigo < 91) {
        if (acentos.indexOf(letraTipeada) < 0 ) {
            if (letrasIngresadas.indexOf(letraTipeada) < 0) {
                return true;    
            }
            
        }
    }
    return false;
}

function coincideLetra(letraTipeada) {

    var coincide = false
    if (palabraAleatoria.indexOf(letraTipeada) >= 0) {
        coincide = true;
    }
    letrasIngresadas.push(letraTipeada);
    return coincide;
}

function capturaLetra(evento) {
    var letraTipeada = evento.key.toUpperCase();
    if (validarLetra(letraTipeada, evento.keyCode) && intentos < 11) {
       
        if(coincideLetra(letraTipeada)){ 
            dibujarLetraCorrecta(letraTipeada); 
            if (palabraAleatoria == palabraIngresada.join("")) {
                intentos = 12;
                dibujarAhorcado(intentos);
            }
        }else{
            dibujarLetraIncorrecta(letraTipeada);
            dibujarAhorcado(++intentos);
        }
    }
}





