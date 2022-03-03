import { Component, Input } from "@angular/core";

@Component({

    selector: 'pcpart-full-build-card',
    templateUrl: 'full-build.card.component.html',
    styleUrls: ['full-build.card.component.css']
})


export class FullBuildCardComponent{

    @Input()img: string;
    @Input()title: string;
    @Input()cpu: string;
    @Input()gpu: string;

    @Input()price:number;
    @Input()comments: number;
    @Input()upvotes: number;

    @Input () userID: string;

    constructor(){
        this.img = "/assets/PCPartPicker_Logo.png";
        this.price = 0.00;
        this.cpu = "missing cpu";
        this.gpu = "missing gpu";
        this.comments = 0;
        this.upvotes = 0;
        this.title = "Missing Build Title";
        this.userID = "null";

    }
}