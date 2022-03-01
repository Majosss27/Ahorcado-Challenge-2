var canvas = document.getElementById("canvas");
var pincel = canvas.getContext("2d");
var img = new Image();
img.src = "imagen-para-canvas.jpg";

img.onload = function(){
  pincel.drawImage(img, 0, 0, 1000, 530);
}

function dibujarTablero(palabra) {

    xi = 350;
    
    pincel.beginPath();
    pincel.clearRect(0, 0, 1000, 530);
    pincel.width = pincel.width;
    
    pincel.fillStyle = "black";
    pincel.fillRect(50, 480, 75, 35);
    pincel.moveTo(25,580);
    pincel.lineTo(50,540);
    pincel.lineTo(50,580);
    pincel.fill();

    dibujarGuiones(palabra);

}

var inicio = 0;
var ancho = 51;
var xcentro = 460;
var ybase = 460;
var ybaseguion = 510;

function dibujarGuiones(palabra) {
    var factor = Math.floor(palabra.length / 2);
    inicio = xcentro - (factor * ancho );
    var x = inicio;

     for (let i = 0; i < palabra.length; i++) {
         pincel.fillStyle = "black";
         pincel.fillRect(x, ybaseguion, ancho, 5);
         x += ancho + 5; 
     }
}

function dibujarLetraCorrecta(letra) {
    var p = ancho + 5;

    var regexp = RegExp(letra, 'g');
    var repeticiones = palabraAleatoria.match(regexp).length;
    
    var i=0;
    var j=0;
    while (i < repeticiones) {
        if (palabraAleatoria[j] == letra) {
            palabraIngresada[j] = letra;
            ++i;
            var xc = ( j * p ) + inicio;
            pincel.font="30pt Verdana";
	        pincel.fillStyle = "white";
	        pincel.fillText(letra, xc + 5, ybase + 40);
        }
        ++j;
    }
}

var xi = 350;
var yi = 350;

function dibujarLetraIncorrecta(letra) {
    pincel.font="30pt Tahoma";
	pincel.fillStyle = "darkred";
    pincel.fil
	pincel.fillText(letra, xi, yi);
    xi += ancho;
    if (xi > 780) {
        xi = 350;
        yi += 40;
    }
}

function mastil1(){
    pincel.fillStyle = "black";
    pincel.fillRect(75, 250, 20, 250);
}

function mastil2(){
    pincel.fillStyle = "black";
    pincel.fillRect(75, 50, 20, 250);
}

function mastil3(){
    pincel.fillStyle = "black";
    pincel.fillRect(75, 50, 210, 20);
}

function soga(){
    var imagen0 = new Image();
    imagen0.src = "sogaAhorcado.png";
	imagen0.onload = function(){
	    pincel.drawImage(imagen0, 210, 50, 130, 140);
    }
}

function cabeza(){
    var imagen3 = new Image();
    imagen3.src = "cabezaAhorcado.png";
	imagen3.onload = function(){
        pincel.drawImage(imagen3, 139, 137, 71, 40);
    }
}

function cuerpo(){    
    var imagen1 = new Image();
    imagen1.src = "cuerpoAhorcado.png";
	imagen1.onload = function(){
        pincel.drawImage(imagen1, 240, 170, 80, 110);
    }
}

function brazoDerecho(){
    var imagen2 = new Image();
    imagen2.src = "brazoDerecho.png";
	imagen2.onload = function(){
        pincel.drawImage(imagen2, 320, 95, 50, 90);
    }
}

function brazoIzquierdo(){
    var imagen4 = new Image();
    imagen4.src = "brazoIzquierdo.png";
	imagen4.onload = function(){
        pincel.drawImage(imagen4, 150, 175, 90, 50);
    }
}

function pieDerecho(){
    var imagen5 = new Image();
    imagen5.src = "pieDerecho.png";
	imagen5.onload = function(){
        pincel.drawImage(imagen5, 284, 280, 55, 170);
    }
}

function pieIzquierdo(){
    var imagen6 = new Image();
    imagen6.src = "pieIzquierdo.png";
	imagen6.onload = function(){
        pincel.drawImage(imagen6, 193, 280, 80, 170);
    } 
}

function final(){
    pincel.beginPath();
    pincel.fillStyle = "black";   
    pincel.fillRect(275, 150, 10, 70);
}

function limpiarPantalla(){
    pincel.clearRect(0,0,1000,530);
}

function finDelJuego(){
    limpiarPantalla();
    pincel.font="40pt Arial";
	pincel.fillStyle = "red";
	pincel.fillText("Fin del juego, la palabra era: ", 150, 200);
    pincel.font="50 pt Courrier"
    pincel.fillText(palabraAleatoria, 200, 280);
}

function juegoGanado(){
    pincel.font="40pt Verdana";
    pincel.fillStyle = "green";
    pincel.fillText("¡¡¡Felicidades, ganaste!!!", 350, 180);
}

function dibujarAhorcado(intentos) {

    switch (intentos) {
        case 1:
            mastil1();
            break;
        case 2:
            mastil2();
            break;
        case 3:
            mastil3();
            break;
        case 4:
            soga();
            break;
        case 5:
            cuerpo();
            break;
        case 6:
            brazoDerecho();
            break;
        case 7:
            brazoIzquierdo();
            break;
        case 8:
            cabeza(); 
            break;
        case 9:
            pieDerecho();
            break;
        case 10:
            pieIzquierdo();
            break;
        case 11:
            final();
            finDelJuego();
            break;
        case 12:
            juegoGanado();
            break;    
    }    
}
