
import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicProductService } from '../../app/services/dynamic-product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  imports: [CommonModule , FormsModule,ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  constructor(private _DynamicProductService:DynamicProductService,private _Router:Router){}
  productForm = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    price:new FormControl('',Validators.required),
    quantity:new FormControl('',Validators.required),
    imgSrc:new FormControl('',Validators.required)

  })

 get getName()
  {
   return this.productForm.controls['name']
  }

  get  getPrice()
  {
   return this.productForm.controls['price']
  }

  get  getQuantity()
  {
   return  this.productForm.controls['quantity']
  }

    get  getimgSrc()
  {
  return  this.productForm.controls['imgSrc']
  }

  productOperation(){
    if(this.productForm.status == "VALID")
    {
      console.log(this.productForm.value);
      console.log("vaild data to send Api");
      this._DynamicProductService.add(this.productForm.value).subscribe({
        next:()=>{
          this._Router.navigate(['/products'])

        }
      })
      
      
    }

    else{
      console.log("Not vaild data to send Api");
      


    }
  }



  




  



}
