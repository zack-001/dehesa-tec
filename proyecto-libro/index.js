var mongoose = require('mongoose');
var app = require('./app');
var morgan = require('morgan');
var port = process.env.PORT || 3977;
//var express = require('express');
//app = express();

app.use(morgan('dev'));
//app.use(bodyParser.json())- app.use(express.json())


//app.use(require('./routers/technological'));-tutorial

mongoose.connect('mongodb://127.0.0.1:27017/libro', function(err, res) {
  if (err) {
    throw err;
  } else {
    console.log('Conectado a la base de datos'); //poner el servidor a esuchar peticiones
    app.listen(port, function(err, res) {
      if (!err) {
        console.log("servidor activo en http://localhost:" + port);
      }
    });
  }
});

/*mongoose.connect('mongodb://127.0.0.1:27017/libro', {
  useNewUrlParser: true
}, function(err, res) {
  if (err) {
    throw err;
  } else {
    console.log('*---Conectado a la base de datos---*');
    //Servidor escuchando peticiones
    app.listen(port, function(err, res) {
      if (!err) {
        console.log('Servidor activo en http://localhost:' + port);
      }
    });
  }

});*/