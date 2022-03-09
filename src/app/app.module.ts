import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuildCardComponent,} from './homepage/build card/build.card.component';
import { TopNavBarComponent } from './header/firstnavbar/topnavbar.component';
import { SecondNavBarComponent } from './header/secondnavbar/secondnavbar.component';
import { CategoryCardComponent } from './store section/buildguides/store card/category.card.component';
import { StoreTitleCardComponent } from './store section/store title/store.title.component';
import { AppRoutingModule } from './app-routing.module';
import { BuildGuideLayoutComponent } from './store section/buildguides/buildguidelayout/buildguide-layout.component';
import { HomeLayoutComponent } from './homepage/home-layout-component';
import { CompleteBuildLayoutComponent } from './store section/completebuilds/completebuild-layout/completebuild-layout.component';
import { HeadphoneLayoutComponent } from './store section/browseproducts/peripherals/headphones/headphone-layout.component';
import { PcPartComponent } from './store section/systembuilder/pcpartcomponent/pcpart.component';
import { SystemBuilderLayoutComponent } from './store section/systembuilder/systembuilder-layout.component';
import { CompatabilityComponent } from './store section/systembuilder/compatabilitycomponent/compatability.component';
import { NotesComponent } from './store section/systembuilder/notescomponent/notes.component';
import { CompleteTitleComponent } from './store section/completebuilds/completebuild-layout/completetitle-component/complete-title.component';
import { HttpClientModule} from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component'
import { FullBuildCardComponent } from './store section/completebuilds/full-build-cards/full-build.card.component';
import { FeaturedBuildComponent } from './homepage/featuredbuild/featuredbuild.component';
@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondNavBarComponent,
    CategoryCardComponent,
    BuildCardComponent,
    FullBuildCardComponent,
    StoreTitleCardComponent,
    BuildGuideLayoutComponent,
    HomeLayoutComponent,
    CompleteBuildLayoutComponent,
    PcPartComponent,
    SystemBuilderLayoutComponent,
    HeadphoneLayoutComponent,
    CompatabilityComponent,
    NotesComponent,
    CompleteTitleComponent,
    UserInfoComponent,
    FeaturedBuildComponent,
  
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }