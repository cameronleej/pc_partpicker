import { Component } from "@angular/core";
import { BuildItemModel } from "src/app/store section/completebuilds/build card/build-item-model";
import { build_list } from "src/app/store section/completebuilds/build card/build-list";


@Component({
    selector: 'completebuild-layout',
    templateUrl:'completebuild-layout.component.html',
    styleUrls:['completebuild-layout.component.css']
})

export class CompleteBuildLayoutComponent{
   
    builds: BuildItemModel[] = [];

    constructor() {
       
        for (var build of build_list) {
            this.builds.push(build);
        }

    }
}