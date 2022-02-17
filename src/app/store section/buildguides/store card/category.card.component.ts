import { Component, Input } from "@angular/core";

@Component({

    selector: 'pcpart-category-card',
    templateUrl: 'category.card.component.html',
    styleUrls: ['category.card.component.css']
})


export class CategoryCardComponent{

    @Input() img: string;
    @Input()title: string;
    @Input()description: string;
    @Input()price:number;
    @Input()comments: number;

    constructor(){
        this.img = "/assets/PCPartPicker_Logo.png";
        this.price = 0.00;
        this.description = "missing desc."
        this.comments = 0;
        this.title = "Missing Build Title";
    }

}