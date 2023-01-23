import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  
  id:null| number = 0
  photo:string = ""
  title:string = ""
  price:number = 0
  category = ""
 
  constructor(private route:ActivatedRoute, private productsService: ProductsService){
   
  }
  

 
  ngOnInit():void{
    
    this.route.paramMap.subscribe( value =>
      this.id = Number(value.get("id"))
    )
    
    this.productsService.getPosts().subscribe((data) => {
      for(let i = 0; i < data.length; i++) {
        if(data[i].id == this.id) {
          this.title = data[i].title
          this.price = data[i].price
          this.photo = data[i].photo
        }
      }
    });
  }

  PutQuantity(){

    var produto = { requested : 1 };

    this.productsService.putProduct(this.id, produto);

  }

}
  

