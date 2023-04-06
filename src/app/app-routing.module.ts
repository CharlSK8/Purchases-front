import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { PurchaseComponent } from './components/purchase/purchase.component';

const routes: Routes = [
  {path: 'product' , component: ProductComponent},
  {path: 'purchase' , component: PurchaseComponent},
  {path: '', redirectTo: 'product', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
