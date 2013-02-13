var express = require('express');
var fs = require('fs');
var app = express();
var Horarios = require('./lib/horarios.js');
var horarios = Horarios();
var trenes = null;
var readme = null;

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

// real dumb caching of README.md
app.get('/', function(req, res){
	if (! readme) {
		fs.readFile(__dirname + '/README.md', 'UTF-8', function (err, data) {
			if (err) throw err;
			readme = data;
			res.send (data);
		});
	} else {
		res.send(readme);
	}
});

app.get('/sarmiento/:from', function (req, res) {
	res.send('NOT IMPLEMENTED');
});

app.get('/sarmiento/:from/:to', function (req, res) {
	res.send(trenes.lista(req.params.from, req.params.to));
});

app.listen(3000);
