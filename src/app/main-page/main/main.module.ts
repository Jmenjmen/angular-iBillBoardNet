import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MainCMPComponent } from './main-cmp/main-cmp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MenuComponent,
    MainCMPComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
    ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class MainModule { }
