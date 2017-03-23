'use strict'

var express = require('express');
var FavoritoController = require('../controllers/favorito');
var api = express.Router();

api.get('/prueba/:name?', FavoritoController.prueba);

module.exports = api;