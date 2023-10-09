import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductBuy } from 'src/app/models/productsBuy.model';

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

      try {
        // consume the service and get the product by ID
        this.productService.getProductById(this.id).subscribe( value => {
          this.photo = value.photo;
          this.title = value.title;
          this.price = value.price;
          this.available = value.available;
        });
      } catch (error) {
        console.error("Error getting product by ID:", error);
      }
    }

  //funções para incrementar e decrementar a quantidade de produtos
  increment(){
    if(this.valor < this.available){
      this.valor++;
    } else {
      console.error("Não pode incrementar acima da quantidade.");
    }
  }

  decrement(){
    if(this.valor > 1){
      this.valor--;
    } else {
      console.error("Não pode decrementar abaixo de 1.");
    }
  }

  PutQuantity(qnt : number){
    try {
      // update the product quantity
      //this.productService.putProductQnt(this.id, qnt);
    } catch (error) {
      console.error("Error updating product quantity:", error);
    }
  }

  //função que salva a quantidade de produtos comprados em um serviço de contexto
  //para que possa ser acessado por outros componentes
  saveQuantityBuy(qnt : number){
    //this.PutQuantity(qnt);
    let productBuy: ProductBuy = {
      id: this.id,
      title: this.title,
      price: this.price,
      photo: this.photo,
      qnt: qnt
    } ;
    this.productService.setProductBuy(productBuy);
  }
}

