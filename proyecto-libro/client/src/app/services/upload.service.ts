import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {GLOBAL} from './global';
import {Technological} from '../models/Technological';

@Injectable()
export class UploadService{
    public url: string;
    
    constructor(private _http:HttpClient){
        this.url = GLOBAL.url;
    }
    makeFileRequest(
        url: string,   
        params: Array<string>,   
        files: Array<File>, 
        name: string){   
    //peticion ajax
    return new Promise(function(resolve, reject){
        var formData:any = new FormData();  
        //simular el comportamiento de un formulario normal
        var xhr = new XMLHttpRequest();
        //hacer las peticionesajax de javascript tipica
        for(var i = 0; i < files.length; i++){
            //image es un name para cada imagen
            formData.append(name, files[i], files[i].name);
        }//si esta lista la peticion para realizar
        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4){
                //el 4 es un status 200
                if(xhr.status == 200){
                //la respuesta parseada que recibimos al enviar este archivo
                resolve(JSON.parse(xhr.response));
                }else{
                    reject(xhr.response);
                }
            }     
        }
    
        //lanzar la petición ajax
        xhr.open('POST', url, true);  
            xhr.send(formData);
        });
    }
}    