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
  available: number= 0
  valor = 1
 
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
          this.available = data[i].available
        }
      }
    });
  }

  incrementa(){
    if(this.valor === this.available){
      alert("Quantidade máxima de produtos selecionada.")
      return;
    }else{
      this.valor++;
    }
  }
  decrementa(){
    if(this.valor === 1){
      alert("A quantidade não pode ser menor que um.")
      return;
    }else{
      this.valor--;
    }
  }

  PutQuantity(qnt : number){
    
    var produto = { requested : qnt };

    this.productsService.putProduct(this.id, produto);

  }

}
  

