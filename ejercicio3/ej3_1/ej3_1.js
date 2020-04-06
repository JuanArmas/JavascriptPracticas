/*
Ejercicio 1: Realizar un programa que solicite al usuario el 
resultado de una operación aritmética dada. Utilizar dos funciones. 
La primera captura el resultado introducido por el usuario e invoca
otra función que verifica si el resultado es correcto. En esta 
segunda función utilizaremos return para devolver el resultado.
 */
/*mirar pdf a partir pag.14*/

/****************************EJERCICIO 3.1********************************************/
var btnCalcular = document.querySelector('#calcular');
btnCalcular.addEventListener("click", apartado3_1);

function apartado3_1(){
	var datoIntroducido = document.querySelector('#res');
	var verificarNum = parseInt(datoIntroducido.value);
	var pText = document.querySelector('#textResult');
	function calcular(verificarNum){
		if(verificarNum == 1){
			return pText.textContent = '¿Estas segur@?... Valdrá 1 si el orden usado para resolver la operación es Paréntesis, Multiplicación, División, pero quizá no sea el correcto';
		}else if(verificarNum == 16){
			return pText.textContent = 'Correcto!! Valdrá 16 si el orden usado para resolver la operación es División, Paréntesis, Multiplicación';
		}else{
			return pText.textContent = 'No has acertado, intentalo de nuevo. Recuerda que tiene dos posibles resultados esta operación, ¿O quizá sólo uno? Investigalo si te apetece';
		}
	}
	calcular(verificarNum);
}

/****************************EJERCICIO 3.2.1********************************************/
//crear obj para pasarlo por referencia y que modifique el valor incrementandolo
//Escribir textos correctos
var numIntro = document.querySelector('#numIntroducido');
var btnIncrementar = document.querySelector('#incrementar');
btnIncrementar.addEventListener("click", () => apartado3_2_1(numIntro));


function apartado3_2_1(numIntro){
	var incrementador = document.querySelector('#incrementador');
	var incrementadorNum = parseInt(incrementador.value);
	var numValue = parseInt(numIntro.value);
	numValue = numValue + incrementadorNum;
	console.log(numValue);
	numIntro.value = numValue;
}

// /****************************EJERCICIO 3.2.2********************************************/
// 

var btnVerificar = document.querySelector('#verificar');
btnVerificar.addEventListener("click", apartado3_2_2);

function apartado3_2_2(){
	var pVerificar = document.querySelector('#pIdNumMa');
	var num1 = parseInt(prompt('Introduzca el primer número'));
	var num2 = parseInt(prompt('Introduzca el segundo número'));
	function calcular(num1, num2){
		if (num1 <= num2) {
			sum = num1 + num2;
			return pVerificar.textContent = `${num1} es menor o igual que ${num2}, su suma es = ${sum}`;
		}else{
			return alert(`Cuidado!! ${num1} es mayor que  ${num2}`);
		}
	}
	return calcular(num1, num2);
}



// /****************************EJERCICIO 3.2.3********************************************/
var btnAddaNumber = document.querySelector('#ejecutarAddNumber');
btnAddaNumber.addEventListener("click", apartado3_2_3_1);

function apartado3_2_3_1(){
	function addNumbers(){
		firstNum = 4;
		secondNum = 8;
		result = firstNum + secondNum;	
		return result;
	}
	result = 0;
	alert(`El valor de la variable result antes de la llamada es ${result}`);
	sum = addNumbers();
	alert(`El valor de la variable result despues de la llamada es ${sum}`);
}

// /****************************EJERCICIO 3.3********************************************/

//FOR
var btnVerificar = document.querySelector('#ejecutarMuestraFor');
btnVerificar.addEventListener("click", forClasic);
var textMostrar1 = document.querySelector('#mostrar1');
var textMostrar2 = document.querySelector('#mostrar2');
var textMostrar3 = document.querySelector('#mostrar3');

function forClasic(){
	textMostrar1.innerHTML = "";
	textMostrar2.innerHTML = "";
	textMostrar3.innerHTML = "";
	
	var nombres = ['pepe ','rodrigo ','andres ','jose ','paco '];
	
	textMostrar1.innerHTML += `Este for recorre el array mostrando el valor asociado al índice incremental según iteracion:`;
	
	for(var i = 0; i < nombres.length ; i++){	 
		 textMostrar2.innerHTML += `En esta iteración el valor del índice ${i} es ${nombres[i]}` + "<br>";

	}
}
 

//FOR OF
var btnVerificar = document.querySelector('#ejecutarMuestraForOF');
btnVerificar.addEventListener("click", forOf);

function forOf(){
	
	textMostrar1.innerHTML = "";
	textMostrar2.innerHTML = "";
	textMostrar3.innerHTML = "";
	
	var nombres = ['pepe ','rodrigo ','andres ','jose ','paco '];
	var ejemploString = "TRATO AL STRING COMO UN ARRAY DE CARACTERES";
	
	textMostrar1.innerHTML += `Recorre el array accediendo directamente al valor del mismo, tiene la particularidad de poder recorrer un string tratandolo como un array de caracteres:`;
	
	for(var nombre of nombres){	
		textMostrar2.innerHTML += `Muestra posición del array ->${nombres[nombre]}`+ "<br>" +`Muestro valor del array ->${nombre}`+ "<br><br>";
	} 
	for(var charString of ejemploString){	
		textMostrar3.innerHTML += `Muestra caracter -->${charString}`+ "<br>";
	}
}	

//FOR EACH
var btnVerificar = document.querySelector('#ejecutarMuestraForEach');
btnVerificar.addEventListener("click", forEach);

function forEach(){
	textMostrar1.innerHTML = "";
	textMostrar2.innerHTML = "";
	textMostrar3.innerHTML = "";
	
	var nombres = ['pepe ','rodrigo ','andres ','jose ','paco '];
	textMostrar1.innerHTML = `El foreach recorre el array y ejecuta la funcion nombres.forEach(value,key,array) por cada elemento en vez de iterar el array por su indice`;
	nombres.forEach(
		function(value, key, array){
			textMostrar2.innerHTML += `En cada ejecucion de la funcion la clave es ${key} y el valor del elemento es ${value}` + "<br>";
			textMostrar2.innerHTML += `El array es --> ${array}` + "<br><br>";
		}
	);
}

//FOR IN
// ademas de iterar sobre el array, tambien iterará sobre todos los elementos que esten modificando el array¿?
// sirve para recorrer cada una de las propiedades de un objeto
// for(variableNueva in nombreObjeto){} 
var btnVerificar = document.querySelector('#ejecutarMuestraForIn');
btnVerificar.addEventListener("click", forIn);

function forIn(){
	textMostrar1.innerHTML = "";
	textMostrar2.innerHTML = "";
	textMostrar3.innerHTML = "";
	
	var objNombres = {'persona1':'pepe ', 'persona2':'rodrigo ', 'persona3':'andres ','persona4':'jose ','persona5':'paco '};
	
	textMostrar1.innerHTML = `Accede a los valores del objeto por medio de sus propiedades tratando a estas como claves`;
	var i = 0;
	textMostrar2.innerHTML = "objNombres ={";
	for(var propiedad in objNombres){

		textMostrar3.innerHTML +=`Propiedad del obj ->${propiedad};<br> Valor de la propiedad -> ${objNombres[propiedad]}` + '<br><br>';
		textMostrar2.innerHTML +=` ${propiedad} : ${objNombres[propiedad]} , `;
	} //por cada propiedad del objeto se ejectara una sentencia
	textMostrar2.innerHTML += "}";
}	
	

