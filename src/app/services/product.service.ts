import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product';
import { ProductBuy } from '../models/productsBuy.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://localhost:5210/v1/Products';

  productBuy = signal<ProductBuy[]>([]);

  productsQuantityTotal = signal<number>(0);

  constructor(private http: HttpClient) { }

  data: any;

  //gerar get e set para productBuy
  getProductBuy(): ProductBuy[] {
    return this.productBuy();
  }

  setProductBuy(product: ProductBuy): void {
    this.productsQuantityTotal.update((antigo) => antigo + product.qnt);
    this.productBuy.mutate(values => values.push(product));
  }

  getProductsQuantityTotal(): number {
    return this.productsQuantityTotal();
  }

  getProducts(): Observable<Product[]> {
    this.data = this.http.get<Product[]>(this.url);
    return this.data;
  }

  getProductById(id: number): Observable<Product> {
    this.data = this.http.get<Product>(`${this.url}/${id}`);
    return this.data;
  }

  putProductQnt(id: number | null, requested: number | null): any {
    this.http.put(`${this.url}/${id}`, requested)
  }

}
