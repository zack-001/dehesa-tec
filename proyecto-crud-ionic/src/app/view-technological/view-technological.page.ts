import { NavController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
//import { ViewController } from '@ionic/core';


@Component({
  selector: 'view-technological',
  templateUrl: './view-technological.page.html',
  styleUrls: ['./view-technological.page.scss'],
})
export class ViewTechnologicalPage implements OnInit {
  public name:string;
  public phone:string;
  public email:String;
  public pageurl:String;
  public address:String;
  public description:String;
  public image:String;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    //private _view: ViewController
  ) { }

  ngOnInit() {
    console.log('ionViewDidLoad ViewTechnologicalPage');
    this.name=this.navParams.data.record.name;
    this.phone=this.navParams.data.record.phone;
    this.email=this.navParams.data.record.email;
    this.pageurl = this.navParams.data.record.pageurl;
    this.address =this.navParams.data.record.address;
  this.description=this.navParams.data.record.description;
  this.image=this.navParams.data.record.image;
  }

}

