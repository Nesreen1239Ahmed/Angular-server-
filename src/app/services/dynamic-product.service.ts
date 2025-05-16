import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../interface/iproduct';

@Injectable({
  providedIn: 'root'
})
export class DynamicProductService {
  baseUrl:string = 'http://localhost:3005/products'

  constructor(private _HttpClient:HttpClient) { }

  getAll():Observable<IProduct[]>
  {
    return this._HttpClient.get<IProduct[]>(this.baseUrl)
  }

  getById(productId:string):Observable<IProduct>
  {
    return this._HttpClient.get<IProduct>(`${this.baseUrl}/${productId}`)

  }
  add(product:any)
  {
    return this._HttpClient.post<IProduct>(this.baseUrl,product)

  }
  update(productId:string, product:any):Observable<IProduct>
  {

    return this._HttpClient.put<IProduct>(`${this.baseUrl}/${productId}`,product)
  }
  delete(productId:string){
    return this._HttpClient.delete(`${this.baseUrl}/${productId}`)

  }
}
