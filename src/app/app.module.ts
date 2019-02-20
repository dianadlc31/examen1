import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http'
import { Producto1Page } from '../pages/producto1/producto1';
import { FavoritosProvider } from '../providers/favoritos/favoritos';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { TabsPage } from '../pages/tabs/tabs';
import { Producto2Page } from '../pages/producto2/producto2';
import { Producto3Page } from '../pages/producto3/producto3';
import { CompuPage } from '../pages/compu/compu';
import { TrabajoPage } from '../pages/trabajo/trabajo';
import { BuscarPage } from '../pages/buscar/buscar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Producto1Page,
    FavoritosPage,
    TabsPage,
    Producto2Page,
    Producto3Page,
    CompuPage,
    TrabajoPage,
    BuscarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Producto1Page,
    TabsPage,
    Producto2Page,
    Producto3Page,
    CompuPage,
    TrabajoPage,
    BuscarPage,
    FavoritosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritosProvider
  ]
})
export class AppModule {}
