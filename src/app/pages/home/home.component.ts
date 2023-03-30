import { Component, Injectable } from '@angular/core';
import { Product } from '../../../models/Product';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable()
export class HomeComponent {

  constructor(private productService: ProductService){

  }
  listaProdutos: Product[] = [];
  filteredProdutos: Product[] = [];

  ngOnInit(){
    this.productService.getProducts().subscribe((data) => {
      this.listaProdutos = data;
      this.filteredProdutos = this.listaProdutos;
    });
  }

  handleFilter(category : string){
    if(category == "all") {
      this.filteredProdutos = this.listaProdutos;
    }else{
      this.filteredProdutos = this.listaProdutos.filter(t => t.category == category);
    }
  }

}
