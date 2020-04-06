 const IMG = [ //ruta de la imagenes
        'img/piedraBlack.png',
        'img/papelBlack.png',
        'img/tijeraBlack.png'
    ];
    const CAMBIO_IMG = 100; // tiempo que tarda en cambiar las imagenes, velocidad con la que cambian em milesimas de segundo
    var posImgActual = 0;
    var imagen = document.querySelector('#imagenPPT');
    var botonJugar = document.querySelector('#jugarPPT');
    var textPPT1= document.querySelector('#txtPPT1');
    var textPPT2= document.querySelector('#txtPPT2');
   // var bodyTag= document.querySelector('#body'); //intentar poner un gif de fondo
    var tiempoAleatorio = Math.floor(Math.random() * (2000 - 1000)) + 2000;
    // el tiempo que condicionara el setTimeout en su segundo parametro sera aleatorio
    var intervalo;

    botonJugar.addEventListener('click', jugarIntervalo);
    // Funciones  
    /**
     * Activa el carrusel
     */
    function jugarIntervalo() {
        intervalo = setInterval(pasarFoto, CAMBIO_IMG); //activa el carrusel de forma infinita
        // Desactivamos los botones de control
        botonJugar.setAttribute('disabled', true); //desactiva el botón al iniciar partida(al accionar dicho botón)
        setTimeout(stopCarrusel, tiempoAleatorio); // corta el carrusel por medio de un tiempo que se le añade de forma aleatoria para dar la falsa ilusión de aleatoriedad. 

        var optPiedra = document.querySelector('#piedra').checked; //pone todos los typeRadio en true cuando son seleccionados y false cuando no.
        var optPapel = document.querySelector('#papel').checked;
        var optTijera = document.querySelector('#tijera').checked;
        setTimeout(() => { // ejecuta la verificacion de resultados 10 milesimas de segundo despues de cortar el carrusel
            botonJugar.removeAttribute('disabled',""); //reutizar el boton una vez acabe la animacion
            verificarResult(optPiedra, optPapel, optTijera);
        },  tiempoAleatorio + 10);

    }
        // verifica que radio button está en true y entra en el mismo.
        // una vez dentro, compara la posicion "aleatoria" donde se pare el carrusel e imprime el mensaje adecuado
     function verificarResult(optPiedra, optPapel, optTijera){
        if(optPiedra){
        	textPPT1.textContent = "Has elegido piedra"; 
            if(posImgActual == 0){
            	textPPT2.textContent = "La máquina tambien ha elegido piedra, has empatado";
            }else if(posImgActual == 1){
            	textPPT2.textContent = "La máquina ha elegido papel, has perdido";     
            }else if(posImgActual == 2){
            	textPPT2.textContent = "La máquina ha elegido tijera, has ganado";      
            }            
        } else if(optPapel){
        	textPPT1.textContent = "Has elegido papel"; 
            if(posImgActual == 1){
            	textPPT2.textContent = "La máquina tambien ha elegido papel, has empatado";     
            }else if(posImgActual == 0){
            	textPPT2.textContent = "La máquina ha elegido piedra, has ganado";     
            }else if(posImgActual == 2){
            	textPPT2.textContent = "La máquina ha elegido tijera, has perdido";      
            }
        }else if(optTijera){
        	textPPT1.textContent = "Has elegido tijera";
           if(posImgActual == 2){
           		textPPT2.textContent = "La máquina tambien ha elegido tijera, has empatado";      
            }else if(posImgActual == 1){
            	textPPT2.textContent = "La máquina ha elegido papel, has ganado";     
            }else if(posImgActual == 0){
            	textPPT2.textContent = "La máquina ha elegido piedra, has perdido";
            }
        }else{
        	
        	textPPT2.textContent = "La máquina se está molestando, no le gusta jugar sóla, elige una opción y evita una catástrofe por favor.";
        	//bodyTag.innerHTML = "<body background='P_P_T/fire.gif'></body>";
        }
    }

    function stopCarrusel(){
        clearInterval(intervalo);    
    }

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posImgActual >= IMG.length - 1) {
            posImgActual = 0;
        } else {
            posImgActual++;           
        }
        seleccionarImagen();  
    }

    /**
     * Funcion que actualiza la imagen dependiendo de posImgActual
     */
    function seleccionarImagen () {
        imagen.style.backgroundImage = `url(${IMG[posImgActual]})`;  
    }
    seleccionarImagen();