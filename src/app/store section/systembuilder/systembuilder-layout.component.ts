import { Component, Input } from "@angular/core";
import { part_list } from "./pcpartcomponent/pc-part-list";
import { PartItemModel } from "./pcpartcomponent/pc-part-list.model";

@Component({

    selector: 'systembuilder',
    templateUrl: 'systembuilder-layout.component.html',
    styleUrls: ['systembuilder-layout.component.css']

})


export class SystemBuilderLayoutComponent{

    parts: PartItemModel[] = [];

    constructor() {
       
        for (var part of part_list) {
            this.parts.push(part);
        }

    }
}