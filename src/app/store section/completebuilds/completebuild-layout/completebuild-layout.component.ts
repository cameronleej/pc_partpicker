import { Component } from "@angular/core";
import { FullBuildItemModel } from "src/app/store section/completebuilds/full-build-cards/full-build-item-model";
import { full_build_list } from "src/app/store section/completebuilds/full-build-cards/full-build-list";


@Component({
    selector: 'completebuild-layout',
    templateUrl:'completebuild-layout.component.html',
    styleUrls:['completebuild-layout.component.css']
})

export class CompleteBuildLayoutComponent{
   
    builds: FullBuildItemModel[] = [];

    constructor() {
       
        for (var build of full_build_list) {
            this.builds.push(build);
        }

    }
}