import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/products.service";
import { mock_product_list } from "../store section/buildguides/store card/mock-product-list";
import { ProductItemModel } from "../store section/buildguides/store card/product-item-model";
import { BuildItemModel } from "./build card/build-item-model";

@Component({
    selector: 'home-layout',
    templateUrl: 'home-layout-component.html',
    styleUrls:['home-layout.component.css']
})

export class HomeLayoutComponent implements OnInit {
    products: ProductItemModel[] = [];
    builds: BuildItemModel[] = [];

    constructor(private http:HttpClient,private ps:ProductService) {
        for (var product of mock_product_list) {
            console.log(product);
            this.products.push(product);
        }


    
      

    }
    ngOnInit(): void {
        console.log("sending get request");
        this.ps.getHomeBuilds().subscribe(data=>{
            for (var build of data){
                this.builds.push(build)
            }
        })
    }
    




}