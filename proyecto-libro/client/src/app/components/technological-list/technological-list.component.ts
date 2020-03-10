import { GLOBAL } from './../../../../../client-old/src/app/service/global';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Technological } from 'src/app/models/technological';
import { TechnologicalService } from 'src/app/services/technological.service';

@Component({
  selector: 'app-technological-list',
  templateUrl: './technological-list.component.html',
  styleUrls: ['./technological-list.component.css'],
  providers: [TechnologicalService]
})
export class TechnologicalListComponent implements OnInit {

  public titulo: string;
  public technologicals:Array<Technological>
  public url:string;
  public alertMessage;
  public component;
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _technologicalService: TechnologicalService
    ){
      this.titulo = "Datos de tecnologicos";
      this.url=GLOBAL.url;
    }
  ngOnInit() {
    console.log('technological-list.component.ts cargdo');
    this.getTechnologicals();

  }
  getTechnologicals(){
    this._technologicalService.getTechnologicals().subscribe(
      response=> {
        console.log(response)
        if(response.message == 'success'){
          this.technologicals=response.technologicals;         
        }else{
          this._router.navigate(['']);
        }
      },
      error=> {
          console.log(<any>error);
      });
  }
}
