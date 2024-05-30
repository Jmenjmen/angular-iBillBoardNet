import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './main-page/main/menu/menu.component';
import { CookieBanerComponent } from './cookie-baner/cookie-baner.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandeService } from './error-hande.service';


@NgModule({
  declarations: [
    AppComponent,
    CookieBanerComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: ErrorHandeService }
  ],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
