
//Apartado 1
	//AVISO: HAGO USO DE LOS DOCUMENT.WRITE PARA DAR FORMATO A LAS PÁGINAS CREADAS POR ELLOS MISMOS. 
	//LOS DOCUMENT QUE CARGAN CASI TODO EL CODIGO CSS SON LOS PRIMEROS Y LOS ULTIMOS
function apartado1(){
	document.write("<head><link rel='stylesheet' href='../../ejercicio2.css'></head><div class='textoCabecera'><p class='pCabecera'>Javascript, </p><p class='pCabecera'><span>Ejercicios prácticos Ud-2.P-1</span></p></div>");
	document.write("<div class='divEjercicio2'><h3>--> Apartado 1:</h3> Crear dos variables, sumarlas e imprimirlas<br><br>");
	document.write ("<button type='button' onclick='javascript:location.reload()'>Ir al inicio</button><br><br>");
	var num1 = "2";
	var num2 = "3";
	var sum = (num1 + num2);
	document.write(sum+"<br>");
	document.write("</div><div class='divFooter'><p class='pfooter'>Juan Airam Armas Alemán - 2ºDAW</p></div>");
}

//Apartado 2
function apartado2(){
	document.write("<head><link rel='stylesheet' href='../../ejercicio2.css'></head><div class='textoCabecera'><p class='pCabecera'>Javascript, </p><p class='pCabecera'><span>Ejercicios prácticos Ud-2.P-1</span></p></div>");
	document.write("<div class='divEjercicio2'><h3>--> Apartado 2:</h3> Decir el tipo de un par de variables sin valor, repetir añadiendoles valor<br><br>");
	document.write ("<button type='button' onclick='javascript:location.reload()'>Ir al inicio</button><br><br>");
	var esString;
	var esNumber;
	var esBoolean;

	document.write("esString = " +typeof (esString)+"<br> esNumber = " +typeof (esNumber)+"<br> esBoolean = "+typeof (esNumber)+"<br>");

	var esString ="Hola";
	var esNumber = 32;
	var esBoolean = true;

	document.write("<br>esString = " +typeof (esString)+"<br> esNumber = " +typeof (esNumber)+"<br> esBoolean = "+typeof (esBoolean)+"<br>");
	document.write("</div><div class='divFooter'><p class='pfooter'>Juan Airam Armas Alemán - 2ºDAW</p></div>");
}

