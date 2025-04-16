import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponentComponent } from './cart-component/cart-component.component';

const routes: Routes = [
  {
    path:'',
    component:CartComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartModuleRoutingModule { }
