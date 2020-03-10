import { GLOBAL } from './../../services/global';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UploadService } from './../../services/upload.service';
import { TechnologicalService } from 'src/app/services/technological.service';
import { Component, OnInit } from '@angular/core';
import { Technological } from 'src/app/models/technological';

@Component({
  selector: 'app-technological-edit',
  templateUrl: './technological-edit.component.html',
  styleUrls: ['./technological-edit.component.css'],
  providers: [TechnologicalService,UploadService]
})
export class TechnologicalEditComponent implements OnInit {
  public titulo: string;
  public technological:Technological;
  public url:string;
  public errorMessage;
  public alertMessage;
  public is_edit;
  public filesToUpload: Array<File>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _technologicalService: TechnologicalService,
    private _uploadService: UploadService
  ) { 
    this.titulo = "Actualizar datos";
    this.url=GLOBAL.url;
    this.technological = new Technological('','','','','','','');
    this.is_edit=true;
  }

  ngOnInit() {
    console.log('technological-edit.component.ts cargado');
    this.getTechnological();
    console.log(this.technological);
  }

  getTechnological(){
    this._route.params.subscribe(params =>{
      let id = params['id'];
      this._technologicalService.getTechnological(id).subscribe(
        response => {
          if(response.message == 'success'){
            this.technological=response.technological;
            
          }else{
            this._router.navigate(['/']);
          }
        },
        error => {
          console.log(<any>error);
          
        });
      });        
  }
    
  onSubmit(){
    console.log(this.technological);
    this._route.params.subscribe(params =>{
      let id = params['id'];
      this._technologicalService.updateTechnological(id, this.technological).subscribe(
        response => {
          if(response.message == 'success'){
            this.alertMessage = 'Registro actualizado correctamente';
            if(!this.filesToUpload){}
            else{
              //actualizar la imagen a travésde un servicio
              this._uploadService.makeFileRequest(this.url+'uploadImageTechnological/'+
              response.technological._id, [], this.filesToUpload, 'image').then((result: any) =>{
                this.technological.image = result.image;
                this._router.navigate(['/getTechnologicals']);                        
              },
              (error) =>{console.log(error);
              });
            }
            
          }else{
            this.alertMessage='Error al actualizar';
          }           
        },
        error => {
          var errorMessage = <any>error;
          if(errorMessage != null){
            var body = JSON.parse(error._body);
            this.alertMessage = body.message;
            console.log(error);
          }
        });
      });
    }

    fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
       console.log(this.filesToUpload);
      
    }
}
