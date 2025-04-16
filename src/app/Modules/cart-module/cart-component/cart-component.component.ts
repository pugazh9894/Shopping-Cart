import { Component } from '@angular/core';
import { ShoppingserviceService } from 'src/app/shoppingservice.service';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.scss']
})
export class CartComponentComponent {
  constructor(private ShoppingserviceService:ShoppingserviceService){}
  Itemcount:number=0;
  TotalAmount:number=0;
  Cartarrays:any[]=[];

  ngOnInit() {
    debugger
      this.getCartItems();
      this.CalculateTotalAmount();
      
    }

    getCartItems() {
      this.ShoppingserviceService.getCartitems().subscribe(data => {
        debugger
        this.Cartarrays = data;
      });
    }

    RemoveProduct(Product:any,index:number) {
      debugger
      this.ShoppingserviceService.RemoveProduct(Product,index)
      this.CalculateTotalAmount();
    }

  AddQty(Product: any) {
    debugger
    this.ShoppingserviceService.AddQty(Product);
    this.CalculateTotalAmount();
 
  }

  ReduceQty(Product: any) {
    debugger
    this.ShoppingserviceService.ReduceQty(Product);
    this.CalculateTotalAmount();
  }

  CalculateTotalAmount() {
    debugger
    if(this.Cartarrays.length > 0) {
      this.TotalAmount = 0;
      this.Cartarrays.forEach((item:any) => {
        debugger
        this.TotalAmount = this.TotalAmount + item.TotalItemAmount;
  
      })
    }
    else {
      this.TotalAmount = 0;
    }
  }

  // ClearCart() {
  //   debugger
  //   this.ShoppingserviceService.ClearCart();
  //   this.getCartItems();
  //   this.TotalAmount = 0;
  // }
}
