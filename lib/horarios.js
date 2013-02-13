var request = require('request');
var estaciones = require('./estaciones.json');

var trenesObj = {
	estaciones: '',
	lista:     function (desde, a) { return estaciones[desde][a]},
	proximo:   function (desde, a) { return this.lista (desde, a)[0]},
	siguiente: function (desde, a) { return this.lista (desde, a)[1]},

	// old API
	proximoMoreno:   function (e)  { return this.proximo   (e, 'MORENO')},
	siguienteMoreno: function (e)  { return this.siguiente (e, 'MORENO')},

	proximoOnce:     function (e)  { return this.proximo   (e, 'ONCE')},
	siguienteOnce:   function (e)  { return this.siguiente (e, 'ONCE')},
}

function Horarios(estacion) {

	var keyRaw = "v#v#wYtxmbj#1GZyklj#sxmWUV0djp3Z1IGSCBTW6hWcNdEj#2lFVZNyZ";
	var key = encodeURIComponent(keyRaw); //Cada key esta enlazada con el PHPSESSID
	var url = "http://trenes.mininterior.gov.ar/ajax_arribos_sarmiento.php?rnd=1&key="+key;

	var j = request.jar();
	var cookie = request.cookie('PHPSESSID=rigfgvb9ee10s89lptc8j0hoa6'); //Hardcoding a full

	j.add(cookie);


	function actualizar(cb) {

		request({url: url, jar: j}, function (error, response, body) {
					if (!error && response.statusCode == 200) {
					var horarios = body.split("_");
					horarios.shift(); // el primero no sirve
					for (estacion in estaciones) { // hardcodeado, ya que no tenemos mas info
						estaciones[estacion] = {'MORENO': horarios.splice(0, 3),
									'ONCE'  : horarios.splice(0, 3)};
					}

					var trenes = Object.create(trenesObj);
					trenes.estaciones = estaciones;

					cb(trenes);
        		}

    	})

	}

	return {
		actualizar: actualizar

	};
}

module.exports = Horarios;
