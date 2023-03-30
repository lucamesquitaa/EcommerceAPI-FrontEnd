import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product';


@Injectable({
	providedIn:  'root'
})
export class ProductService {

	private url = 'http://localhost:5210/v1/Products';

	constructor(private http: HttpClient) { }

	data:any;

	getProducts() : Observable<Product[]>{
		this.data = this.http.get<Product[]>(this.url);
		return this.data;
	}

  getProductById(id: number) : Observable<Product>{
    this.data = this.http.get<Product>(`${ this.url }/${id}`);
		return this.data;
  }

	putProductQnt(id: number|null, requested:number|null) : any{
		this.http.put(`${ this.url }/${id}`, requested)
		.subscribe(
		  result => {
			console.log('Produto alterado com sucesso.')
		  },
		  error => {
			switch(error.status) {
			  case 400:
				console.log(error.error.mensagem);
				break;
			  case 404:
				console.log('Produto não localizado.');
				break;
			}
		  }
		);
	}

}
