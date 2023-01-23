import { Component } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent {
  
  constructor(private homeComponent : HomeComponent ){}
  
  onInit(){
  }
  setFilter(category : string){
    this.homeComponent.handleFilter(category);
  }
}
