import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css']
})

export class ProductsCardComponent{
  @Input()
  id : number = 0
  @Input()
  title : string = ""
  @Input()
  photo : string = ""
  @Input()
  price : number = 0
  @Input()
  available : number = 0
  @Input()
  category : string = ""


  
}
