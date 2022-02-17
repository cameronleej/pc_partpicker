import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { BuildGuideLayoutComponent } from './store section//buildguides/buildguidelayout/buildguide-layout.component';
import { RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './homepage/home-layout-component';
import { CompleteBuildLayoutComponent } from './store section/completebuilds/completebuild-layout/completebuild-layout.component';
import { SystemBuilderLayoutComponent } from './store section/systembuilder/systembuilder-layout.component';
import { HeadphoneLayoutComponent } from './store section/browseproducts/peripherals/headphones/headphone-layout.component';


const routes:Routes = [
  {
    path: '', component: HomeLayoutComponent 
  },
  {
  path: 'BuildGuides', component: BuildGuideLayoutComponent
},
{
  path:'CompleteBuilds',component: CompleteBuildLayoutComponent
},
{
  path:'SystemBuilder',component: SystemBuilderLayoutComponent
},
{
  path:'headphone', component: HeadphoneLayoutComponent
}
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

 }
