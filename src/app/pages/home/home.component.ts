import { Component, Injectable, effect } from '@angular/core';
import { Product } from '../../../models/Product';
import { ProductService } from '../../services/product.service';
import { FilterService } from 'src/app/services/filter.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable()
export class HomeComponent {

  filtro: string;

  constructor(private productService: ProductService, public filterService : FilterService){
    //criar um evento que busca o valor da categoria no filterService
    effect(() => {
      this.filtro = this.filterService.getVariable();
      this.handleFilter(this.filtro);
    })
  }

  listaProdutos: Product[] = [];
  filteredProducts: Product[] = [];

  ngOnInit(){
    this.productService.getProducts().subscribe((data) => {
      this.listaProdutos = data;
      this.filteredProducts = data;
    });
  }

  //atualizar a lista de produtos filtando por categoria preciso utilizar a this.listaProdutos e não chamar o productService novamente
  handleFilter(category : string){
    //se for all ele retorna a lista completa
    if(category == "all"){
      this.filteredProducts = this.listaProdutos;
      return;
    }else{
      this.filteredProducts = this.listaProdutos.filter(x => x.category == category);
    }
  }

}
