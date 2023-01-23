import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../../models/Products';


@Injectable({
	providedIn:  'root'
})
export class ProductsService {

	private url = 'http://localhost:5210/v1/Products';

	constructor(private http: HttpClient) { }

	data:any;

	getPosts() : Observable<Products[]>{
		this.data = this.http.get<Products[]>(this.url);
		return this.data;
	}
	
	putProduct(id: number|null, produto:any) : any{
		this.http.put(`${ this.url }/${id}`, produto)
		.subscribe(
		  resultado => {
			console.log('Produto alterado com sucesso.')
		  },
		  erro => {
			switch(erro.status) {
			  case 400:
				console.log(erro.error.mensagem);
				break;
			  case 404:
				console.log('Produto não localizado.');
				break;
			}
		  }
		);
	}

}