import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Producto3Page } from '../producto3/producto3';
import { BuscarPage } from '../buscar/buscar';
import { FavoritosPage } from '../favoritos/favoritos';

/**
 * Generated class for the TrabajoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trabajo',
  templateUrl: 'trabajo.html',
})
export class TrabajoPage {
mascotas=[];
mascota=Producto3Page;
Searchbar=BuscarPage;
favoritosP=FavoritosPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
    this.http.get('/v1/nga/api/v1/public/klfst?&category=4020&offset=1&lim=29&lang=es')
    .subscribe (data=>{
      if (data.hasOwnProperty('list_ads')){
        this.mascotas=data.list_ads;
    }});
    error=>
    {
      console.log(JSON.stringify(error));
    }
    }
  


  ionViewDidLoad() {
    console.log('ionViewDidLoad TrabajoPage');
  }
  verProducto(mascota){
    this.navCtrl.push(this.mascota,{mascota:mascota});
  }
  buscar(){
    this.navCtrl.push(this.Searchbar, {producto:this.mascotas});
  }
  favoritos(){
    this.navCtrl.push(this.favoritosP);
  }
}
