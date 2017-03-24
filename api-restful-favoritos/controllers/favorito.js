'use strict'

var Favorito = require('../models/favorito')

function prueba(req, res) {
    var name = req.params.name;

    res.status(200).send({
        data: [2, 2, 4],
        texto: 'Hola mundo con NodeJS - ' + name
    });
}

function getFavorito(req, res) {
    var favoritoId = req.params.id;

    res.status(200).send({
        data: favoritoId
    });
}

function getFavoritos(req, res) {

    Favorito.find({}).sort('-_id').exec((err, favoritos) => {
        if (err) {
            res.status(500).send({
                message: 'Error al consultar todos los favoritos'
            });
        }

        if (!favoritos) {
            res.status(404).send({
                message: 'No hay marcadores'
            });
        }

        res.status(200).send({
            favoritos: favoritos
        });
    });

}

function saveFavorito(req, res) {
    var favorito = new Favorito();
    var params = req.body;

    favorito.title = params.title;
    favorito.description = params.description;
    favorito.url = params.url;

    favorito.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({
                message: 'Error al guardar el favorito'
            });
        }

        res.status(200).send({
            favorito: favoritoStored
        });

    });

}

function updateFavorito(req, res) {
    var params = req.body;

    res.status(200).send({
        favorito: params
    });

}

function deleteFavorito(req, res) {
    var favoritoId = req.params.id;

    res.status(200).send({
        data: favoritoId
    });
}



module.exports = {
    prueba,
    getFavorito,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}