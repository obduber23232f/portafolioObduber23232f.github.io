import { Component ,Input} from "@angular/core";//Se llama el Input para que se comunique entre componentes

@Component({
	selector:"app-product",
	template:`
	<h2>Name: 
	<a [routerLink]="['/product',product.id]">{{product.name}}</a>
	</h2>
	<div>Price:{{product.price}}</div>

	`,
})

export class ProductComponent{
	@Input() product;
}