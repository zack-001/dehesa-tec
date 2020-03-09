//import { ViewTechnologicalPage } from './../view-technological/view-technological.page';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {NavController, ModalController, ToastController} from '@ionic/angular';
import { Proveedor1Service } from '../services/proveedor1.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public id;
  public url;
  technologicals;
  constructor(
    public navCtrl: NavController,
    public proveedor: Proveedor1Service,
    private _modal: ModalController,
    public http: HttpClient,
    public toastCtrl: ToastController,
    public _router: Router
  ){}

    ngOnInit(){
      console.log('Iniciando home page');
      /*this.proveedor.obtenerDatos().subscribe(
        (response:any) =>{
          console.log(response.technologicals);
          this.technologicals = response.technological;
        },
        (error:any)=>{
          console.log(<any>error);
        }
      );*/
    }


    /*async viewRecord(item: any) {
      let modal = await this._modal.create({
        component: ViewTechnologicalPage,
        componentProps: { record : item }});
        await modal.present();
    }*/

    /*deleteRecord(item : any) { 
      let id    : string= item._id;
      this.http.delete('http://localhost:3977/controller-technological-deleteTechnological/' + id).subscribe((response: any) =>{
        if(response.technological){
          let toast = await this.toastCtrl.create({message: 'Registro borrado ',duration: 3000});
          toast.present();
        }
      },(error : any) =>{console.dir(error);});
    }*/
    
    /*updateRecord(item : any){
      this._router.navigate(['update-technological', {record : item}]);
    }
      
    addRecord(){
      this._router.navigate(['add-technological']);
    }*/
  }


