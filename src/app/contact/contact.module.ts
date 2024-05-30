import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
