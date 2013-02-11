#Los trenes son de Eva y Perón

##¿Qué es ésto?

Esto es un intento de crear una API para operar con el sitio http://trenes.mininterior.gov.ar/arribos_sarmiento_.php.
Por lo pronto, no es nada mas que la aplicacion lista, sin funciones ni nada similar.


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


##¿Cuál es la idea?

Hacer una API prolija, no hardcodear código.
Ser feliz.

