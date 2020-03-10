//MODELO *TECHNOLOGICAL*

//importa paquete mongoose
var mongoose = require('mongoose');
//Definir un objeto  de tipo esquema de mongoose
var Schema = mongoose.Schema;
//Definir un objeto de tipo esquema con atributos correspodientes
var TechnologicalSchema = Schema({
  name: String,
  phone: String,
  email: String,
  pageurl: String,
  address: String,
  description: String,
  image: String
});
//Exportar modulo
module.exports = mongoose.model('Technological', TechnologicalSchema);