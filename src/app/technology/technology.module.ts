import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyRoutingModule } from './technology-routing.module';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    TechnologyRoutingModule,
    ReactiveFormsModule
  ]
})
export class TechnologyModule { }
