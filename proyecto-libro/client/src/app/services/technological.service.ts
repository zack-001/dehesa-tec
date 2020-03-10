import { GLOBAL } from './global';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Technological} from '../models/technological';

@Injectable()
export class TechnologicalService{
  public url: string;
  
  constructor(private _http:HttpClient){
    this.url = GLOBAL.url;
  }


  addTechnological(technological:Technological):Observable<any>{
    let json = JSON.stringify(technological);
    let params = json;
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'',params, {headers: headers});
    
  }

  getTechnologicals(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'listar', {headers: headers});       
  }

  getTechnological(id: string): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'getTechnological/'+id, {headers: headers});}

  updateTechnological(id: string, technological:Technological): Observable<any>{
    let json = JSON.stringify(technological);
    let params = json;
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url + 'updateTechnological/'+id,params,{headers:headers});
  }

  getTech(){
    return this._http.get('http://localhost:3977/');
  }
}
