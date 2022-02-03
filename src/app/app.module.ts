import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuildCardComponent } from './build card/build.card.component';
import { TopNavBarComponent } from './header/firstnavbar/topnavbar.component';
import { SecondNavBarComponent } from './header/secondnavbar/secondnavbar.component';
import { CategoryCardComponent } from './store card/category.card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondNavBarComponent,
    CategoryCardComponent,
    BuildCardComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }