import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the FavoritosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritosProvider {
favoritos=[];
  constructor(public toastCtrl:ToastController) {
    console.log('Hello FavoritosProvider Provider');
  }
  addFavoritos(juego)
  {
    this.favoritos.push (juego);
      const toast = this.toastCtrl.create({
        message: 'Producto agregado a favoritos',
        duration: 3000,
        position:'top'
      });
      toast.present();
  }
  getFavoritos(){
    return this.favoritos;
  }
}
