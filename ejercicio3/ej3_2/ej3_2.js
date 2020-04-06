/****************************EJERCICIO 3.2.2********************************************/ 

/*******************MANEJO DE FUNCIONES*****************************/
/****************************EJERCICIO 3.2.3.1********************************************/
/*
Calcular a través de la función denominada Factorial() 
el factorial de un número que se introduce por teclado. 
Se controlará que los caracteres introducidos sean numéricos
y que correspondan a un entero que no es negativo.
 */

if(document.querySelector('#buttonFact')){ //al generarse el .js antes que el html (el html se genera cuando se clica en el menu) da un error en el DOM
	var btnAddNumber = document.querySelector('#buttonFact');
	btnAddNumber.addEventListener("click", apartado3_2_3_1);
}

function apartado3_2_3_1(){
	var numInputFact = document.querySelector('#inputFact');
	var numFact = Number(numInputFact.value);
	var mostrarFact= document.querySelector('#pFact');
	var fact = numFact;
	if(numFact > 0 && Number.isInteger(numFact) && !isNaN(numFact)){
		for (var i = numFact -1; i > 0 ; i--) {
		fact = fact * i;
		}
		mostrarFact.textContent = `El factorial de ${numFact} es --> ${fact}`;
	}else if(numFact === 0){
		mostrarFact.textContent = `El factorial de ${numFact} es --> 1`;
	}else{

		mostrarFact.textContent = `Venga ya ${numFact}, no es entero o es negativo compadre... no seas traviecill@ y pon un número entero positivo`;
	}
}


// /****************************EJERCICIO 3.2.3.2********************************************/
// Diseñar la función Intercambiar(numero1, numero2) para hacer
//  el intercambio de dos números introducidos por teclado
//   pasando los argumentos por valor y por referencia.
if(document.querySelector('#buttonInt')){
	var btnAddaNumber = document.querySelector('#buttonInt');
	btnAddaNumber.addEventListener("click", apartado3_2_3_2);
}

function apartado3_2_3_2(){
	var num1 = parseInt(document.querySelector('#numUnoInt').value);
	var num2 = parseInt(document.querySelector('#numDosInt').value);
	var pMostrarNum = document.querySelector('#pMostrNum');
	var pMostrarNum1 = document.querySelector('#pMostrNum1');
	var pMostrarNum2 = document.querySelector('#pMostrNum2');
	var pMostrarTxt = document.querySelector('#pMostrTxt');
	var pMostrarNum1_2 = document.querySelector('#pMostrNum1_2');
	var pMostrarNum2_2 = document.querySelector('#pMostrNum2_2');
	var pMostrarTxt2 = document.querySelector('#pMostrTxt2');
	
	var arrayNum =[num1, num2];

	function intercambiarReferencia(arrayNum){
		if(isNaN(arrayNum[0])||isNaN(arrayNum[1])){
			pMostrarNum.innerHTML = `<h1>Por favor, ambos sabemos que no has seguido las instrucciones... seamos serios!</h1>`;
			pMostrarTxt2.textContent = `Intercambio de valores por referencia:`;
			pMostrarNum1_2.innerHTML = `<label for="num1">Primer Número  </label> -> Esto no es serio...`;
			pMostrarNum2_2.innerHTML = `<label for="num2">Segundo Número  </label> -> Esto no es serio...`;
		}else{
			pMostrarNum.textContent = `El primer número es ${num1}, se cambiará por el segundo número, cuyo valor es ${num2}`;		
			pMostrarTxt.textContent = `Intercambio de valores por referencia:`;
			pMostrarNum1.innerHTML = `<label for="num1">Primer Número  </label> -> ${arrayNum[1]}`;
			pMostrarNum2.innerHTML = `<label for="num2">Segundo Número  </label> -> ${arrayNum[0]}`;
		}		
	}	

	function intercambiarValor(num1, num2){
		if(isNaN(arrayNum[0])||isNaN(arrayNum[1])){
			pMostrarNum.innerHTML = `<h1>Por favor, ambos sabemos que no has seguido las instrucciones... seamos serios!</h1>`;
			pMostrarTxt.textContent = `Intercambio de valores por referencia:`;
			pMostrarNum1.innerHTML = `<label for="num1">Primer Número  </label> -> Esto no es serio...`;
			pMostrarNum2.innerHTML = `<label for="num2">Segundo Número  </label> -> Esto no es serio...`;
		}else{
			pMostrarNum.textContent = `El primer número es ${num1}, se cambiará por el segundo número, cuyo valor es ${num2}`;	
			pMostrarTxt2.textContent = `Intercambio de valores por valor:`;
			pMostrarNum1_2.innerHTML = `<label for="num1">Primer Número  </label> -> ${num2}`;
			pMostrarNum2_2.innerHTML = `<label for="num2">Segundo Número  </label> -> ${num1}`;	
		}
		
	}
	intercambiarReferencia(arrayNum);
	intercambiarValor(num1, num2);
}

