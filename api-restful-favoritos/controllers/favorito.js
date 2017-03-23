'use strict'

function prueba(req, res) {

    var name = req.params.name;

    res.status(200).send({
        data: [2,2,4],
        texto: 'Hola mundo con NodeJS - ' + name
    });
}




module.exports = {
    prueba
}