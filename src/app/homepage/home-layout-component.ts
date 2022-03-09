import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { mock_product_list } from "../store section/buildguides/store card/mock-product-list";
import { ProductItemModel } from "../store section/buildguides/store card/product-item-model";
import { HomeBuilds } from "./build card/build-list";

@Component({
    selector: 'home-layout',
    templateUrl: 'home-layout-component.html',
    styleUrls:['home-layout.component.css']
})

export class HomeLayoutComponent implements OnInit {
    products: ProductItemModel[] = [];
    homeBuilds: HomeBuilds[] | undefined;

    constructor(private http:HttpClient) {
        for (var product of mock_product_list) {
            console.log(product);
            this.products.push(product);
        }
      

    }
    ngOnInit(): void {
        console.log("sending get request");
        this.showHomeBuilds();
    }
    getHomeBuilds() {
        return this.http.get<HomeBuilds[]>("https://pc-part-picker-dc160-default-rtdb.firebaseio.com/builds.json");
    }
    showHomeBuilds(){
        this.getHomeBuilds().subscribe((data:HomeBuilds[])=>{
            console.log(data);
            this.homeBuilds = data;
        })
    }



}