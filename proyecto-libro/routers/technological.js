// CREACION DE RUTAS (TECHNOLOGICAL)

//Cargar el paquete express
var express = require('express');
//Definir objeto para el controlador technological
var TechnologicalController = require('../controllers/technological');
//Crear objeto del tipo Router de express
var api = express.Router();
//Definir una ruta aplicando el metodo post para la inserccion de datos
//Como parametros recibira, nombre de la ruta para el cliente, seguido de funcion de referencia
//api.post('/controller-technological-addTechnological', TechnologicalController.addTechnological);

//api.get('/controller-technological-getTechnologicals', TechnologicalController.getTechnologicals);

api.get('/listar', TechnologicalController.getTechnologicals); //PRUEBA
api.get('/getTechnological/:id', TechnologicalController.getTechnological); //PRUEBA
api.post('/', TechnologicalController.addTechnological); //PRUEBA
api.put('/updateTechnological/:id',TechnologicalController.updateTechnological);
api.delete('/delete/:id', TechnologicalController.deleteTechnological);

var multipart= require('connect-multiparty');
var md_upload=multipart({uploadDir:'./uploads/technological'});
api.post('/uploadImageTechnological/:id',[md_upload],TechnologicalController.uploadImageTechnological);
api.get('/getImageTechnological/:imageFile',TechnologicalController.getImageTechnological);

//api.get('/', TechnologicalController.getTech);
//Exportar el modulo
module.exports = api;