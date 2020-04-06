//******************INICIO EJ-4_2-AHORCADO******************************
// Juego para realizar entre dos usuarios.El primer usuario escribirá
// la palabra a adivinar en un control tipo password(input type = "password").
// Cuando dicho control pierda el foco, el programa visualizará una
// letra de ayuda escogida aleatoriamente entre las letras de la palabra
// elegida.
// Si la letra se repite se presentará tantas veces como esté presente.
// El resto de las letras se marcará con guiones bajos, por ejemplo _A_A__A,
//  suponiendo que se haya escrito PALABRA y que haya salido elegida la
//  letra A.A continuación el otro usuario comenzará su elección en otro
//  control de edición(input type = "text") que solo acepte una letra.
// Dicha letra se presentará en mayúsculas aunque haya sido tecleada
// en minúsculas.El programa irá sustituyendo los guiones por las letras
// acertadas o bien irá visualizando las correspondientes imágenes de error
//  hasta que se acierte la palabra o se completen los errores admitidos.
//********************************************************************************************************************//
//                                              NOTAS:                                                                //
//      1- CONTROLAR EL INTRODUCIR CARACTERES ESPECIALES APARTE DEL "_"                                               //
//      4- CONTROLAR EL FIN DE PARTIDA VICTORIOSO, NO FINALIZA SIMULTANEAMENTE                                        //
//                                                                                                                    //
//********************************************************************************************************************//

var validadorPalabAhorc = /^[\w ñ (á|é|í|ó|ú) ]{2,15}$/gi;
var palabraAAveriguarAhorc = "";
var introPal = document.querySelector("#introPalabra");
var introLetr = document.querySelector("#introLetras");
var muestraDescubrirPalabra1 = document.querySelector("#idPAhorcado1");
var muestraDescubrirPalabra3 = document.querySelector("#idPAhorcado3");
var arrayPalabraAAveriguar = "";
var contador = 1;
var arrayPalabraDescubierta = []; // será el array inicialmente contenedor de guionesBajos que serán sustituidos por los caracteres correctos
var arrayTotalPalabrasIntroducidas = []; // será el sumidero de palabras, correctas o no para filtrar las demás
var mostrarImgAhorcado = document.querySelector("#idImgAhorcado");
introPal.addEventListener("keyup", e => {
  if (e.keyCode === 13) {
    if (introPal.value.match(validadorPalabAhorc)) {
      palabraAAveriguarAhorc = introPal.value;

      arrayPalabraAAveriguar = palabraAAveriguarAhorc.split("");
      var indiceLetraAleatoria = ( // obtenemos el indice de la letra de forma dinámica
        Math.random() * arrayPalabraAAveriguar.length
      ).toFixed();
      var letraAleatoria = arrayPalabraAAveriguar[indiceLetraAleatoria]; // en esta variable recogemos la letra que encontramos gracias al indice aleatorio

      for (var i = 0; i < arrayPalabraAAveriguar.length; i++) {
        if (arrayPalabraAAveriguar[i] == letraAleatoria) {
          arrayPalabraDescubierta[i] = letraAleatoria.toUpperCase();
        } else {
          arrayPalabraDescubierta[i] = "__";
        }
      }

      introLetr.removeAttribute("disabled", "");
      introPal.setAttribute("disabled", "");
      mostrarImgAhorcado.style.backgroundImage = `url('img_ahorcado/ahorcado1.png')`;
    } else {
      e.preventDefault(); //en teoria previene el comportamiento natural del evento, en este caso, el pulsar el enter (keyCode===13),
      alert("Por favor, introduce una palabra");
    }
    muestraDescubrirPalabra1.textContent = `${arrayPalabraDescubierta.join(
      " "
    )}`; //el join() muestra el string del array y como elemento separador será el que indiquemos entre los paréntesis
  }
});

introLetr.addEventListener("keyup", e => {
  var palabraAdivinada = arrayPalabraDescubierta.join("");
  if (e.keyCode === 13) {
    if (
      palabraAdivinada.toUpperCase() == palabraAAveriguarAhorc.toUpperCase()
    ) {
      //este if no va aqui, irá a la par que el mensaje de acierto, linea 96
      introPal.setAttribute("disabled", "");
      introLetr.setAttribute("disabled", "");

      muestraDescubrirPalabra3.textContent = `Enhorabuena, has ganado!!! efectivamente la palabra era ${palabraAdivinada}`;
    } else {
      if (introLetr.value != "") {
        if (
          palabraAAveriguarAhorc.indexOf(introLetr.value) != -1 &&
          contador < 7
        ) {
          if (!arrayTotalPalabrasIntroducidas.includes(introLetr.value)) {
            arrayTotalPalabrasIntroducidas.push(introLetr.value); // Se introduce la letra correcta en el array que hemos creado como diccionario para filtrar las que ya se han usado
            for (var i = 0; i < arrayPalabraAAveriguar.length; i++) {
              //este for recorre la palabra introducida para ser averiguada (con el split la hemos convertido en un array)
              if (
                arrayPalabraAAveriguar[i].toUpperCase() ==
                introLetr.value.toUpperCase()
              ) {
                //verificamos que existe la letra y se introduce en el array de salida sustituyendo el "__" que compone el array inicial de huecos de letras vacios
                arrayPalabraDescubierta[i] = introLetr.value.toUpperCase();
              }
            }

            muestraDescubrirPalabra3.textContent = `¡Correcto!, sigue así, aún te siguen quedando ${7 -
              contador} intentos`;
          } else {
            muestraDescubrirPalabra3.textContent = `Ya has introducido la letra ${introLetr.value} pon otra distinta!!`;
          }

          muestraDescubrirPalabra1.textContent = `${arrayPalabraDescubierta.join(
            " "
          )}`; // esto muestra las pistas de palabras aleatorias iniciales
        } else {
          if (contador < 6) {
            if (!arrayTotalPalabrasIntroducidas.includes(introLetr.value)) {
              arrayTotalPalabrasIntroducidas.push(introLetr.value); // igualmente se introduce la palabra erronea aumentando el diccionario para filtrar
              muestraDescubrirPalabra3.textContent = `Fallaste, Procura atinar mejor, sólo te quedan ${6 -
                contador} intentos`;
              contador++;
              mostrarImgAhorcado.style.backgroundImage = `url('img_ahorcado/ahorcado${contador}.png')`;
            } else {
              muestraDescubrirPalabra3.textContent = `Ya has introducido la letra ${introLetr.value} pon otra distinta!!`;
            }
          } else {
            muestraDescubrirPalabra3.textContent = `Una lástima, gastaste los 6 intentos. La palabra misteriosa era ${palabraAAveriguarAhorc}, ¡Intentalo de nuevo!`;
            mostrarImgAhorcado.style.backgroundImage = `url('img_ahorcado/ahorcado7.png')`;
            introLetr.setAttribute("disabled", "");
          }
        }
        introLetr.value = "";
      } else {
        alert("Por favor, introduce una letra");
        e.preventDefault();
      }
    } //
  }
});
