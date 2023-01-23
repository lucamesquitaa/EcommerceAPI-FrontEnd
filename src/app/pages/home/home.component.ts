import { Component } from '@angular/core';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { Products } from '../../../models/Products';
import { ProductsService } from '../../services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private productsService: ProductsService, private suaClasse: CategoriesComponent){
    this.suaClasse = suaClasse;
  }
  listaProdutos: Products[] = [];
  filteredValues : Products[] = [];
  
  ngOnInit(){
    this.productsService.getPosts().subscribe((data) => {
      this.listaProdutos = data;
      this.filteredValues = this.listaProdutos;
    });
    this.suaClasse.getValue().subscribe((category) => {
      if(category == null) {
          this.filteredValues = this.listaProdutos;
        }else{
          this.filteredValues = this.listaProdutos.filter(t => t.category == category);
        }
      }
    );
  }
 
}
