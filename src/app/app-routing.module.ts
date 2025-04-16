import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',
   loadChildren:() => import('./Modules/auth-modules/auth-modules.module').then(m => m.AuthModulesModule)
  },
  {path:'Product',
   loadChildren:() => import('./Modules/product-module/product-module.module').then(m => m.ProductModuleModule)
  },
  {path:'Cart',
   loadChildren:() => import('./Modules/cart-module/cart-module.module').then(m => m.CartModuleModule)
  },
  {path:'CheckOut',
   loadChildren:() => import('./Modules/checkout-module/checkout-module.module').then(m => m.CheckoutModuleModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