/****************************EJERCICIO 3.2.3.3********************************************/

// Diseñar la función Suma(número de argumentos variables, 
// separados por coma) que realice la suma de los números 
// sean estos enteros o reales. Indicará si la entrada no 
// tiene el formato solicitado.
if (document.querySelector('#buttonSum')) {
	var btnAddaNumber = document.querySelector('#buttonSum');
	btnAddaNumber.addEventListener("click", apartado3_2_3_3);
}
//cadena.split([separador][,limite])
function apartado3_2_3_3(){
	var sumTxt= document.querySelector('#pSum');
	var errTxt= document.querySelector('#pErr');
	var cadenaNum = document.querySelector('#inputSum').value;
	
	function suma(cadenaNum){
		var arrayTxtNum = cadenaNum.split(",");
		var num = 0;
		for (var i = 0 ; i < arrayTxtNum.length; i++) {
			if(isNaN(Number(arrayTxtNum[i]))){
				errTxt.textContent = `Has introducido "${arrayTxtNum[i]}" en la posición ${i+1}, sabes bien que no es un número... por favor.`;
			}else{
				num += Number(arrayTxtNum[i]);
			}
		}
		sumTxt.textContent = `La sumatoria de los argumentos es -> ${num}`;
	}
	suma(cadenaNum);
}
//CODIGO COMENTADO FUNCIONAL PERO SIN PASAR LOS ARGUMENTOS QUE SE QUIERAN, SOLO UNO QUE SE RECOGE COMO ARRAY
// function apartado3_2_3_3(){
// 	var sumTxt= document.querySelector('#pSum');
// 	var errTxt= document.querySelector('#pErr');
// 	var cadenaNum = document.querySelector('#inputSum').value;
	
// 	function suma(cadenaNum){
// 		var arrayTxtNum = cadenaNum.split(",");
// 		var num = 0;
// 		for (var i = 0 ; i < arrayTxtNum.length; i++) {
// 			if(isNaN(Number(arrayTxtNum[i]))){
// 				errTxt.textContent = `Has introducido "${arrayTxtNum[i]}" en la posición ${i+1}, sabes bien que no es un número... por favor.`;
// 			}else{
// 				num += Number(arrayTxtNum[i]);
// 			}
// 		}
// 		sumTxt.textContent = `La sumatoria de los argumentos es -> ${num}`;
// 	}
// 	suma(cadenaNum);
// }
/****************************EJERCICIO 3.2.3.4********************************************/

// Realizar la función Informacion(nombre, localidad, valor) 
// haciendo que los dos últimos argumentos tengan los siguiente
//  valores por defecto LAS PALMAS DE G.C. y 100.

if(document.querySelector('#buttonParam')){
	var btnAddaNumber = document.querySelector('#buttonParam');
	btnAddaNumber.addEventListener("click", apartado3_2_3_4);
}

function apartado3_2_3_4(){
	var nombre = document.querySelector('#inputParam').value;
	var param1Txt = document.querySelector('#pParam1');
	var param2Txt = document.querySelector('#pParam2');
	var param3Txt = document.querySelector('#pParam3');
	var param4Txt = document.querySelector('#pParam4');

	function informacion(nombre, localidad = "LAS PALMAS DE G.C.", valor = 100){
		param1Txt.textContent = `${nombre}, ${localidad}, ${valor}`;
		param2Txt.textContent = `${nombre}, ${localidad}`;
		param3Txt.textContent = `${nombre}`;
	}
	informacion(nombre, localidad = "LAS PALMAS DE G.C.", valor = 100);
}

/****************************EJERCICIO 3.2.3.5********************************************/
// Repetir el cálculo del factorial, esta vez, a través de una función recursiva.
if(document.querySelector('#buttonFactRec')){
	var btnAddaNumber = document.querySelector('#buttonFactRec');
	btnAddaNumber.addEventListener("click", apartado3_2_3_5);
}

function apartado3_2_3_5(){
	var numero = Number(document.querySelector('#inputFactRec').value);
	var txtFactRecur = document.querySelector('#pFactRec');

	function factorialRecursivo(numero) {
	    if (numero === 0){
		    	return 1;
		    } else if(numero < 0 || Number.isInteger(numero) == false){
		    	return `Venga ya, no es entero o es negativo compadre... no seas traviecill@ y pon un número entero positivo`;
		    }
		    return numero * factorialRecursivo(numero - 1);
		}
		 txtFactRecur.textContent = ` El factorial de ${numero} es --> ${factorialRecursivo(numero)}`;
}