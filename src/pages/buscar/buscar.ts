import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TrabajoPage } from '../trabajo/trabajo';
import { CompuPage } from '../compu/compu';
import { Producto2Page } from '../producto2/producto2';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {
producto=[];
items=[];
compu=Producto2Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.producto=this.navParams.get('producto');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }
  getItems(ev:any){
    console.log(ev.target.value);
   this.items=this.producto.filter(juego => 
    {return juego.ad.subject.toLowerCase(). includes(ev.target.value.toLowerCase());
    }
    );
}
verProducto(item){
  this.navCtrl.push(this.compu, {compu:item});
}
}
