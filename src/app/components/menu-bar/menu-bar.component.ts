import { Component, effect } from '@angular/core';
import { ProductBuy } from 'src/app/models/productsBuy.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  // chamar o serviço de produtos e buscar o productsBuy
  productsBuy: ProductBuy[] = [];
  quantityBuy: number;

  constructor(public productsService: ProductService) {
    effect(() => {
      this.productsBuy = this.productsService.getProductBuy();
      this.quantityBuy = this.productsService.getProductsQuantityTotal();
      console.log(this.productsBuy);
    });
  }
}
