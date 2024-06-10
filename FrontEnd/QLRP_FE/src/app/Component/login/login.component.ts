import { Component } from '@angular/core';
import { Router } from '@angular/router';
// Đường dẫn đúng tới AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showLogin = true;

 
 
  closeLogin() {
    this.showLogin = false;
  }
}
