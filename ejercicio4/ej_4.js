//******************INICIO EJ-4_2-APARCAMIENTO**************************
//El usuario introducirá la fecha y hora de entrada del vehículo al
//aparcamiento en el formato solicitado. El programa comprobará que
//se trata de una fecha y hora correcta y anterior a la fecha y hora
//del sistema.
//Cuando se pulse el botón PRECIO el programa visualizará la
//fecha y hora del sistema y calculará el precio de estancia en
//el aparcamiento teniendo en cuenta las siguientes consideraciones:
// La primera hora o fracción se facturará a 1,2 € y
// las restantes horas o fracciones a razón de 1,5 €.
// Se facturará como máximo 20 euros por cada día completo
// de estancia.
//********************************************************************************************************************//
//                                              NOTAS:                                                                //
//      1- OBTENER CANTIDAD DE DIAS TRANSCURRIDOS Y CANTIDAD DE HORAS DEL DIA ACTUAL                                  //
//      2- CAPAR EL PRECIO A 20 EN UN SOLO DIA (O 13 HORAS)??                                                         //
//      3-
//                                                                                                                    //
//********************************************************************************************************************//
// var totalHorashoy = horas - dias * 24; // recoge las horas inferiores a 24h

if (document.querySelector("#precioParking")) {
  var btnPrecioParking = document.querySelector("#precioParking");
  btnPrecioParking.addEventListener("click", apartado4_2);
}

var pFechMostrar = "";
var fecha = "";
if (document.querySelector("#salFecha")) {
  pFechMostrar = document.querySelector("#salFecha");
  fecha =
    new Date().getDate() +
    "/" +
    (new Date().getMonth() + 1) +
    "/" +
    new Date().getFullYear() +
    " " +
    new Date()
      .getHours()
      .toString()
      .padStart(2, "0") +
    ":" +
    new Date()
      .getMinutes()
      .toString()
      .padStart(2, "0");
  //año actual^ impreso en el input de salidav
}
pFechMostrar.textContent = `${fecha}`;

const salFechOperar =
  new Date().getFullYear() +
  "-" +
  (new Date().getMonth() + 1) +
  "-" +
  new Date().getDate() +
  "T" +
  new Date()
    .getHours()
    .toString()
    .padStart(2, "0") +
  ":" +
  new Date()
    .getMinutes()
    .toString()
    .padStart(2, "0");
var introFech = document.querySelector("#introFecha");

function apartado4_2() {
  var precioFinal = document.querySelector("#pPrecio");
  if (introFech.value < salFechOperar) {
    var fechInic = new Date(salFechOperar).getTime();
    var fechFin = new Date(introFech.value).getTime();
    var difFech = fechInic - fechFin;
    var horas = Math.floor(difFech / (1000 * 60 * 60));
    // (1000*60*60)--> milisegundos -> segundos -> minutos -> horas (*24 si queremos dias)

    if (horas > 13) {
      if (horas > 24) {
        var sumaHoras = Math.floor(horas / 24);
        var totalHoras = sumaHoras * 20;
        precioFinal.textContent = ` Total horas aparcado: ${horas}; Saldo a pagar: ${totalHoras.toFixed(
          2
        )}€`;
      } else {
        precioFinal.textContent = ` Total horas aparcado: ${horas}; Saldo a pagar: 20€`;
      }
    } else {
      var precioTotal = 0;
      if (horas != 0) {
        precioTotal = (horas - 1) * 1.5 + 1.2;
        precioFinal.textContent = ` Total horas aparcado: ${horas}; Saldo a pagar: ${precioTotal.toFixed(
          2
        )}€`;
      } else {
        precioFinal.textContent = `Sales gratis de la cárcel, estooo... del parking, quiero decir`;
      }
    }
  } else {
    alert(
      "Por favor, Introduce un día y hora correcto... que sea inferior a " +
        fecha
    );
  }
}

//***********************FIN EJ-4_2*************************************
//
//
//
//
//
//
//
//
//******************INICIO EJ-4_3-VECTORES******************************
//El usuario introducirá una serie de elementos
//(que cada uno elija el tipo de datos). Visualizar el vector
// desordenado en pantalla, luego ordenado y también con sus
// elementos al revés.

if (document.querySelector("#verVector")) {
  var btnVerVector = document.querySelector("#verVector");
  btnVerVector.addEventListener("click", apartado4_3_1);
}
var regExpre = /([\w\,\/\#\-\:]+)/gi;
// s,d-F G#H-3:4:5,F

const aDatos = document.querySelector("#datosVector");
function apartado4_3_1() {
  var datos = aDatos.value.split(/,|-|\/|#|@|_|:/);
  var verVMsg1 = document.querySelector("#pVerMsg1");
  verVMsg1.innerHTML = "El vector actual es: " + datos;
}

if (document.querySelector("#sortVector")) {
  var btnSortVector = document.querySelector("#sortVector");
  btnSortVector.addEventListener("click", apartado4_3_2);
}

function apartado4_3_2() {
  var datos = aDatos.value.split(/,|-|\/|#|@|_|:/);
  var ordenarV = document.querySelector("#pSortVector");
  var cmp = (a, b) => a.localeCompare(b);
  datos.sort(); //ordenar primero
  datos.sort(cmp); //reordenar despues
  ordenarV.innerHTML = "El vector ordenado: " + datos;
}

if (document.querySelector("#invertVector")) {
  var btnInvertirVector = document.querySelector("#invertVector");
  btnInvertirVector.addEventListener("click", apartado4_3_3);
}

function apartado4_3_3() {
  var datos = aDatos.value.split(/,|-|\/|#|@|_|:/);
  var verVMsg3 = document.querySelector("#pVerMsg3");

  verVMsg3.innerHTML = "El vector invertido: " + datos.reverse();
}

if (document.querySelector("#invertVectorOrdenado")) {
  var btnOrdSortVector = document.querySelector("#invertVectorOrdenado");
  btnOrdSortVector.addEventListener("click", apartado4_3_4);
}

function apartado4_3_4() {
  var datos = aDatos.value.split(/,|-|\/|#|@|_|:/);
  var verVMsg4 = document.querySelector("#pVerMsg4");
  var cmp = (a, b) => a.localeCompare(b);
  datos.sort(); //ordenar primero
  datos.sort(cmp); //reordenar despues
  verVMsg4.innerHTML = "El vector ordenado e invertido: " + datos.reverse();
}
//*************************FIN EJ-4_3************************************
//
//
//
//
//
//
//
//
//******************INICIO EJ-4_4-VALIDAR EMAIL**************************
//El usuario introducirá un correo electrónico, se validará usando
//expresiones regulares. Volver a solicitarlo hasta que sea correcto.
if (document.querySelector("#validar")) {
  var btnVerificarMail = document.querySelector("#validar");
  btnVerificarMail.addEventListener("click", apartado4_4);
}

function apartado4_4() {
  var verificacion = document.querySelector("#mostrarVerificacion");
  var mailStr = document.querySelector("#mailAVerificar").value;

  const validatorEmail = /^[\w-]+@[a-zA-Z0-9-]+.[a-zA-Z]{2,3}$/gi;

  if (mailStr.match(validatorEmail)) {
    verificacion.textContent = `El correo ${mailStr} es válido! `;
  } else {
    verificacion.textContent = `El correo ${mailStr} tiene una estructura no permitida `;
  }
}

//*************************FIN EJ-4_4************************************
