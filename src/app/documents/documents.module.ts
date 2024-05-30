import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { MainRouteComponent } from './main-route/main-route.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainRouteComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    PrivacyComponent,
    TermsComponent
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    ReactiveFormsModule
  ]
})
export class DocumentsModule { }
