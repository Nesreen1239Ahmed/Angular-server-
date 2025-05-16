import { Component } from '@angular/core';
import { ProductCartComponent } from "./product-cart/product-cart.component";

@Component({
  selector: 'app-product',
  imports: [ProductCartComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

}
