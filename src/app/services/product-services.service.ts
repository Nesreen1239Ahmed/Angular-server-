import { IProduct } from './../../interface/iproduct';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

   products!:IProduct[];

  constructor() {
  this.products = [
    {
        id: 1,
        name: "Margherita Pizza",
        price: 12.99,
        quantity: 15,
        imgSrc: "f1.png"
    },
    {
        id: 2,
        name: "California Sushi Rolls",
        price: 14.50,
        quantity: 20,
        imgSrc: "f2.png"
    },
    {
        id: 3,
        name: "Gourmet Burger",
        price: 11.75,
        quantity: 25,
        imgSrc: "f3.png"
    },
    {
        id: 4,
        name: "Truffle Pasta",
        price: 18.99,
        quantity: 12,
        imgSrc: "f4.png"
    },
    {
        id: 5,
        name: "Caesar Salad",
        price: 9.99,
        quantity: 30,
        imgSrc: "f5.png"
    },
    {
        id: 6,
        name: "Chicken Tacos",
        price: 8.50,
        quantity: 18,
        imgSrc: "f6.png"
    },
    {
        id: 7,
        name: "Vegetarian Curry",
        price: 13.25,
        quantity: 20,
        imgSrc: "f7.png"
    },
    {
        id: 8,
        name: "Beef Ramen",
        price: 15.75,
        quantity: 15,
        imgSrc: "f8.png"
    },
    {
        id: 9,
        name: "Grilled Salmon",
        price: 22.99,
        quantity: 10,
        imgSrc: "f9.png"
    },
    {
        id: 10,
        name: "Chocolate Cake",
        price: 7.99,
        quantity: 25,
        imgSrc: "o1.jpg"
    }
];

   }

   getAll()
   {
    return this.products;
   }

   add(product:IProduct)
   {
    const maxId = this.products.length > 0 ? Math.max(...this.products.map(p => p.id)) : 0;
    product.id = maxId + 1;
    this.products.push(product);
    return product;
   }

   getById(id:number)
   {
    return this.products.find(product =>product.id == id)
   }

update(updateProduct: IProduct) {
  const product = this.products.find(p => p.id === updateProduct.id);

  const updated = { ...product, ...updateProduct };
  const index = this.products.indexOf(product!);
  this.products[index] = updated;
  
  return updated;
}

   delete(id:number)
   {
      this.products = this.products.filter(product => product.id !== id);

   }

 



}
