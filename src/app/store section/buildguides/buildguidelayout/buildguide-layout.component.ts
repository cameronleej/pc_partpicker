import { Component } from "@angular/core";
import { mock_product_list } from "../store card/mock-product-list";
import { ProductItemModel } from "../store card/product-item-model";

@Component({
    selector: 'build-layout',
    templateUrl:'buildguide-layout.component.html',
    styleUrls:['buildguide-layout.component.css']
})

export class BuildGuideLayoutComponent{
    products: ProductItemModel[] = [];

    constructor() {
        for (var product of mock_product_list) {
            console.log(product);
            this.products.push(product);
        }
    }
   
}