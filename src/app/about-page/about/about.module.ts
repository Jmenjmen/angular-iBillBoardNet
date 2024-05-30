import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCmpComponent } from '../main-cmp/main-cmp.component';
import { HeaderComponent } from '../main-cmp/header/header.component';
import { BodyComponent } from '../main-cmp/body/body.component';
import { FooterComponent } from '../main-cmp/footer/footer.component';

import { AboutRoutingModule } from './about-routing.module';
import { MenuComponent } from '../main-cmp/menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainCmpComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ReactiveFormsModule
  ]
})
export class AboutModule { }
