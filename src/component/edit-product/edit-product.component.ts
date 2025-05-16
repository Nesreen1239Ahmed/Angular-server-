import { routes } from './../../app/app.routes';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { IProduct } from '../../interface/iproduct';
import { ProductServicesService } from '../../app/services/product-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DynamicProductService } from '../../app/services/dynamic-product.service';

@Component({
  selector: 'app-edit-product',
  imports: [CommonModule ,FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {

  productId: string = '';
  product: IProduct = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
    imgSrc: ''
  };

  constructor(private _ActivatedRoute: ActivatedRoute,private _DynamicProductService: DynamicProductService,private _Router: Router) {}

  ngOnInit(): void {
    const id = this._ActivatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.productId = id;
      this._DynamicProductService.getById(this.productId).subscribe({
        next: (foundProduct) => {
          if (foundProduct) {
            this.product = { ...foundProduct };
          } else {
            console.error('Product not found');
            this._Router.navigate(['/products']);
          }
        },
        error: (err) => {
        
        }
      });
    } 
  }

  updateProduct() {
    this._DynamicProductService.update(this.productId, this.product).subscribe({
      next: (response) => {
        alert('Product updated successfully!');
        this._Router.navigate(['/products']);
      },
      error: (err) => {
    
      }
    });
  }

 
    
}








