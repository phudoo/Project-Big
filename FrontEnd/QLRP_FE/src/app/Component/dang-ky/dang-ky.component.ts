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
    NguoiDungID: 0,
    TenNguoiDung: '',
    Email: '',
    MatKhau: '',
    VaiTro: 'User'
  };

  constructor(
    private formBuilder: FormBuilder, 
    private registrationService: RegistrationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      TenNguoiDung: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      MatKhau: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.nguoiDung.TenNguoiDung = this.registerForm.get('TenNguoiDung')?.value;
      this.nguoiDung.Email = this.registerForm.get('Email')?.value;
      this.nguoiDung.MatKhau = this.registerForm.get('MatKhau')?.value;
      
      this.registrationService.addNguoiDung(this.nguoiDung).subscribe(response => {
        console.log('Người dùng đã được đăng ký thành công:', response);
        this.router.navigate(['/login']);
      });
    }
  }
}