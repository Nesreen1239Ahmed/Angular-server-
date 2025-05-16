import { Component } from '@angular/core';
import { SliderComponent } from "./HomeLayout/slider/slider.component";
import { ProductComponent } from "./HomeLayout/product/product.component";
import { ChefComponent } from "./HomeLayout/chef/chef.component";
import { FooterComponent } from "./HomeLayout/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [SliderComponent, ProductComponent, ChefComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
