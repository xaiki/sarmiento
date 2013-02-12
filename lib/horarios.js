var request = require('request');
var estaciones = require('./estaciones.json');

var trenesObj = {
	estaciones: '',
	proximoMoreno: function (e) { return estaciones[e][0]; },
	siguienteMoreno: function (e) { return estaciones[e][1]; },

	proximoOnce: function(e) { return estaciones[e][5];},
	siguienteOnce: function(e) { return estaciones[e][6];}
}

function Horarios() {

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

					var k = 1;
					var step = 6;
					for (estacion in estaciones) {
						for(var i = k; i < (k+step); i++) {
							estaciones[estacion].push(horarios[i]);
						}

						k += step;
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
