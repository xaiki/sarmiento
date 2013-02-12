#Los trenes son de Eva y Perón

##¿Qué es ésto?

Esto es un intento de crear una API para operar con el sitio http://trenes.mininterior.gov.ar/arribos_sarmiento_.php.
Hay una API muy básica ahora mismo.


##¿Cómo funciona?

El sitio http://trenes.mininterior.gov.ar/arribos_sarmiento_.php, brinda una cookie con el ID de la sesión de PHP.
Este ID hace que el parámetro key (un parametro pasado por GET al PHP) sea uno solo posible por cada PHPSESSID, 
por tal motivo lo hardcodee.
Devuelve un string, con los minutos, separados por "_",.
Los tres primeros (proximo, siguiente, siguiente al siguiente) valores son en un sentido (a Moreno) y los otros 
tres son en el otro sentido (a Once).


##¿Qué necesito?

	Node.js
	request (https://github.com/mikeal/request)


##¿Hay algún ejemplo?

	var Horarios = require('./lib/horarios.js');
	var horarios = Horarios();

	horarios.actualizar(function(trenes) {
		console.log(trenes.proximoMoreno('LINIERS'));
		console.log(trenes.siguienteMoreno('LINIERS'));
	});


La funcion 'actualizar', es la función principal, ejecuta un callback que tiene como argumento un objeto que posee metodos 
para pedir los proximos trenes especificando el nombre de la estación.

###trenes.proximoMoreno('ESTACION')
Trae el proximo tren a Moreno

###trenes.siguienteMoreno('ESTACION')
Trae el siguiente al próximo, en sentido Moreno

###trenes.proximoOnce('ESTACION')
Trae el próximo a Once

###trenes.siguienteOnce('ESTACION')
Trae el siguiente al proximo, en sentido Once


##¿Cómo lo pruebo?

	node app.js


##¿Cuál es la idea?

*Hacer una API prolija.
*No hardcodear código.
*Normalizar los nombres de las estaciones
*Ser feliz.

