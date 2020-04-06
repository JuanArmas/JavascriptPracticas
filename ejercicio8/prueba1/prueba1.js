// Diseñar una web con imágenes de baja resolución de cuadros
// de pintores grancanarios.
// Al pulsar sobre uno de ellos se llamará a la página
// Miniaturas2.htm pasándole el nombre del archivo de alta resolución
// del cuadro pulsado que se visualizará en la segunda página con el
// formato mostrado en la figura.
var arrayNameImg = [
  "Damaso1",
  "Felo1",
  "Felo2",
  "lujan1",
  "Nestor1",
  "Nestor2",
  "Nestor3",
  "Nestor4",
  "Padron1",
  "Padron2"
];
//tener en cuenta que para cambiar de una imagen de una resolucion a otra sera cogiendo el valor del array y ponendole .gif(baja) o .jpg(alta) ej. arrayNameImg[i]+".gif" ||+".jpg"
var ventanaImgCompl = () =>
  window.open(
    "ventanaAltaRes.html",
    "VENTANA IMAGENES COMPLETAS",
    `
  height=550,
  width=600,
  left=600,
  location=0,
  menubar=0,
  resizable=0,
  scrollbars=0,
  status=0,
  titlebar=0,
  top=50`
  );
var imgAll = document.querySelectorAll("img");
var divImgGrande = document.getElementById("divImgAltRes");
imgAll.forEach((element, index) =>
  element.addEventListener("click", () => abrirVentana(index))
);

function abrirVentana(index) {
  ventanaImgCompl();
  if (document.getElementById("divImgAltRes")) {
    divImgGrande.setAttribute("src", `Arte/${arrayNameImg[index]}.jpg`);
  }
}
