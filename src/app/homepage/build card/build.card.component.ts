import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { HomeBuilds } from "./build-list";


@Component({

    selector: 'pcpart-build-card',
    templateUrl: 'build.card.component.html',
    styleUrls: ['build.card.component.css']
})


export class BuildCardComponent{

    @Input() img: string;
    @Input()price: string;
    @Input() title: string;
    @Input() upvotes: string;
    @Input()comments: string;
    @Input()cpu: string;
    @Input() gpu:string;
    @Input() userID: string;




    constructor(){
        this.img = "";
        this.price = "";
        this.title = "";
        this.comments = "";
        this.upvotes = "";
        this.cpu = "";
        this.gpu = "";
        this.userID = "";
        
      }
  
    
}