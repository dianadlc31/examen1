import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Producto2Page } from '../producto2/producto2';
import { BuscarPage } from '../buscar/buscar';
import { FavoritosPage } from '../favoritos/favoritos';

/**
 * Generated class for the CompuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compu',
  templateUrl: 'compu.html',
})
export class CompuPage {
compus=[];
compu= Producto2Page;
Searchbar=BuscarPage;
favoritosP=FavoritosPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
    this.http.get('/v1/nga/api/v1/public/klfst?&category=5020&offset=1&lim=29&lang=es')
  .subscribe (data=>{
    if (data.hasOwnProperty('list_ads')){
      this.compus=data.list_ads;
  }});
  error=>
  {
    console.log(JSON.stringify(error));
  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompuPage');
  }

  verProducto(compu){
    this.navCtrl.push(this.compu,{compu:compu});
  }
  buscar(){
    this.navCtrl.push(this.Searchbar, {producto:this.compus});
  }
  favoritos(){
    this.navCtrl.push(this.favoritosP);
  }
}