//Apartado 3
function apartado3(){
	document.write("<head><link rel='stylesheet' href='../../ejercicio2.css'></head><div class='textoCabecera'><p class='pCabecera'>Javascript, </p><p class='pCabecera'><span>Ejercicios prácticos Ud-2.P-1</span></p></div>");
	document.write("<div class='divEjercicio2'><h3>--> Apartado 3:</h3> Introducir un par de numeros y verificar cual es mayor<br><br>");
	document.write ("<button type='button' onclick='javascript:location.reload()'>Ir al inicio</button><br><br>");
	var numEntrada1 = parseInt(prompt("Introduce el primer número para verificar con el segundo número (apartado 3)"));
	var numEntrada2 = parseInt(prompt("Introduce el segundo número para verificar con el segundo número (apartado 3)"));
		if(numEntrada1 > numEntrada2){
			document.write("el valor de numEntrada1 ("+numEntrada1+") es mayor que el valor de numEntrada2 ("+numEntrada2+")<br>");
		}else if (numEntrada1 < numEntrada2) {
			document.write("el valor de numEntrada1 ("+numEntrada1+") es menor que el valor de numEntrada2 ("+numEntrada2+")<br>");
		}else{
			document.write("el valor de numEntrada1 ("+numEntrada1+") es igual que el valor de numEntrada2 ("+numEntrada2+")<br>");
		}
		document.write("</div><div class='divFooter'><p class='pfooter'>Juan Airam Armas Alemán - 2ºDAW</p></div>");
}
//Apartado 4
function apartado4(){
	document.write("<head><link rel='stylesheet' href='../../ejercicio2.css'></head><div class='textoCabecera'><p class='pCabecera'>Javascript, </p><p class='pCabecera'><span>Ejercicios prácticos Ud-2.P-1</span></p></div>");
	document.write("<div class='divEjercicio2'><h3>--> Apartado 5:</h3> Repetir lo anterior con un operador ternario <br><br>");
	document.write ("<button type='button' onclick='javascript:location.reload()'>Ir al inicio</button><br><br>");
	var N1,N2;
	N1=parseInt(prompt ("Primer número (apartado 5)"));
	N2=parseInt(prompt ("Segundo número (apartado 5)"));
	(N1>N2 ? document.write(N1 + " > " + N2+ "<br><br>"): N1<N2 ? document.write(N1 + " < " + N2+ "<br><br>"):document.write(N2 + " = " + N1+ "<br><br>"));
	document.write("</div><div class='divFooter'><p class='pfooter'>Juan Airam Armas Alemán - 2ºDAW</p></div>");
}
//Apartado 5
function apartado5(){
	document.write("<head><link rel='stylesheet' href='../../ejercicio2.css'></head><div class='textoCabecera'><p class='pCabecera'>Javascript, </p><p class='pCabecera'><span>Ejercicios prácticos Ud-2.P-1</span></p></div>");
	document.write("<div class='divEjercicio2'><h3>--> Apartado 4:</h3> Introducir texto y mostrarlo o mostrar 'hola' si no se introduce nada<br><br>");
	document.write ("<button type='button' onclick='javascript:location.reload()'>Ir al inicio</button><br><br>");
	var txtintroducido = prompt("Introduce un dato cualquiera, si es un string legible, mejor (apartado 4)");
	if(txtintroducido != ""){
		document.writeln("Muy bien, esto es lo que has escrito --> " +txtintroducido+"<br>");
	}else{
		document.write("No has hecho caso, por lo tanto... Hola<br>");
	}
	document.write("</div><div class='divFooter'><p class='pfooter'>Juan Airam Armas Alemán - 2ºDAW</p></div>");
}
//Apartado 6
function apartado6(){
	document.write("<head><link rel='stylesheet' href='../../ejercicio2.css'></head><div class='textoCabecera'><p class='pCabecera'>Javascript, </p><p class='pCabecera'><span>Ejercicios prácticos Ud-2.P-1</span></p></div>");
	document.write("<div class='divEjercicio2'><h3>--> Apartado 6:</h3> Mostrar los tipos de encabezados por medio de un for<br><br>");
	document.write ("<button type='button' onclick='javascript:location.reload()'>Ir al inicio</button><br><br>");
	for (var i = 1; i <= 6; i++) {
		if(i <= 6){
			document.write("<h"+i+">Encabezado de nivel "+i+"</h"+i+">");
		}
	}
	document.write("</div><div class='divFooter'><p class='pfooter'>Juan Airam Armas Alemán - 2ºDAW</p></div>");
}
//Apartado 7
function apartado7(){
	document.write("<head><link rel='stylesheet' href='../../ejercicio2.css'></head><div class='textoCabecera'><p class='pCabecera'>Javascript, </p><p class='pCabecera'><span>Ejercicios prácticos Ud-2.P-1</span></p></div>");
	document.write("<div class='divEjercicio2'><h3>--> Apartado 7:</h3> Mostrar los tipos de encabezados por medio de un while<br><br>");
	document.write ("<button type='button' onclick='javascript:location.reload()'>Ir al inicio</button><br><br>");
	var i = 1;
	while(i <= 6){
		document.write("<h"+i+">Encabezado de nivel "+i+"</h"+i+">");
		i++;
	}
	document.write("</div><div class='divFooter'><p class='pfooter'>Juan Airam Armas Alemán - 2ºDAW</p></div>");
}

