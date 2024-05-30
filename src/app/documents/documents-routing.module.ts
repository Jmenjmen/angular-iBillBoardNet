import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRouteComponent } from './main-route/main-route.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {path: '', component: MainRouteComponent, children:[
    {path: 'privacy', component: PrivacyComponent},
    {path: 'terms', component: TermsComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
