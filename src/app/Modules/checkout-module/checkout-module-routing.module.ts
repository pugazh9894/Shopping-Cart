import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponentComponent } from './checkout-component/checkout-component.component';

const routes: Routes = [
  {
    path:'',
    component:CheckoutComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutModuleRoutingModule { }
