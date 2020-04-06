var uniVentanaSinChar = () =>
  window.open(
    "ventana.html",
    "UNA VENTANA SIN CARACTERÍSTICAS",
    `
  height=300,
  width=20,
  left=0,
  location=0,
  menubar=0,
  resizable=0,
  scrollbars=0,
  status=0,
  titlebar=0,
  top=0`
  );

var multiVentanaSinChar = () =>
  window.open(
    "ventana.html",
    "_blank",
    `
  height=300,
  width=20,
  left=0,
  location=0,
  menubar=0,
  resizable=0,
  scrollbars=0,
  status=0,
  titlebar=0,
  top=0`
  );

var ventanaConChar = () =>
  window.open(
    "ventana.html",
    "VENTANA CON CARACTERÍSTICAS",
    `
  height=430,
  width=420,
  left=300,
  location=1,
  menubar=0,
  resizable=1,
  scrollbars=0,
  status=1,
  titlebar=0,
  top=300`
  );

var ventanaConMasChar = () =>
  window.open(
    "ventana.html",
    "VENTANA CON MÁS CARACTERÍSTICAS",
    `
  height=300,
  width=600,
  left=150,
  location=0,
  menubar=0,
  resizable=0,
  scrollbars=0,
  status=0,
  titlebar=0,
  top=300`
  );

var ventanaPantCompl = () =>
  window.open("ventana.html", "VENTANA PANTALLA COMPLETA");

var arrayaperturaVentanas = [
  uniVentanaSinChar,
  multiVentanaSinChar,
  ventanaConChar,
  ventanaConMasChar,
  ventanaPantCompl
];
