'use strict'

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

}

function saveFavorito(req, res) {
    var params = req.body;

    res.status(200).send({
        favorito: params
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