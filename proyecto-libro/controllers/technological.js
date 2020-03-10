//CREACION CONTROLADOR (TECHNOLOGICAL)

//importar el modelo technological
var Technological = require('../models/technological');
//Crear objeto tipo Technological
//var technological = new Technological();

 var  fs=require('fs');
 var path=require('path');
/* From  */


//Funcion para agregar datos a la coleccion
//req= recibe datos, res = devuelve resultados
function addTechnological(req, res) {

  const technological = new Technological();
  var params = req.body; //contiene datos que recibe del cliente
  //Guardar los datos en los atributos asociados al modelo
  technological.name = params.name;
  technological.phone = params.phone;
  technological.email = params.email;
  technological.pageurl = params.pageurl;
  technological.address = params.address;
  technological.description = params.description;
  technological.image = 'null';

  //Guardar datos en base de datos
  technological.save((err, technologicalStored) => {
    if (err) {
      res.status(500).send({
        message: 'Error al guardar el registro'
      });
    } else {
      if (!technologicalStored) {
        res.status(404).send({
          message: 'El objeto technologicalStored no existe'
        });
      } else {
        res.status(200).send({
          message: 'success',
          technological: technologicalStored
        });
      }
    }
  });
}

function deleteTechnological(req,res){
    //buscamos el dato
	Technological.findByIdAndRemove(req.params.id,(err,technological)=>{
		if(err){
          res.status(500).send({
            message: 'Problemas al buscar el dato'
          });
        }else{
          if(!technological){
            res.status(404).send({
              message: 'Technological no existe'
            });
          }else{
            res.status(200).send({
              message: 'success',
              technological
            });
          }
        }
    });
}  

//funcion para recupera   todos   los   registros   de   la colección
function getTechnologicals(req, res) {
  var find = Technological.find({}).sort('name');
  find.exec((err, technologicals) => {
    if (err) {
      res.status(500).send({
        message: 'Error al ejecutar instruccion'
      });
    } else {
      if (!technologicals) {
        res.status(404).send({
          message: 'No se pud0 crear el objeto'
        });
      } else {
        res.status(200).send({
          message: 'success',
          technologicals: technologicals
        });
      }
    }
  });
}


function updateTechnological(req,res){
  var technologicalId=req.params.id;
  var update=req.body;
  Technological.findByIdAndUpdate(technologicalId,update,(err,technologicalUpdated)=>{
    if(err){
      res.status(500).send({
        message:'Error al actualizar los datos'});
      }else{
        if(!technologicalUpdated){
          res.status(404).send({
            message:'No se actualizaron los datos'});
          }else{
            res.status(200).send({
              message: 'success',
              technological:technologicalUpdated
            });
          }
        }
      }
    );
  }

  function getTechnological(req,res){
    //Recuperar los datos por el id de technological
    var technologicalId=req.params.id;
    //buscamos el dato
    Technological.findById(technologicalId,
      (err,technological)=>{
        if(err){
          res.status(500).send({
            message: 'Problemas al buscar el dato'
          });
        }else{
          if(!technological){
            res.status(404).send({
              message: 'Technological no existe'
            });
          }else{
            res.status(200).send({
              message: 'success',
              technological
            });
          }
        }
      });
    }

  function uploadImageTechnological(req,res){
    var technologicalId=req.params.id;
    var file_name='No subido..';
    if(req.files){
      var file_path=req.files.image.path;
      var file_split=file_path.split('\\');
      var file_name=file_split[2];
      var ext_split=file_name.split('\.');
      var file_ext=ext_split[1];
      console.log(file_split);
      if(file_ext == 'png' || file_ext == 'jpg' || file_ext == 'gif'){   
        Technological.findByIdAndUpdate(technologicalId,{
          image:file_name},
          (err,technologicalUpdated)=>{
            if(!technologicalUpdated){
              res.status(404).send({
                message:'No se ha podido actualizar la imagen'
              });
            }else{
              res.status(200).send({
                image:file_name, technological:technologicalUpdated});   
              }
            });
          }else{
            res.status(200).send({
              message:'Extensión invalida'
            });
          }
      }else{
        res.status(200).send({
          message:'No se cargó la imagen'});
      }
    }

    function getImageTechnological(req,res){
      var imageFile = req.params.imageFile;
      var path_file = './uploads/technological/' + imageFile;
      fs.exists(path_file,function(exists){
        if(exists){
          res.sendFile(path.resolve(path_file));
        }else{
          res.status(200).send({
            message:'No existe la imagen...'
          });
        }
      });
    }
//DE PRUEBA
function pruebas(req, res) {
  /*
  //funcion para guardar datos
  const technological = new Technological(req.body);
  technological.save((err, technologicalStored) => {
    if (err) {
      res.json('Error')
    } else {
      res.json('received')
    }
  });
  console.log(technological);
*/

  //funcion para listar
  var find = Technological.find({});
  find.exec((err, technologicals) => {
    if (err) {
      res.status(500).send({
        message: 'Error al ejecutar instruccion'
      });
    } else {
      res.status(200).send({
        technologicals
      });
    }

  });

}
//Exportar el modulo 
module.exports = {
  addTechnological,
  getTechnologicals,
  getTechnological,
  updateTechnological,
  uploadImageTechnological,
  getImageTechnological,
  deleteTechnological,
  pruebas
};