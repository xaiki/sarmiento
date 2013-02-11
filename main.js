var request = require('request');

var estaciones = {
		"ONCE": [],
		"CABALLITO": [],
		"FLORES": [],
		"FLORESTA": [],
		"VILLA LURO": [],
		"LINIERS": [],
		"CIUDADELA": [],
		"RAMOS MEJIA": [],
		"HAEDO": [],
		"MORON": [],
		"CASTELAR": [],
		"ITUZAINGO": [],
		"SAN ANTONIO DE PADUA": [],
		"MERLO": [],
		"PASO DEL REY": [],
		"MORENO": []
}


var key = encodeURIComponent("v#v#wYtxmbj#1GZyklj#sxmWUV0djp3Z1IGSCBTW6hWcNdEj#2lFVZNyZ"); //Cada key esta enlazada con el PHPSESSID
var url = "http://trenes.mininterior.gov.ar/ajax_arribos_sarmiento.php?rnd=1&key="+key;

var j = request.jar();
var cookie = request.cookie('PHPSESSID=rigfgvb9ee10s89lptc8j0hoa6'); //Hardcoding a full


j.add(cookie);
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

	console.log(estaciones);

//	for(estacion in estaciones) {
//		console.log("\nEstacion "+estacion);
//		console.log("\tA Moreno ");
//		console.log("\t\t"+estaciones[estacion][0]);
//		console.log("\t\t"+estaciones[estacion][1]);
//		console.log("\t\t"+estaciones[estacion][2]);
//		console.log("\tA Once ");
//		console.log("\t\t"+estaciones[estacion][3]);
//		console.log("\t\t"+estaciones[estacion][4]);
//		console.log("\t\t"+estaciones[estacion][5]);
//	}
//
	console.log(estaciones["MERLO"]);
  }

})

