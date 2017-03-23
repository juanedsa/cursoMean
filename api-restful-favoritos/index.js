'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3678;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/prueba:name', function(req, res) {

    var name = req.params.name;

    res.status(200).send({
        data: [2,2,4],
        texto: 'Hola mundo con NodeJS'
    });
});

app.listen(port, function() {
    console.log(`Api Restful favoritos arrancado en http://localhost:${port}`);
});
