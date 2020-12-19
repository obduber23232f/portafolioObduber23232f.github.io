import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	//Creacion de array de products con objetos adentro
	private products = [
		{
			id: 1,
			name: "egg",
			category: "food",
			description: "Lorem egg",
			price: `${1}$`,
		},
		{
			id: 2,
			name: "CocaCola",
			category: "Drink",
			description: "Lorem Drink",
			price: `${1}$`,
		},
		{
			id: 3,
			name: "Cookies",
			category: "Food",
			description: "Lorem Cookies",
			price: `${2}$`,
		}
	];

	getAllProduct(){
		//Retornara el array de productos disponible para todos los componentes
		return this.products;
	}

	getProductById(id){
		//Buscar el id pasado por parametro en el array
		return this.products.filter((product) => product.id == id)
	}

}
