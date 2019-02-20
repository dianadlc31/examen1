import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';
/**
 * Generated class for the Producto1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-producto1',
  templateUrl: 'producto1.html',
})
export class Producto1Page {
juego={}
imgs=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavoritosProvider) {
  this.juego=this.navParams.get('juego');

  if(this.juego.ad.hasOwnProperty('images')){
    this.imgs=this.juego.ad.images;
  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Producto1Page');
  }
favoritos(juego){
  this.fav.addFavoritos(juego);
}
}
