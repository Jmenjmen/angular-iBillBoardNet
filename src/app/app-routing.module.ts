import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: ':lang', loadChildren: () => import('./main-page/main/main.module').then(m => m.MainModule)},
  {path: ':lang/about', loadChildren: () => import('./about-page/about/about.module').then(m => m.AboutModule)},
  {path: ':lang/blog', loadChildren: () => import('././blog/blog.module').then(m => m.BlogModule)},
  {path: ':lang/product', loadChildren: () => import('././products/products.module').then(m => m.ProductsModule)},
  {path: ':lang/technology', loadChildren: () => import('././technology/technology.module').then(m => m.TechnologyModule)},
  {path: ':lang/contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
  {path: ':lang/FAQ', loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule)},
  {path: ':lang/rules', loadChildren: () => import('./documents/documents.module').then(m => m.DocumentsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
