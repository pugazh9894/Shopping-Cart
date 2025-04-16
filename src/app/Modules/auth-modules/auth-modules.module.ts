import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModulesRoutingModule } from './auth-modules-routing.module';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthComponentComponent,
  ],
  imports: [
    CommonModule,
    AuthModulesRoutingModule,
    FormsModule
  ]
})
export class AuthModulesModule { }
