// Diseñar una página con tres contenedores de acuerdo al diseño
// de la figura, con el contenedor izquierdo igual que el derecho.El
// botón ESCRIBIR visualizará en el contenedor señalado en el grupo
// de radiobotones(input type =”radio”) el texto escrito en el control
// de edición(input type =”text”).
// El botón del contenedor derecho COMO SE LLAMAN LOS
// MARCOS visualizará en una ventana alert los nombres de los tres
// contenedores.

var pContIzquierdo = document.getElementById("pContIzquierdo");
var pContDerecho = document.getElementById("pContDerecho");
var textoMarco = document.getElementById("textoMarco");
var radioContenedorMarco = document.getElementsByName("radioContenedorMarco");
var contH3Iz = document.getElementById("contH3Iz");
var contH3Der = document.getElementById("contH3Der");

var escribirMarco = document.getElementById("escribirMarco");
escribirMarco.addEventListener("click", mostrarDatos);

var preguntaContenedores = document.getElementById("preguntaContenedores");
preguntaContenedores.addEventListener("click", mostrarNombresCont);

function mostrarNombresCont() {
  alert(`
  - ${contH3Iz.textContent}
  - ${contH3Der.textContent}
  `);
}

function obtenerDatosRadio() {
  var marco;
  for (var i = 0; i < radioContenedorMarco.length; i++) {
    if (radioContenedorMarco[i].checked) {
      marco = radioContenedorMarco[i].value;
    }
  }
  return marco;
}

function mostrarDatos() {
  var marco = obtenerDatosRadio();
  pContIzquierdo.textContent = "";
  pContDerecho.textContent = "";
  if (marco == "izquierdo" && textoMarco.value != "") {
    pContIzquierdo.textContent = `${textoMarco.value}`;
    contH3Iz.style.display = "none";
    contH3Der.style.display = "block";
  } else if (marco == "derecho" && textoMarco.value != "") {
    pContDerecho.textContent = `${textoMarco.value}`;
    contH3Der.style.display = "none";
    contH3Iz.style.display = "block";
  } else {
    alert(
      "Por favor, escribe algo y selecciona un contenedor donde mostrar el texto"
    );
  }
}
