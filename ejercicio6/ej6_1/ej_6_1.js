// Listas de varios niveles
// Diseñar un programa que disponga de dos listas(select) y un textarea.
// La primera lista dispondrá de las siguientes opciones: a) Vídeo.b)
// Discos.c) Juegos y la segunda lista dispondrá de opciones distintas
// según la opción seleccionada en la primera, así:
// Si Vídeos -> a) Humor.b) Drama.c) Ficción.d) Otros
// Si Discos -> a) Pop.b) Rock.c) Latino.d) Otros.
// Si Juegos -> a) Simulador.b) Rol.c) Medieval.d) Otros.
// El textarea visualizará un texto en función de las opciones elegidas, por ejemplo:
// Texto de Juego -> Simulador.
var servicioVideoClub = document.getElementById("servVideoClub");
var generoDisco = document.getElementById("genDisco");
var generoJuego = document.getElementById("genJuego");
var generoVideo = document.getElementById("genVideo");
var muestraTexto = document.getElementById("muestraTexto");

var divGeneroDisco = document.getElementById("divGenDisco");
var divGeneroJuego = document.getElementById("divGenJuego");
var divGeneroVideo = document.getElementById("divGenVideo");

function obtenerDatosSelectIntro() {
  var opcionSeleccionada =
    servicioVideoClub.options[servicioVideoClub.selectedIndex].text;
  if (opcionSeleccionada == "Discos") {
    divGeneroDisco.style.display = "block";
    divGeneroJuego.style.display = "none";
    divGeneroVideo.style.display = "none";
  } else if (opcionSeleccionada == "Juegos") {
    divGeneroDisco.style.display = "none";
    divGeneroJuego.style.display = "block";
    divGeneroVideo.style.display = "none";
  } else if (opcionSeleccionada == "Videos") {
    divGeneroDisco.style.display = "none";
    divGeneroJuego.style.display = "none";
    divGeneroVideo.style.display = "block";
  }
}

function opcionDiscos() {
  var opcionSeleccionada = generoDisco.options[generoDisco.selectedIndex].value;
  if (opcionSeleccionada == "Metal_Epico") {
    muestraTexto.innerHTML = "Blind Guardian, una oda a Tolkien";
  } else if (opcionSeleccionada == "Trash_Metal") {
    muestraTexto.innerHTML = "Un buen ejemplo del género es Metállica";
  } else if (opcionSeleccionada == "Folk_Metal") {
    muestraTexto.innerHTML = "Buena elección, Otyg es mi recomendación";
  } else if (opcionSeleccionada == "Black_Metal") {
    muestraTexto.innerHTML = "Escucha Mayhem, sin dudarlo";
  } else if (opcionSeleccionada == "Cyber_metal") {
    muestraTexto.innerHTML =
      "El 'Du hast' de Rammstein lo dice todo sobre este género";
  }
}

function opcionJuegos() {
  var opcionSeleccionada = generoJuego.options[generoJuego.selectedIndex].value;
  if (opcionSeleccionada == "Rol") {
    muestraTexto.innerHTML = "Baldur´s gate, por ejemplo, viejo pero muy bueno";
  } else if (opcionSeleccionada == "Plataformas") {
    muestraTexto.innerHTML = "Swordigo, sólo pruebalo...";
  } else if (opcionSeleccionada == "Aventura_Grafica") {
    muestraTexto.innerHTML =
      "Si quieres divertirte y reirte a carcajadas, Monkey island";
  } else if (opcionSeleccionada == "E-Sports") {
    muestraTexto.innerHTML = "Buah, fifa, de coches, siempre hay donde elegir";
  } else if (opcionSeleccionada == "Accion") {
    muestraTexto.innerHTML =
      "Con un Call of duty quedarás encantad@ si te gusta el género";
  }
}
function opcionVideos() {
  var opcionSeleccionada = generoVideo.options[generoVideo.selectedIndex].value;
  if (opcionSeleccionada == "Violencia") {
    muestraTexto.innerHTML =
      "Si quieres sangre, 'el fuego de la venganza' es la tuya";
  } else if (opcionSeleccionada == "Romantica") {
    muestraTexto.innerHTML =
      "'50 primeras citas' es una buena comedia romántica";
  } else if (opcionSeleccionada == "Comedia") {
    muestraTexto.innerHTML =
      "'Bienvenidos al norte' es muy buena, y si tienes la suerte de saber francés, recomendado en V.O.";
  } else if (opcionSeleccionada == "Drama") {
    muestraTexto.innerHTML =
      "'Celda 211' cruda como la vida misma, y española!!";
  } else if (opcionSeleccionada == "De Autor") {
    muestraTexto.innerHTML =
      "Love & friendship, interesante propuesta de época";
  }
}
