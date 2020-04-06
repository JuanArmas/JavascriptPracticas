/*
Diseñar el programa de la figura con las siguientes condiciones:
a. estará contenido en un div
b. aprovechando el burbujeo de sucesos se controlarán los eventos al bajar
 tecla, al subir botón ratón y al hacer doble clic
c. al bajar botón ratón se cambia el color de fondo del botón seleccionado 
a orchid siempre que no sea rojo
d. al subir botón ratón se cambia el color de fondo del botón seleccionado
 a skyblue siempre que no sea rojo
e. Al hacer doble clic se cambia el color de fondo del botón seleccionado 
a rojo siempre que ya no lo sea, se establece a coral el color de fondo del
 texto correspondiente a dicho botón y se copia dicho texto en el textarea
*/

var buttonAll = document.querySelectorAll("button");
var texAreaBubble = document.getElementById("textABubble");
var poema = [
  "\n1\nCon diez cañones por banda,\nviento en popa a toda vela,\nno corta el mar, sino vuela\nun velero bergantín;",
  "\n\n2\nbajel pirata que llaman,\npor su bravura, el Temido,\nen todo mar conocido\ndel uno al otro confín.",
  "\n\n3\nLa luna en el mar riela,\nen la lona gime el viento\ny alza en blando movimiento\nolas de plata y azul;",
  "\n\n4\ny va el capitán pirata,\ncantando alegre en la popa,\nAsia a un lado, al otro Europa,\ny allá a su frente Estambul;\n\n(...)\nCanción del pirata\n(José de Espronceda)"
];
mostrarPoema = [];
buttonAll.forEach(element => {
  element.addEventListener("mouseover", e => {
    if (e.currentTarget.style.backgroundColor != "red") {
      e.currentTarget.style.backgroundColor = "orchid";
      if (e.currentTarget.className == "classSubmit") {
        e.currentTarget.style.backgroundColor = "orangered";
      }
    }
    element.addEventListener("click", e => {
      if (e.currentTarget.style.backgroundColor != "red") {
        e.currentTarget.style.backgroundColor = "skyblue";
      }
      element.addEventListener("dblclick", e => {
        if (e.currentTarget.style.backgroundColor != "red") {
          e.currentTarget.style.backgroundColor = "red";
          e.currentTarget.nextElementSibling.style.backgroundColor = "coral"; //nextElementSibling --> el siguiente elemento que le va a la zaga

          mostrarPoema[element.value] = (poema[element.value]);
          texAreaBubble.textContent = "";
          mostrarPoema.forEach((valor) => {
            texAreaBubble.textContent += valor;
          });
        }
      });
    });
  });
});
