/*
Se diseñará un formulario como el de la imagen y al pulsarse el botón
 VALIDA FORMULARIO se realizarán las siguientes comprobaciones:
 Ningún cuadro de texto (input type=”text”) quedará vacío
 En nombre y apellidos solo se admitirán caracteres alfabéticos tanto en 
mayúsculas como en minúsculas
 El expediente será un número natural en el 
rango 340000000000 a 349999999999
 La edad otro número natural en el rango 18 a 120
 Fecha de permiso una fecha válida sin especificar rango
 La matrícula responderá al patrón 
"NNNN[BCDFGHJKLMNPQRSTVWXYZ][BCDFGHJKLMNPQRSTVWXYZ] [BCDFGHJKLMNPORSTVWXYZ]"
 Importe entero o real sin signo
 Mes de expiración entero en el rango 1 a 12
 Año de expiración entero en el rango 2001 a 2100
 Se realizará la validación de la tarjeta para las opciones a)
 Genérica. b) American Express. c) Diner’s Club. e) Master Card y f) Visa.
*/

// CONTROLAR LA FUNCION VALIDAR AÑO DE EXPIRACIÓN E IMPORTE, CREO QUE NO FUNCIONA O NO IMPRIME EL CONSOLE LOG

var inputNombre = document.getElementById("nombreValidacion");
var inputApellido1 = document.getElementById("Apellido_1_Validacion");
var inputApellido2 = document.getElementById("Apellido_2_Validacion");
var inputEdad = document.getElementById("EdadValidacion");
var inputMatricula = document.getElementById("MatriculaValidacion");
var inputTarjeta = document.getElementById("tarjetaValidacion");
var inputMes = document.getElementById("mesExpiracionValidacion");
var inputExpediente = document.getElementById("numExpedienteValidacion");
var inputFechaPermiso = document.getElementById("fechaPermisoValidacion");
var inputImporteValidacion = document.getElementById("importeValidacion");
var selectTipoTarjeta = document.getElementById("tipoTarjetaValidacion"); //verificar si es getElementById o getElementsByName, es un select
var inputAnioExp = document.getElementById("anioExpiracionValidacion");
var comprobar = document.getElementsByName("comprobar");

function validarCamposNoVacios() {
  var validarCamposVacios = /^[\s]$/gi;
  if (!valorInput.match(validarCamposVacios)) {
    //hacer algo
  } else {
    //mensaje de error al estar un campo vacio
  }
}
function validarNomApell() {
  var validarNomApell = /^[a-zA-Zÿ\u00f1\u00d1]*$/gi;
  var arrayNomApell = [];
  for (var i = 0; i < comprobar.length; i++) {
    if (comprobar[i].value.match(validarNomApell)) {
      arrayNomApell.push(comprobar[i].value);

      console.log("los datos estan en el array ->", arrayNomApell);
    } else {
      comprobar[i].setAttribute("style", "background: red;");
    }
  }
  return arrayNomApell;
}

function validarExpediente() {
  var validarExpediente = /^[3][4][0-9]{10}$/gi;
  var numExpedienteIntro = inputExpediente.value;
  if (numExpedienteIntro.match(validarExpediente)) {
    console.log("Entro NumExpediente y es correcto -->", numExpedienteIntro);
    return numExpedienteIntro;
  } else {
    inputExpediente.setAttribute("style", "background: red;");
  }
}

function validarEdad() {
  var validarEdad = /^(1[8-9]|[2-9]\d|1[0-1]\d|120)$/;
  var edadCheck = inputEdad.value;
  if (edadCheck.match(validarEdad)) {
    console.log("Entro Edad y es correcto -->", edadCheck);
    return edadCheck;
  } else {
    inputEdad.setAttribute("style", "background: red;");
  }
}

// function validarFechaPermiso() {
//   var validarFecha = /^([0-3][1-9])\-([0-1][1-2])\-([0-2][0-0][0-1][0-9])$/gi;
//   var fechaPermiso = inputFechaPermiso.value;
//   if (fechaPermiso.match(validarFecha)) {
//     console.log("Entro y es correcto -->", fechaPermiso);
//     return fechaPermiso;
//   } else {
//     inputFechaPermiso.setAttribute("style", "background: red;");
//   }
// }

function validarMatricula() {
  var validarMatricula = /^[\d]{4}[BCDFGHJKLMNPQRSTVWXYZ][BCDFGHJKLMNPQRSTVWXYZ][BCDFGHJKLMNPORSTVWXYZ]$/gi;
  var matricula = inputMatricula.value;
  if (matricula.match(validarMatricula)) {
    console.log("Entro ValidarMatricula y es correcto -->", matricula);
    return matricula;
  } else {
    inputMatricula.setAttribute("style", "background: red;");
  }
}

function validarImporte() {
  var validarImporte = /^[\d]+(?:[,][0-9]{1,2})?$/;
  var importe = inputImporteValidacion.value;
  if (importe.match(validarImporte)) {
    console.log("Entro ValidarImporte y es correcto -->", importe);
    return importe;
  } else {
    inputImporteValidacion.setAttribute("style", "background: red;");
  }
}

function validarMes() {
  var validarMesExpiracion = /^(0[1-9]|[1-9]|1[0-2])$/;
  var mesExpiracion = inputMes.value;
  if (mesExpiracion.match(validarMesExpiracion)) {
    console.log("Entro ValidarMes y es correcto -->", mesExpiracion);
    return mesExpiracion;
  } else {
    inputMes.setAttribute("style", "background: red;");
  }
}

function validarAnio() {
  var validarAnioExpiracion = /^201[9]|20[2-9][\d]|2100$/;
  var anioExpiracion = inputAnioExp.value;
  if (anioExpiracion.match(validarAnioExpiracion)) {
    console.log("Entro ValidarAño y es correcto -->", anioExpiracion);
    return anioExpiracion;
  } else {
    inputAnioExp.setAttribute("style", "background: red;");
  }
}

// function validarTarjeta() {}
function elementWhite(input) {
  input.style.backgroundColor = "white";
}
function ejecutarValidaciones() {
  // validarCamposNoVacios()
  validarNomApell();
  validarExpediente();
  validarEdad();
  // validarFechaPermiso();
  validarMatricula();
  validarImporte();
  validarMes();
  validarAnio();
  // validarTarjeta();
  //alert(`Los campos rojos son erróneos`);
}

/*
function validateForm() {
    //capturamos el valor(value) de myfrom/fname 
    var x = document.forms["myForm"]["fname"].value;
    //validamos para ver si existe un valor agregado al input
    if (x == "") {

        // y si no fue agregado ninguna informacion que te mande un alert notificando que es obligatorio.
        alert("Name must be filled out");
        return false;
    }
}
*/
/*
VALIDACIONES
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


*/
/*
 //1 validar que ningún campo se quede vacio
var validarCamposVacios = /^[\s]$/gi;
if (!valorInput.match(validarCamposVacios)) {
  //hacer algo
} else {
  //mensaje de error al estar un campo vacio
}

 		let expRegAlf = /^[\Dñ]+$/;
    */
