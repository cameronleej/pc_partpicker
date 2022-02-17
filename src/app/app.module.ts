import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuildCardComponent } from './store section/completebuilds/build card/build.card.component';
import { TopNavBarComponent } from './header/firstnavbar/topnavbar.component';
import { SecondNavBarComponent } from './header/secondnavbar/secondnavbar.component';
import { CategoryCardComponent } from './store section/buildguides/store card/category.card.component';
import { StoreTitleCardComponent } from './store section/store title/store.title.component';
import { AppRoutingModule } from './app-routing.module';
import { BuildGuideLayoutComponent } from './store section/buildguides/buildguidelayout/buildguide-layout.component';
import { HomeLayoutComponent } from './homepage/home-layout-component';
import { CompleteBuildLayoutComponent } from './store section/completebuilds/completebuild-layout/completebuild-layout.component';
import { HeadphoneLayoutComponent } from './store section/browseproducts/peripherals/headphones/headphone-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondNavBarComponent,
    CategoryCardComponent,
    BuildCardComponent,
    StoreTitleCardComponent,
    BuildGuideLayoutComponent,
    HomeLayoutComponent,
    CompleteBuildLayoutComponent,
    HeadphoneLayoutComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }