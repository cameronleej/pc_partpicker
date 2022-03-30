import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";


@Component({

    selector: 'pcpart-build-card',
    templateUrl: 'build.card.component.html',
    styleUrls: ['build.card.component.css']
})


export class BuildCardComponent{

    @Input()img: string;
    @Input()price: string;
    @Input()title: string;
    @Input()upvotes: string;
    @Input()comments: string;
    @Input()cpu: string;
    @Input()gpu:string;
    @Input()userID: string;




    constructor(){
        this.img = "0";
        this.price = "0";
        this.title = "0";
        this.comments = "0";
        this.upvotes = "0";
        this.cpu = "0";
        this.gpu = "0";
        this.userID = "0";
        
      }
  
    
}