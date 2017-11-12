/* jshint browser: true */

var player = "X"; // Var para el jugador
var counter = 0; // Var para los clics

// La funcion para el boton jugar
var play = function(){ 
    // Abre div container y setea jugador activo
	var name1 = document.getElementById('nameX').value;
	var name2 = document.getElementById('nameO').value;

    if( name1 === '' || name2 === '' ){
        //document.getElementById('container').classList.add('display-none');
		alert('Por favor llene los nombres');
		return;
	}
    
	document.getElementById('player'+ player).classList.add('activo');
    document.getElementById('container').classList.remove('display-none');
};
console.log(play);

 // Funcion llenar el X/O dependiendo del turno del jugador
var setSymbol = function( me ) {
    console.log( me );
	var box = document.getElementById('box'+me);
	if( box.textContent === ""){
		// Poniendo a los tds, la variable del jugador actual
        document.getElementById('player'+player).classList.remove('activo');
		// Seteando en box
		box.innerHTML = player; // SETEO X o O
		document.getElementById('input-'+player+me).value = 1;

		counter++;
		console.log( counter );
        //Escribir X u O
        if( counter >= 5 ){
            validate( player );
		}
		if( player == 'X' ){
			player = "O";
		} else { // Sino sera O
			player = "X";
		}
        document.getElementById('player'+player).classList.add('activo');  
	}
   
};
console.log(setSymbol);

var validate = function( player ){
    

	var name = document.getElementById('name'+player).value;

	var input1 = document.getElementById('input-'+player+1).value;
	var input2 = document.getElementById('input-'+player+2).value;
	var input3 = document.getElementById('input-'+player+3).value;
	var input4 = document.getElementById('input-'+player+4).value;
	var input5 = document.getElementById('input-'+player+5).value;
	var input6 = document.getElementById('input-'+player+6).value;
	var input7 = document.getElementById('input-'+player+7).value;
	var input8 = document.getElementById('input-'+player+8).value;
	var input9 = document.getElementById('input-'+player+9).value;

	
    if( ( input1 * input2 * input3 ) == 1 ){
		alert('Bien ' + name + ' ganaste!!');
		return;
	}
	if( ( input4 * input5 * input6 ) == 1 ){
		alert('Bien ' + name + ' ganaste!!');
		return;
	}
	if( ( input7 * input8 * input9 ) == 1 ){
		alert('Bien ' + name + ' ganaste!!');
		return;
	}
	if( ( input1 * input4 * input7 ) == 1 ){
		alert('Bien ' + name + ' ganaste!!');
		return;
	}
	if( ( input2 * input5 * input8 ) == 1 ){
		alert('Bien ' + name + ' ganaste!!');
		return;
	}
	if( ( input3 * input6 * input9 ) == 1 ){
		alert('Bien ' + name + ' ganaste!!');
		return;
	}
	if( ( input1 * input5 * input9 ) == 1 ){
		alert('Bien ' + name + ' ganaste!!');
		return;
	}
	if( ( input3 * input5 * input7 ) == 1 ){
		alert('Bien ' + name + ' ganaste!!');
		return;
	}
	if( counter == 9 ){
		alert('EMPATEE');
	}
};

//Funcion para el boton reset 
var reset = function(){
   
	var elem = document.getElementsByClassName('board-cell');
    // Recorremos todas las celdas 
	for( var i=0; i<elem.length;i++ ){
        // borrara el contenido y añadira a celda vacia
		elem[i].innerHTML = ''; 
		console.log( elem[i] );
        // removera la clase activo e inicia con el jugador 1
		document.getElementById('player'+player).classList.remove('activo');
		player = "X";
		document.getElementById('player'+player).classList.add('activo');
	}
    
	var inputs = document.getElementsByClassName('inputs');
    // Recorremos todos los inputs para que vuelvan al valor 0
	for( var j=0; j<inputs.length;j++ ){
		inputs[j].value = 0;
	}
    
	counter = 0;
};

console.log(reset);

