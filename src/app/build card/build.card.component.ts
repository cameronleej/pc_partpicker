import { Component, Input } from "@angular/core";

@Component({

    selector: 'pcpart-build-card',
    templateUrl: 'build.card.component.html',
    styleUrls: ['build.card.component.css']
})


export class BuildCardComponent{

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