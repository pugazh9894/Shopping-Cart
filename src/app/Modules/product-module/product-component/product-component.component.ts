import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CartComponentComponent } from '../../cart-module/cart-component/cart-component.component';
import { ShoppingserviceService } from 'src/app/shoppingservice.service';


@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})
export class ProductComponentComponent implements OnInit  {
  
constructor(private ShoppingserviceService:ShoppingserviceService){}

  ngOnInit() {
  debugger
    this.ShoppingserviceService.getProduct().subscribe(data => {
      debugger
      this.Productarray = data;
      this.AllProductarray = data;

    })
    
  }

  SearchInput:string = '';
  Productarray:any = [];
  AllProductarray:any = [];


  SearchProduct(){
    debugger
    let ProductList = this.AllProductarray;
    if(this.SearchInput){
    //  let FilterData =  ProductList.filter((a:any) => 
    //   a.ProductName.toLocaleLowerCase() == this.SearchInput.toLocaleLowerCase());  
      let FilterData = ProductList.filter((item: any) => {
        return item.ProductName.toLocaleLowerCase().includes(this.SearchInput.toLocaleLowerCase());
      });
   
     this.Productarray = FilterData; 
     
    }
    else {
      this.Productarray = this.AllProductarray;
    }
  }

  AddCart(product: any, index: number) {
    debugger
    this.ShoppingserviceService.AddProduct(product, index);

  }
}
