import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
//Importar el Service primero
import { DataService } from "../../shared/data.service";
import { Location } from "@angular/common";//Se importa el Location

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
	public product:any = {};
	
	//Se crea el atributo dataSvc de tipo DataService que es mi Service
  constructor(
  	private route:ActivatedRoute
  	,private dataSvc:DataService,
	  private location: Location) { }

  ngOnInit(): void {
  	//Esto lo que hace es recuperar el id de la ruta url
	  const productId = this.route.snapshot.paramMap.get("id");
	  //Destructuring? PARA QUE MUESTRE LO QUE HAY EN EL ARRAY
	  [this.product] = this.dataSvc.getProductById(productId);

	  
	  /*Averigua  el Id
	  console.log("productId", productId);
	  */
  }
  //Se crea el metodo para volver al home con el boton creado en details-product
  onGoBack():void{
	  this.location.back();
  }

}
