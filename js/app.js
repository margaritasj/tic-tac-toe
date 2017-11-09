var player = "X";
//var counter = 0;

// Abre div container y setea jugador activo
var play = function(){ 

	var name1 = document.getElementById('nameX').value;
	var name2 = document.getElementById('nameO').value;
// div container se mantendra oculto hasta que se que ingresen los nombres
	if( name1 == '' || name2 == '' ){
        
		document.getElementById('container').classList.add('display-none');
		alert('Por favor llene los nombres');
		return;
	}

	document.getElementById('player'+player).classList.add('activo');
    document.getElementById('container').classList.remove('display-none');

};

