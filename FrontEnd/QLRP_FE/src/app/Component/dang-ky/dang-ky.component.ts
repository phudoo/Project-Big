import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../../service/registration.service';
import { NguoiDung } from '../../Models/NguoiDung';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css']
})
export class DangKyComponent implements OnInit {
  registerForm!: FormGroup;
  nguoiDung: NguoiDung = {
    nguoiDungID: 0,
    tenNguoiDung: '',
    email: '',
    matKhau: '',
    vaiTro: 'User'
  };

  constructor(
    private formBuilder: FormBuilder, 
    private registrationService: RegistrationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      tenNguoiDung: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      matKhau: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.nguoiDung.tenNguoiDung = this.registerForm.get('tenNguoiDung')?.value;
      this.nguoiDung.email = this.registerForm.get('email')?.value;
      this.nguoiDung.matKhau = this.registerForm.get('matKhau')?.value;
      
      this.registrationService.addNguoiDung(this.nguoiDung).subscribe(response => {
        console.log('Người dùng đã được đăng ký thành công:', response);
        this.router.navigate(['/login']);
      });
    }
  }
}
