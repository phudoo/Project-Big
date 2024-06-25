import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    const role = this.authService.currentUserRole;
    if (role === 'Admin') {
      this.router.navigate(['/manager']);
      return false;
    }
    return true;
  }
}
