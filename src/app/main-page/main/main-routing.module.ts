import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCMPComponent } from './main-cmp/main-cmp.component';

const routes: Routes = [
  {path: '', component: MainCMPComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
