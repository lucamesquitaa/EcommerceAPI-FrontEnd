import { Component, signal } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { FilterService } from 'src/app/services/filter.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent {

  constructor(public filterService : FilterService ){}

  onInit(){
  }

  //criar uma função que atualiza o valor da categoria
  updateCategory(category: string){
    this.filterService.setVariable(category);
  }
}
