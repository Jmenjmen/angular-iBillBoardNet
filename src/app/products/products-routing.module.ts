import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutsRouteComponent } from './produts-route/produts-route.component';
import { ProductVitayieldComponent } from './product-vitayield/product-vitayield.component';
import { ProductXorbComponent } from './product-xorb/product-xorb.component';
import { ProductCalciteComponent } from './product-calcite/product-calcite.component';
import { ProductVitalandComponent } from './product-vitaland/product-vitaland.component';

const routes: Routes = [
  {path: '', component: ProdutsRouteComponent, children: [
    {path: 'vitayield', component: ProductVitayieldComponent},
    {path: 'vitaxorb', component: ProductXorbComponent},
    {path: 'vitacalcite', component: ProductCalciteComponent},
    {path: 'vitaland', component: ProductVitalandComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
