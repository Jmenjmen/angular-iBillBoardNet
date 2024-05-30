import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBlogComponent } from './main-blog/main-blog.component';
import { HeaderComponent } from './main-blog/header/header.component';
import { MainBodyComponent } from './main-blog/main-body/main-body.component';
import { BodyZeolitComponent } from './main-blog/body-zeolit/body-zeolit.component';
import { BodySoilConditionerComponent } from './main-blog/body-soil-conditioner/body-soil-conditioner.component';
import { BodyCalciumComponent } from './main-blog/body-calcium/body-calcium.component';
import { BodyMineralComponent } from './main-blog/body-mineral/body-mineral.component';
import { BodyVitacalciteComponent } from './main-blog/body-vitacalcite/body-vitacalcite.component';
import { BodyAgricultureComponent } from './main-blog/body-agriculture/body-agriculture.component';

const routes: Routes = [
  {path: '', component: MainBlogComponent, children: [
    {path: '', component: MainBodyComponent},
    {path: 'zeolite', component: BodyZeolitComponent},
    {path: 'soil', component: BodySoilConditionerComponent},
    {path: 'calcium', component: BodyCalciumComponent},
    {path: 'nutrition', component: BodyMineralComponent},
    {path: 'vitacalcite', component: BodyVitacalciteComponent},
    {path: 'agriculture', component: BodyAgricultureComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
