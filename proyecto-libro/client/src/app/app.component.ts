import { TechnologicalService } from './services/technological.service';
import { Component } from '@angular/core';
import { Technological } from './models/technological';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TechnologicalService] //agregar
})
export class AppComponent {
  title = 'Registro';
  public technological: Technological;
  public errorMessage;
  public alertMessage: string;
  public url;


  constructor(private _technologicalService: TechnologicalService){
    this.technological = new Technological('','','','','','','');
    this.url= GLOBAL.url;
  }

  ngOnInit(){
    console.log('app.component cargando');
  }
  onSubmit(){
    console.log(this.technological);
    this._technologicalService.addTechnological(this.technological).subscribe(
      response =>{
        console.log(response);
        if(response.message=='success'){
          this.alertMessage = 'Registro Guardado!';
          this.technological= response.technological;
          
        } else {
          this.alertMessage = 'Error en el registro de datos';
        }
      },
      error => {
        console.log(<any>error);
        this.errorMessage = 'error';
      }
    );
  }

}

