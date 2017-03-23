'use strict'

var app = require('./app');
var port = process.env.PORT || 3678;

app.listen(port, function() {
    console.log(`Api Restful favoritos arrancado en http://localhost:${port}`);
});
