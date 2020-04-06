const IMG = [
  //ruta de la imagenes
  "img/MonedaCara.png",
  "img/MonedaCruz.png"
];
const CAMBIO_IMG = 100; // tiempo que tarda en cambiar las imagenes, velocidad con la que cambian em milesimas de segundo
var posImgActual = 0;
var imagen = document.querySelector("#imagenTMoneda");
var botonJugar = document.querySelector("#jugarTMoneda");
var textTMoneda1 = document.querySelector("#txtPTMoneda1");
var textTMoneda2 = document.querySelector("#txtPTMoneda2");
// var bodyTag= document.querySelector('#body'); //intentar poner un gif de fondo
var tiempoAleatorio = Math.floor(Math.random() * (2000 - 1000)) + 2000;
// tiempoAleatorio será el valor de tiempo que condicionara el setTimeout en su segundo parametro sera aleatorio
var intervalo;

botonJugar.addEventListener("click", jugarIntervalo);
// Funciones
/**
 * Activa el carrusel
 */
function jugarIntervalo() {
  intervalo = setInterval(pasarFoto, CAMBIO_IMG); //activa el carrusel de forma infinita
  // Desactivamos los botones de control
  botonJugar.setAttribute("disabled", true); //desactiva el botón al iniciar partida(al accionar dicho botón)
  setTimeout(stopCarrusel, tiempoAleatorio); // corta el carrusel por medio de un tiempo que se le añade de forma aleatoria para dar la falsa ilusión de aleatoriedad.

  var optCara = document.querySelector("#cara").checked; //pone todos los typeRadio en true cuando son seleccionados y false cuando no.
  var optCruz = document.querySelector("#cruz").checked;
  setTimeout(() => {
    // ejecuta la verificacion de resultados 10 milesimas de segundo despues de cortar el carrusel
    botonJugar.removeAttribute('disabled',"");
    verificarResult(optCara, optCruz);
  }, tiempoAleatorio + 10);
}
// verifica que radio button está en true y entra en el mismo.
// una vez dentro, compara la posicion "aleatoria" donde se pare el carrusel e imprime el mensaje adecuado
function verificarResult(optCara, optCruz) {
  if (optCara) {
    textTMoneda1.textContent = "Has elegido Cara";
    if (posImgActual == 0) {
      textTMoneda2.textContent = "Y ha salido Cara, Vaya suerte, Has ganado!!!";
    } else if (posImgActual == 1) {
      textTMoneda2.textContent =
        "Oooooo! Ha salido Cruz, mala suerte compañer@";
    }
  } else if (optCruz) {
    textTMoneda1.textContent = "Has elegido Cruz";
    if (posImgActual == 1) {
      textTMoneda2.textContent = "Y ha salido Cruz, Vaya suerte, Has ganado!!!";
    } else if (posImgActual == 0) {
      textTMoneda2.textContent =
        "Oooooo! Ha salido Cara, mala suerte compañer@";
    }
  } else {
    textTMoneda1.textContent = "Buff... Pero vamos a ver...";
    textTMoneda2.textContent =
      "Vamos a hablar con calma... ¿Qué es lo que ocurre? sólo tienes que elegir una de dos opciones.. no es tan dificil, ánimo que tu puedes!!";
    //bodyTag.innerHTML = "<body background='P_P_T/fire.gif'></body>";
  }
}

function stopCarrusel() {
  clearInterval(intervalo);
}

/**
 * Funcion que cambia la foto en la siguiente posicion
 */
function pasarFoto() {
  if (posImgActual >= IMG.length - 1) {
    posImgActual = 0;
  } else {
    posImgActual++;
  }
  seleccionarImagen();
}

/**
 * Funcion que actualiza la imagen dependiendo de posImgActual
 */
function seleccionarImagen() {
  imagen.style.backgroundImage = `url(${IMG[posImgActual]})`;
}
seleccionarImagen();
