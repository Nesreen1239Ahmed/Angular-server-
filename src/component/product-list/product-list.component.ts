
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interface/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DynamicProductService } from '../../app/services/dynamic-product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products!:IProduct[];
  filteredProducts: IProduct[] = [];
  searchTerm: string = '';
  constructor(private _DynamicProductService:DynamicProductService){}

  ngOnInit(): void {

    this._DynamicProductService.getAll().subscribe({
      next:(response)=>{
        console.log(response);
        this.products = response;
         this.filteredProducts = [...this.products];
        
      },
      error:(error)=>{
        console.log(error);
        
      }

    })
      
  }

  deleteProduct(productId:any){
    console.log(productId);
    this._DynamicProductService.delete(productId).subscribe({
      next:(response)=>{
        this.products = this.products.filter(
          (product)=> product.id != productId
        )
      }
    })
    

  }

  filterProducts()
  {
    this.filteredProducts = this.products.filter(
      product => product.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }


 }




