import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  errorMessage: string = '';  // Add this line

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      tenNguoiDung: ['', Validators.required],
      matKhau: ['', Validators.required]
    });
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const { tenNguoiDung, matKhau } = this.loginForm.value;
      this.authService.login(tenNguoiDung, matKhau).subscribe(
        response => {
          if (response.Role === 'Admin') {
            this.router.navigate(['admin-ve']);
          } else {
            this.router.navigate(['listphim']);
          }
        },
        error => {
          this.errorMessage = 'Đăng nhập không thành công. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.'; // Set the error message
        }
      );
    }
  }
}
