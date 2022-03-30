import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/products.service';
import { BuildItemModel } from '../homepage/build card/build-item-model';
import { ProductItemModel } from '../store section/buildguides/store card/product-item-model';
import { FullBuildItemModel } from '../store section/completebuilds/full-build-cards/full-build-item-model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps:ProductService) { }

  ngOnInit(): void {
  }

  addProduct(product:BuildItemModel){
    console.log("you pressed add button");
    console.log(product);
    this.ps.addProduct(product);
  }
}
