import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  id: number = 0
  photo: string = ""
  title: string = ""
  price: number = 0
  available: number= 0
  valor = 1

  constructor(private route:ActivatedRoute, private productService: ProductService){

  }

  ngOnInit():void{

      this.route.paramMap.subscribe( value =>
        this.id = Number(value.get("id"))
      );

      this.productService.getProductById(this.id).subscribe((data) => {
            this.photo = data.photo
            this.title = data.title
            this.price = data.price
            this.available = data.available
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
    this.productService.putProductQnt(this.id, qnt);
  }
}

