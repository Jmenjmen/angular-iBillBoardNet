import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { MainBlogComponent } from './main-blog/main-blog.component';
import { HeaderComponent } from './main-blog/header/header.component';
import { FooterComponent } from './main-blog/footer/footer.component';
import { MainBodyComponent } from './main-blog/main-body/main-body.component';
import { BodyZeolitComponent } from './main-blog/body-zeolit/body-zeolit.component';
import { RouterModule } from '@angular/router';
import { BodySoilConditionerComponent } from './main-blog/body-soil-conditioner/body-soil-conditioner.component';
import { BodyCalciumComponent } from './main-blog/body-calcium/body-calcium.component';
import { BodyMineralComponent } from './main-blog/body-mineral/body-mineral.component';
import { BodyVitacalciteComponent } from './main-blog/body-vitacalcite/body-vitacalcite.component';
import { BodyAgricultureComponent } from './main-blog/body-agriculture/body-agriculture.component';
import { MenuComponent } from './main-blog/menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainBlogComponent,
    HeaderComponent,
    FooterComponent,
    MainBodyComponent,
    BodyZeolitComponent,
    BodySoilConditionerComponent,
    BodyCalciumComponent,
    BodyMineralComponent,
    BodyVitacalciteComponent,
    BodyAgricultureComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  bootstrap: [MainBlogComponent]
})
export class BlogModule { }
