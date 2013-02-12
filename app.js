var Horarios = require('./lib/horarios.js');
var horarios = Horarios();

horarios.actualizar(function(trenes) {
	console.log(trenes.proximoMoreno('LINIERS'));
	console.log(trenes.siguienteMoreno('LINIERS'));

	//Simple debug
	console.log(trenes);

});
