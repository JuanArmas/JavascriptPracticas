/**
 Botón ABRIR VENTANA SIN CARACTERÍSTICAS UNA SOLA VEZ
2. Botón ABRIR VENTANA SIN CARACTERÍSTICAS VARIAS VECES
3. Botón ABRIR VENTANA CON CARACTERÍSTICAS. Las características solicitadas
son ancho 420 px, alto 430 px, sin barra de menú pero con barra de estado y
redimensionable.
4. Botón ABRIR VENTANA CON MÁS CARACTERÍSTICAS. Las características 
solicitadas son ancho 600 px, alto 300 px, colocada en la posición fijada 
por las coordenadas x=150 px, y sin especificar, sin barra de menú, sin 
barra de estado, sin barras de scroll, ni de directorio, ni barra de 
dirección y sin barra de títulos ni de herramientas.
5. Botón ABRIR VENTANA A PANTALLA COMPLETA
6. Botón CERRAR VENTANAS, cerrará las ventanas abiertas
 */
var buttonAll = document.querySelectorAll("button");

buttonAll.forEach((element, index) =>
  element.addEventListener("click", () => arrayaperturaVentanas[index]())
);
