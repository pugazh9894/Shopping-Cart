import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkout-component',
  templateUrl: './checkout-component.component.html',
  styleUrls: ['./checkout-component.component.scss']
})
export class CheckoutComponentComponent {

  constructor(){
    this.CheckOutform = new FormGroup({
      FirstName: new FormControl('',[Validators.required]),
      MiddleName: new FormControl(''),
      LastName: new FormControl('',[Validators.required]),
      MobilNo: new FormControl(null,[Validators.required,Validators.pattern('^[0-9]{10}$')]),
      Address: new FormControl(null,[Validators.required]),
      PinCode: new FormControl(null,[Validators.required]),

    })
  }

  CheckOutform!: FormGroup;
  PaymentFormAccess:boolean = false;

  Submit() {
    debugger
    if (this.CheckOutform.valid) {
      console.log('form valid')
      this.PaymentFormAccess = true;
    }
    else {
      console.log('form invalid')
    }
  }
}
