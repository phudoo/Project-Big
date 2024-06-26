import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}
  onLogout() {
    // Add your logout logic here (e.g., removing user token, clearing session storage)
    console.log('User logged out');
    // Redirect to the login page
    this.router.navigate(['/login']);
  }
}
