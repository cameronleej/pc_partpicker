import { Component } from '@angular/core';
import { BuildItemModel } from './build card/build-item-model';
import { build_list } from './build card/build-list';
import { mock_product_list } from './store section/store card/mock-product-list';
import { ProductItemModel } from './store section/store card/product-item-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pcpartpicker';

  products: ProductItemModel [] = [];
  builds: BuildItemModel [] = [];

  constructor(){
    for(var product of mock_product_list){
      console.log(product);
      this.products.push(product);
    }


    for(var build of build_list){
      this.builds.push(build);
    }


  }
  
}
