import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BodyComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    ReactiveFormsModule
  ]
})
export class FaqModule { }
