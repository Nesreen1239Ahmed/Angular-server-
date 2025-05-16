import { IProduct } from './../../interface/iproduct';
import { ActivatedRoute } from '@angular/router';
import { ProductServicesService } from './../../app/services/product-services.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicProductService } from '../../app/services/dynamic-product.service';


@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  product:any;
  productId:any;


  constructor(private _ActivatedRoute:ActivatedRoute,private _DynamicProductService:DynamicProductService){}

  ngOnInit(): void {
    this.productId = this._ActivatedRoute.snapshot.paramMap.get('id');
    this.product = this._DynamicProductService.getById(this.productId).subscribe({
      next:(response)=>
      {
        this.product = response;

      }

    })
      
  }




}
