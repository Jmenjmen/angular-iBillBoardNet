import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { HeaderComponent } from './header/header.component';
import { ProductVitayieldComponent } from './product-vitayield/product-vitayield.component';
import { ProductXorbComponent } from './product-xorb/product-xorb.component';
import { ProductCalciteComponent } from './product-calcite/product-calcite.component';
import { ProductVitalandComponent } from './product-vitaland/product-vitaland.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductVitayieldComponent,
    ProductXorbComponent,
    ProductCalciteComponent,
    ProductVitalandComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductsModule { }
