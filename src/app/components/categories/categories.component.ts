import { Component, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

@Injectable()
export class CategoriesComponent {
  
  categoryFilter : string;
  onInit(){
  }

  setValue(newValue: string): void {
    this.categoryFilter = newValue;
  } 
  getValue(): Observable<string> {
    const categoryObs =  of(this.categoryFilter);
    return categoryObs;
  }
}
