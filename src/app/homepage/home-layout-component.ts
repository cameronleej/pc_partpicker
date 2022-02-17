import { Component } from "@angular/core";
import { BuildItemModel } from "../store section/completebuilds/build card/build-item-model";
import { build_list } from "../store section/completebuilds/build card/build-list";
import { mock_product_list } from "../store section/buildguides/store card/mock-product-list";
import { ProductItemModel } from "../store section/buildguides/store card/product-item-model";

@Component({
    selector: 'home-layout',
    templateUrl: 'home-layout-component.html',
    styleUrls:['home-layout.component.css']
})

export class HomeLayoutComponent {
    products: ProductItemModel[] = [];
    builds: BuildItemModel[] = [];

    constructor() {
        for (var product of mock_product_list) {
            console.log(product);
            this.products.push(product);
        }
        for (var build of build_list) {
            this.builds.push(build);
        }

    }



}