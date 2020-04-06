 // window.onload = function(){

	/*****************Apartado 1********************/
	// Saludo:
	// Introducir el nombre del usuario en un control de edición y al pulsar el botón
	// SALUDAR visualizar el mensaje Hola nombre, yo soy PENTIUM 4.
	
	var btnSaludar = document.getElementById('saludar');
	btnSaludar.addEventListener("click", apartado1);

	function apartado1(){ //el window.onload = function(){code} asegura que la página haya cargado el arbol de nodos del DOM antes que se ejecute el .js ¿Buen praxis?

		var name = document.getElementById('name'); //capturo el dato introducido en el input y lo almaceno en la variable
		var nombre = name.value; // pido al input que me de el valor introducido
		var respuesta = document.getElementById('respuesta'); //capturo el acceso al <p> 
		// console.log(nombre.length);

		if(name.value == ""){


			respuesta.textContent = "¿No recuerdas tu nombre? escribelo por favor";
		}else{
			respuesta.innerHTML = `Hola<strong> ${nombre}</strong>, yo soy un ordenador que va de modernillo, no un anticuado PENTIUM 4`;	
		}
	}

	/*****************Apartado 2********************/
	// Adivinar un número:
	// El programa generará un número aleatorio comprendido entre 1 y 100 e invitará al 
	// usuario a adivinarlo. Si el usuario introduce un número mayor que el generado se 
	// le presentará el mensaje INTÉNTELO CON UN NÚMERO MENOR, en caso contrario INTÉNTELO
	// CON UN NÚMERO MAYOR. Cuando el número sea adivinado se le indicará al usuario el 
	// número de intentos. Se limitará a 6 dicho número de intentos.

	var btnVerificar = document.getElementById('comprobar');
	btnVerificar.addEventListener("click", apartado2);

	function numAleatorio(){
		return Math.round(Math.random() * 100)+ 1;
	}

	var nAleatorio = numAleatorio();
	var contador = 1;

	function apartado2(){
		var number = document.getElementById('number');

		var numero = parseInt(number.value);
		var resultado = document.getElementById('resultado');
		
		if(contador != 7){
			if(numero < nAleatorio){
				if(contador == 5){
					resultado.textContent = `Casi, intentalo de nuevo con un número mayor. Te queda ${6-contador} intento!!`;
				}else{
					resultado.textContent = `Casi, intentalo de nuevo con un número mayor. Te quedan ${6-contador} intentos!!`;
				}
			
			contador++;
		}else if (numero > nAleatorio){
			if(contador == 5){
					resultado.textContent = `Casi, intentalo de nuevo con un número menor. Te queda ${6-contador} intento!!`;
				}else{
					resultado.textContent = `Casi, intentalo de nuevo con un número menor. Te quedan ${6-contador} intentos!!`;
				}
			contador++;
		}else if(numero == nAleatorio){
			if(contador == 1){
				resultado.textContent = `Enhorabuena!! Has dado con el número. Sólo has necesitado ${contador} intento para conseguirlo, vaya Crack!! `;
			}else{
				resultado.textContent = `Enhorabuena!! Has dado con el número. Intentos que has necesitado para conseguirlo = ${contador}`;
			}			
		}
		}else if(contador === 7){
			resultado.textContent = `Vaya, el numero era el ${nAleatorio}. Ya has gastado los ${contador-1} intentos sin averiguarlo`;
		}
	}

	/*****************Apartado 3********************/
// 	Lotería primitiva:
// Cuando el usuario pulsa el botón GENERAR NÚMEROS, el programa generará de manera 
// aleatoria 6 números comprendidos entre 1 y 49, sin repetir ninguno de ellos.

	var btnGenerarNumPrimitiva = document.getElementById('generarPrimitiva');
	btnGenerarNumPrimitiva.addEventListener("click", apartado3);

	function apartado3(){
		var primitiva = [];		
		var numPrimitiva = document.getElementById('numPrimitiva');
		numPrimitiva.textContent = "";// hace que el elemento <p> se vacie cuando se clique de nuevo
		;
		for (var i = 0; i < 6 ; i++) {
			var num = Math.round(Math.random() * 49)+ 1;
			console.log(num);
			primitiva.push(num);	
			numPrimitiva.textContent += primitiva[i] +" "+" ";
		}
	}	

	/*****************Apartado 4********************/
// 	Control de errores try_catch
// Se pulsará un botón y se mostrará un mensaje personalizado diciendo 
// a los usuarios que pueden hacer clic en Aceptar para continuar viendo
// la página o haga clic en Cancelar para volver a la página principal.
// Si el método confirm devuelve false, el usuario hace clic en Cancelar,
// y el código redirige al usuario. Si el método confirm devuelve true,
// el código no hace nada.

	var btnControlE = document.getElementById('controlErrores');
	btnControlE.addEventListener("click", apartado4);
	function apartado4(){
		try {
			var mensaje = confirm("Pulsar Aceptar para continuar o cancelar para salir de la página");
			if(mensaje == false){
				throw (new Error());
			}else{
				alert ("no, no, no... no has dicho la palabra mágica... Vuelta a empezar ;P")
				
			}
		} catch(e) {
			alert("Error Fatalisimo "+ e.name + "Horrible!!!");
	
		}

	}

	/*****************Apartado 5********************/
// 	Control de errores try_catch_throw
// Se solicita al usuario que introduzca un valor. Si el valor es
// superior a 10, inferior a 5, o no es un número, vamos a lanzar 
// un error. El error es entonces atrapado por el argumento de la 
// captura y dependiendo del error generado se presentará el mensaje 
// de error apropiado.

	var btnCntrErr = document.getElementById('err');
	btnCntrErr.addEventListener("click", apartado5);

	function apartado5(){
		var nTryCatch = prompt("Por favor, introduzca un número");
		var mensaje = document.getElementById("capturaErr");
		try {
			if(nTryCatch > 10){
				throw (new Error("El valor introducido es mayor que 10"));
			}else if(nTryCatch < 5){
				throw (new Error("El valor introducido es menor que 5"));
			}else if(isNaN(nTryCatch)){
				 throw (new Error("Venga ya, el valor introducido no es un número"));
			}else{
				mensaje.textContent = `Correcto, el valor introducido es ${nTryCatch}`;
			}
		} catch(e) {
			mensaje.textContent = e;
		}
		
	}