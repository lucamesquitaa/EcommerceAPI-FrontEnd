import { Component, Injectable } from '@angular/core';
import { Products } from '../../../models/Products';
import { ProductsService } from '../../services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable()
export class HomeComponent {

  constructor(private productsService: ProductsService){
    
  }
  listaProdutos: Products[] = [];
  filteredProdutos: Products[] = [];
  
  ngOnInit(){
    this.productsService.getPosts().subscribe((data) => {
      this.listaProdutos = data;
      this.filteredProdutos = this.listaProdutos;
    });
  
  }

  handleFilter(category : string){
    if(category == "nofilter") {
      this.filteredProdutos = this.listaProdutos;
    }else{
      this.filteredProdutos = this.listaProdutos.filter(t => t.category == category);
    }
  }
 
}
