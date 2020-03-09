import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class Proveedor1Service {

  constructor(public http: HttpClient) {
    console.log('Hello Proveedor1Provider Provider');
   }
   obtenerDatos(){return this.http.get('http://localhost:3977/listar');    
  }
}
