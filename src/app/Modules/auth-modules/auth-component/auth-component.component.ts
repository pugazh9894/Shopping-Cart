import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.scss']
})
export class AuthComponentComponent {

  constructor(private router:Router){}

  UserName:string = null as any;
  Password:string = null as any;

  Login() {
    debugger
    if (this.UserName && this.Password) {
      this.router.navigate(['/Product'])
    }
    else if(!this.UserName) {
    alert('Enter User Name');
    }
    else if(!this.Password) {
      alert('Enter Password');
    }

  }
}
