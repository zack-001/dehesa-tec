//use strictsdfse

//importar paquetes

'use strict'
var mongoose = require('mongoose');
var express = require('express');
var bodyparser = require('body-parser');

//Cargar el archivo de ruta
var technological_routes = require('./routers/technological');

//Crea objeto de tipo express
var app = express();

//asociar express con bodyparser a express
app.use(bodyparser.urlencoded({
  extended: false
}));
app.use(bodyparser.json());

//Configurar la cabeceras http del objeto express
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


//asociar objeto rutas a express
app.use(technological_routes);
//exportar el modulo app
module.exports = app;