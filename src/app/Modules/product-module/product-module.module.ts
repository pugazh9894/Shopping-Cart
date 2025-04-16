import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModuleRoutingModule } from './product-module-routing.module';
import { ProductComponentComponent } from './product-component/product-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductComponentComponent
  ],
  imports: [
    CommonModule,
    ProductModuleRoutingModule,
    FormsModule
  ]
})
export class ProductModuleModule { }
