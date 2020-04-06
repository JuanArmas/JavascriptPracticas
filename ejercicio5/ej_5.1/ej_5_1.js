// Se diseñará un formulario con los datos presentados en la figura siguiente.
// En el combo(select) se presentarán las siguientes opciones: a) Al azar.b)
// Le indicaron la URL de la página.c) A través de un buscador(opción por
//   defecto) y d) Mediante un enlace desde otra página.
// Al pulsarse el botón AÑADIR se introducirán apellidos, nombre y correo
// electrónico en la lista y cuando se haga clic en el botón VISUALIZAR DATOS
// se presentarán todos los datos elegidos en un cuadro de diálogo alert.
// Al pulsar el botón eliminar se borra la selección de la lista.¿selección
// activa ?¿último elemento introducido ?¿Cómo actúo si nó hay ningún elemento
//  seleccionado ?  Validar la dirección de correo electrónico.

var apellidosPersonaEditorial = document.querySelector("#apellidos");
var nombrePersonaEditorial = document.querySelector("#nombre");
var radioEditorial = document.getElementsByName("radioEditorial");
var comprobar = document.getElementsByName("comprobar");
var selectEditorial = document.getElementById("selectEditorial");
var selectMuestraEditorial = document.getElementById("selectMostrarEditorial");
var checkBoxEditorial = document.getElementsByName("checkboxEditorial");
var ventanaModal = document.getElementById("modalEditorial");
var apellido;
var nombre;
var persona;
var arrayPersonas = [];

/************************MANEJO DE DATOS***************************/

function validarEmail() {
  var emailPersonaEditorial = document.querySelector("#email").value;
  var verificarEmail = document.getElementById("validacionEmail");
  const validatorEmail = /^[\w-]+@[a-zA-Z0-9-]+.[a-zA-Z]{2,3}$/gi;

  if (emailPersonaEditorial.match(validatorEmail)) {
    return emailPersonaEditorial;
  } else {
    alert("Por favor, introduce un correo válido");
    return (verificarEmail.textContent = `El correo tiene una estructura no permitida `);
  }
}

function obtenerDatosRadio() {
  var sexo;
  for (var i = 0; i < radioEditorial.length; i++) {
    if (radioEditorial[i].checked) {
      sexo = radioEditorial[i].value;
    }
  }
  return sexo;
}
function obtenerDatosCheckBox() {
  var gustos = [];
  for (var i = 0; i < checkBoxEditorial.length; i++) {
    if (checkBoxEditorial[i].checked) {
      gustos[i] = checkBoxEditorial[i].value;
    }
  }
  return gustos;
}
function obtenerDatosSelectIntro() {
  var opcionSeleccionada =
    selectEditorial.options[selectEditorial.selectedIndex].text;
  if ((selectEditorial.selectedIndex = -1)) {
    return opcionSeleccionada;
  }
}

function crearNuevaPersona() {
  var personaNueva = new Object();
  personaNueva.apellido = apellidosPersonaEditorial.value;
  personaNueva.nombre = nombrePersonaEditorial.value;
  personaNueva.sexo = obtenerDatosRadio();
  personaNueva.email = validarEmail();
  personaNueva.comoLlego = obtenerDatosSelectIntro();
  personaNueva.datosGustos = obtenerDatosCheckBox();

  return personaNueva;
}
function validarInputEntradaDatos() {
  if (
    apellidosPersonaEditorial.value == "" ||
    nombrePersonaEditorial.value == "" ||
    validarEmail() == ""
  ) {
    for (var i = 0; i < comprobar.length; i++) {
      if (comprobar[i].value == "") {
        comprobar[i].setAttribute("style", "background: red;");
      }
    }
    alert("Introduce los datos correctos");
  } else {
    var nuevaPersona = crearNuevaPersona();
    return nuevaPersona;
  }
}
function cambiarColor(input) {
  input.style.backgroundColor = "white";
}
/*************************TRABAJAR DATOS*************************************/

function btnAñadirDatosFormulario() {
  var nuevaPersona = validarInputEntradaDatos();
  var mostrarPersona = `${nuevaPersona.apellido}, ${nuevaPersona.nombre}, ${nuevaPersona.email}`;
  var option = document.createElement("option");
  option.text = mostrarPersona;
  selectMuestraEditorial.add(option);
  arrayPersonas.push(nuevaPersona);
  document.getElementById("formEditorial").reset();
}

function btnEliminarDatosFormulario() {
  selectMuestraEditorial.remove(selectMuestraEditorial.selectedIndex);
}
/*************************MOSTRAR DATOS*************************************/
function btnVisualizarDatosFormulario() {
  var personaSeleccionada;
  if (selectMuestraEditorial.length != 0) {
    for (var i = 0; i < selectMuestraEditorial.length; i++) {
      if ((selectMuestraEditorial.selectedIndex = -1)) {
        personaSeleccionada = `
        <ul id='idUl'>
          <li type='square'>Apellido = ${arrayPersonas[i].apellido}</li>
          <li type='square'>Nombre = ${arrayPersonas[i].nombre}</li>
          <li type='square'>Sexo = ${arrayPersonas[i].sexo}</li>
          <li type='square'> Email = ${arrayPersonas[i].email}</li>
          <li type='square'>Como nos encontró = ${arrayPersonas[i].comoLlego}</li>
          <li type='square'>Gustos personales = ${arrayPersonas[i].datosGustos}</li>
        </ul>`;
      }
    }
    mostrarVentanaModal(personaSeleccionada);
  } else {
    alert("No hay datos introducidos que mostrar");
  }

  // alert(personaSeleccionada);
  // document.getElementById("formEditorial").reset();
}
function mostrarVentanaModal(objPersona) {
  ventanaModal.style.marginTop = "100px";
  ventanaModal.style.left = (document.body.clientWidth - 350) / 2 + "px";
  ventanaModal.style.display = "block";

  ventanaModal.innerHTML =
    "<p id='pModalEditorial'>Datos de la persona seleccionada: " +
    objPersona +
    "</p><button id='cerrarModal' onclick='ocultarVentana()'>cerrar</button>";
}
function ocultarVentana() {
  ventanaModal.style.display = "none";
}
