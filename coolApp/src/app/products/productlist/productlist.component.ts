import { Component, OnInit } from '@angular/core';
import { DataService } from "../../shared/data.service";
@Component({
	selector: 'app-productlist',
	templateUrl: './productlist.component.html',
	styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
	public products = [];
	//Se inyecta en el constructor el service
	constructor(private dataSvc:DataService) { }

	ngOnInit(): void {
		this.products = this.dataSvc.getAllProduct();
	}

}
