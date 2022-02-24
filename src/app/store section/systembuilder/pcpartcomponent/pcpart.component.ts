import { Component, Input } from "@angular/core";

@Component({

    selector: 'pcpart-component',
    templateUrl: 'pcpart.component.html',
    styleUrls: ['pcpart.component.css']
})


export class PcPartComponent{

    @Input()component: string;
    @Input()selection: string;
    

    constructor(){
        this.component = "";
        this.selection = "";
       

    }

}