import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutModuleRoutingModule } from './checkout-module-routing.module';
import { CheckoutComponentComponent } from './checkout-component/checkout-component.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CheckoutComponentComponent
  ],
  imports: [
    CommonModule,
    CheckoutModuleRoutingModule,
    ReactiveFormsModule
  ]
})
export class CheckoutModuleModule { }
