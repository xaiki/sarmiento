var express = require('express');
var app = express();
var Horarios = require('./lib/horarios.js');
var horarios = Horarios();
var trenes = null;

// refresh data every minute
// FIXME:
// this should have a cache that refreshes on new request topped at 1s
// also, it should implement a promise so we can use it safely.

setInterval (function () {
	horarios.actualizar (function (data) {
		console.log (new Date(), 'refresh');
		trenes = data;
	})
}, 60000);

app.get('/', function(req, res){
	res.send('Hello World');
});

app.get('/sarmiento/:from', function (req, res) {
	res.send('NOT IMPLEMENTED');
});

app.get('/sarmiento/:from/:to', function (req, res) {
	res.send(trenes.lista(req.params.from, req.params.to));
});

app.listen(3000);
