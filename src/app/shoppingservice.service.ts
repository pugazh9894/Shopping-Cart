import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingserviceService {

  constructor() { 
    this.SavedProducts();   
  }
  
  private products:any[] = [
    {
      id:1,
      ProductName:'Watch',
      Price:200,
      Qty:5
    },
    {
      id:2,
      ProductName:'Shoes',
      Price:210,
      Qty:3
      
    },
    {
      id:3,
      ProductName:'Dress',
      Price:220,
      Qty:2
      
    },
    {
      id:4,
      ProductName:'Glass',
      Price:300,
      Qty:1
      
    }
  ];
  private Cartitems:any[] = [];
  

  AddProduct(productData: any, index: number) {
    debugger
    let productObj = { ...productData };

    let CheckItem = this.Cartitems.filter(a => a.id == productData.id);

    if (CheckItem.length > 0) {
      this.Cartitems.forEach((item: any) => {
        debugger
        if (item.id == productObj.id) {
          if (item.id == productObj.id && productData.Qty > 0) {
            item.Qty = item.Qty + 1;
            item.TotalItemAmount =  item.Price * item.Qty;
            productData.Qty = productData.Qty - 1;
          }
          else {
            alert('Out of Stock.');
          }
        }

      })
    }
    else if (productData.Qty > 0) {
      productObj.Qty = 1;
      productData.Qty = productData.Qty - 1;
      this.Cartitems.push(productObj);

      this.Cartitems.map((cartitems:any) => {
        debugger
        cartitems.TotalItemAmount =  cartitems.Price * cartitems.Qty;
      })
    }
    else {
      alert('Out of Stock.');
    }
    this.saveData();
  }

  AddQty(Product:any){
  debugger
  this.products.forEach((item:any) => {
    debugger
    if (item.id == Product.id) {

      if (item.Qty > 0) {
        Product.Qty = Product.Qty + 1;
        Product.TotalItemAmount =  item.Price * Product.Qty;
        item.Qty = item.Qty - 1;
      }
      else {
        alert('Out Of stock')
      }
     
    }
  })
  this.saveData();
  }

  ReduceQty(Product:any) {
  debugger
  this.products.forEach((item:any) => {
    debugger
    if (item.id == Product.id) {

      if (Product.Qty > 1) {
        Product.Qty = Product.Qty - 1;
        item.Qty = item.Qty + 1;
        Product.TotalItemAmount =  item.Price * Product.Qty;
        
      }
      else {
        alert('do not reduce Qty.Only Remove')
      }
     
    }
  })
  this.saveData();
  }

  RemoveProduct(product: any, index: number) {
    debugger
    // this.products.push(product);
    this.products.forEach((item:any) => {
      debugger
      if(item.id == product.id) {  
        item.Qty = item.Qty + product.Qty;     
        this.Cartitems.splice(index, 1);
      }
    })
    
    this.saveData();
  }

  // ClearCart(){
  //   debugger
  //   this.Cartitems = [];
  //   this.saveData();
  //   localStorage.clear();
  // }

  getProduct(): Observable<any[]> {
    debugger
    return of(this.products)
  }

  getCartitems(): Observable<any[]> {
    debugger
    return of(this.Cartitems)
  }

  saveData() {
    debugger
    localStorage.setItem('Cartitems',JSON.stringify(this.Cartitems));

    localStorage.setItem('products',JSON.stringify(this.products));
  }

  SavedProducts() {
    debugger

    const SavedCart = localStorage.getItem('Cartitems');

    if(SavedCart){
      this.Cartitems = JSON.parse(SavedCart);
    }
    const SavedProduct = localStorage.getItem('products');

    if(SavedProduct){
      this.products = JSON.parse(SavedProduct);
    }
    
  }



}
