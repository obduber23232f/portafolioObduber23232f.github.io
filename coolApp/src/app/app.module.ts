import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/products.component';//Importando el componente creado en la carpeta products
import { HomePageComponent } from './home-page/home-page.component';
import { Error404Component } from './error404/error404.component';
import { DetailsProductComponent } from './products/details-product/details-product.component';
import { ProductlistComponent } from './products/productlist/productlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,//Se coloca el componente en declarations para que lo reconozca y se ueda usar en todos los componentes
    HomePageComponent,
    Error404Component,
    DetailsProductComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
