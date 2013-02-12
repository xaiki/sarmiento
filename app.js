var Horarios = require('./lib/horarios.js');
var horarios = Horarios();

horarios.actualizar(function(trenes) {
	console.log(trenes.proximoMoreno('LINIERS'));
	console.log(trenes.siguienteMoreno('LINIERS'));

	console.log(trenes.proximoOnce('LINIERS'));
	console.log(trenes.siguienteOnce('LINIERS'));

	//Simple debug
	console.log(trenes);

});
