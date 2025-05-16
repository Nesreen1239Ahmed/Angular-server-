import { EditProductComponent } from './../component/edit-product/edit-product.component';
import { ProductListComponent } from './../component/product-list/product-list.component';
import { Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { AddProductComponent } from '../component/add-product/add-product.component';
import { ProductDetailsComponent } from '../component/product-details/product-details.component';


export const routes: Routes = [
    {path:'home',component:HomeComponent},
     {path:'products',component:ProductListComponent},
      {path:'addProduct',component:AddProductComponent},
      { path: 'product/details/:id', component: ProductDetailsComponent },
        { path: 'product/edit/:id', component: EditProductComponent }

];
