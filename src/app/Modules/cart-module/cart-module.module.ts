import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartModuleRoutingModule } from './cart-module-routing.module';
import { CartComponentComponent } from './cart-component/cart-component.component';


@NgModule({
  declarations: [
    CartComponentComponent
  ],
  imports: [
    CommonModule,
    CartModuleRoutingModule
  ]
})
export class CartModuleModule { }