//Apartado 8
function apartado8(){
	document.write("<head><link rel='stylesheet' href='../../ejercicio2.css'></head><div class='textoCabecera'><p class='pCabecera'>Javascript, </p><p class='pCabecera'><span>Ejercicios prácticos Ud-2.P-1</span></p></div>");
	document.write("<div class='divEjercicio2'><h3>--> Apartado 8:</h3> Solicitar un valor, mostrar cuenta atrás y despues la misma cuenta hacia adelante con un for<br><br>");
	document.write ("<button type='button' onclick='javascript:location.reload()'>Ir al inicio</button><br><br>");
	var valor = parseInt(prompt("Introduce un valor cualquiera para realizar la cuenta atrás (apartado 8)"));
	var num = valor;
	for(var i = 0; i <= valor; i++){
		document.write("cuenta atrás......"+num+"<br>");
		num--;
		if(num == 0){
			document.write("<br>");
			for (var j = 0; j <= valor; j++){
				document.write("cuenta hacia adelante......"+num+"<br>");
				num++;
			}
			break;
		}
	}
	document.write("</div><div class='divFooter'><p class='pfooter'>Juan Airam Armas Alemán - 2ºDAW</p></div>");
}
//Apartado 9
function apartado9(){
	document.write("<head><link rel='stylesheet' href='../../ejercicio2.css'></head><div class='textoCabecera'><p class='pCabecera'>Javascript, </p><p class='pCabecera'><span>Ejercicios prácticos Ud-2.P-1</span></p></div>");
	document.write("<div class='divEjercicio2'><h3>--> Apartado 9:</h3> Solicitar un valor, mostrar cuenta atrás y despues la misma cuenta hacia adelante con un while<br><br>");
	document.write ("<button type='button' onclick='javascript:location.reload()'>Ir al inicio</button><br><br>");
	var valor2 = parseInt(prompt("Vuelve a introducir un valor cualquiera para realizar la cuenta atrás (apartado 9)"));
	var num2 = valor2;
	var i = 0;
	var j = 1;
	while (i != valor2){
		if(i < valor2){
			document.write("cuenta atrás......"+num2+"<br>");
			num2--;
			i++;
		}
	}
	document.write("</div><div class='divFooter'><p class='pfooter'>Juan Airam Armas Alemán - 2ºDAW</p></div>");
}

//Apartado 10
function apartado10(){
	document.write("<head><link rel='stylesheet' href='../../ejercicio2.css'></head><div class='textoCabecera'><p class='pCabecera'>Javascript, </p><p class='pCabecera'><span>Ejercicios prácticos Ud-2.P-1</span></p></div>");
	document.write("<div align = 'center' class='divEjercicio2 piramide'>")
	document.write("<br><h3>--> Apartado 10:</h3> Generar piramide de 1 a 50 con el mismo numero por linea<br><br>");
	document.write ("<button type='button' onclick='javascript:location.reload()'>Ir al inicio</button><br><br>");
		for(var i = 1; i <= 50; i++){
			for(var j = 1; j <= i; j++){
				document.write(i+" ");
			}
			document.write("<br>");
			
		}
	document.write("</div><div class='divFooter'><p class='pfooter'>Juan Airam Armas Alemán - 2ºDAW</p></div>");
}

//Apartado 11
function apartado11(){
	document.write("<head><link rel='stylesheet' href='../../ejercicio2.css'></head><div class='textoCabecera'><p class='pCabecera'>Javascript, </p><p class='pCabecera'><span>Ejercicios prácticos Ud-2.P-1</span></p></div>");
	document.write("<div align = 'center' class='divEjercicio2 piramide'>")
	document.write("<br><h3>--> Apartado 11:</h3> Generar piramide de 1 a 50 con incremento de numero por linea<br><br>");
	document.write ("<button type='button' onclick='javascript:location.reload()'>Ir al inicio</button><br><br>");
	for(var i = 1; i <= 50; i++){
		for(var j = 1; j <= i; j++){
			document.write(j+" ");

		}
		document.write("<br>");
	}
	document.write("</div>");
	document.write("<div class='divFooter'><p class='pfooter'>Juan Airam Armas Alemán - 2ºDAW</p></div>");
}




