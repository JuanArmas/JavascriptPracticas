// Diseñar un programa que disponga de un único botón
// denominado PULSA.Cuando el usuario desee pulsarlo el botón se
// desplazará a la izquierda y arriba un valor aleatorio.Si se consigue
// alcanzarlo se visualizará un cuadro alert con la leyenda “Me pillaste”.

var imgElement = document.getElementById("img"); //elemento
var posicionElemento = imgElement.getBoundingClientRect(); // posicion elemento en el body (img.top, img.right, img.bottom, img.left)

imgElement.addEventListener("mouseover", movimiento);
function movimiento() {
  var x = Math.round(Math.random() * 900) + "px";
  var y = Math.round(Math.random() * 500) + "px";
  while (imgElement.style.top - y <= 100 || imgElement.style.left - x <= 100) {
    x = Math.round(Math.random() * 900) + "px";
    y = Math.round(Math.random() * 500) + "px";
  }
  var imgAleatoria = Math.round(Math.random() * 2 + 1);
  imgElement.style.top = y;
  imgElement.style.left = x;
  imgElement.src = `imgEsquiva/esquivar${imgAleatoria}.png`;
}

imgElement.addEventListener("click", atrapado);

function atrapado() {
  imgElement.src = `imgEsquiva/esquivar4.png`;
  // alert("buff, me pillaste compadre");
}
