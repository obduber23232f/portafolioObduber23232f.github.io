import { Error404Component } from "./error404/error404.component";
import { DetailsProductComponent } from "./products/details-product/details-product.component";



import { HomePageComponent } from "./home-page/home-page.component";
import { ProductlistComponent } from "./products/productlist/productlist.component";//Se llama el component porque no estaba ya que fue creado manual
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Navegacion y Rutas se importa y se coloca en el array de routes
const routes: Routes = [
	{path:"",component:HomePageComponent},
	{ path: "products", component: ProductlistComponent },
	{ path: "product/:id", component: DetailsProductComponent },
	{ path: "**", component: Error404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
