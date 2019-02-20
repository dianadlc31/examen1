import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Producto1Page } from '../producto1/producto1';
import { BuscarPage } from '../buscar/buscar';
import { FavoritosPage } from '../favoritos/favoritos';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
juegos=[];
Juego=Producto1Page;
Searchbar=BuscarPage;
favoritosP=FavoritosPage;
  constructor(public navCtrl: NavController, public http:HttpClient, public fav: FavoritosProvider) {
this.http.get('/v1/nga/api/v1/public/klfst?&category=5060&offset=1&lim=29&lang=es')
  .subscribe (data=>{
   if (data.hasOwnProperty('list_ads')){
     this.juegos=data.list_ads;
   }
  }),
  error=> {
    console.log(JSON.stringify(error));
  }
}
verProducto(juego){
  this.navCtrl.push(this.Juego,{juego:juego});
}
buscar(){
  this.navCtrl.push(this.Searchbar, {producto:this.juegos});
}
favoritos(){
  this.navCtrl.push(this.favoritosP);
}
}
