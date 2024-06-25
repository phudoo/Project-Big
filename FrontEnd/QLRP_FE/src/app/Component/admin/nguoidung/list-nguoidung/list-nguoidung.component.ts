import { Component, OnInit } from '@angular/core';
import { NguoiDungService } from '../../../../service/nguoidung.service';
import { NguoiDung } from '../../../../Models/NguoiDung';

@Component({
  selector: 'app-list-nguoidung',
  templateUrl: './list-nguoidung.component.html',
  styleUrls: ['./list-nguoidung.component.css']
})
export class ListNguoiDungComponent implements OnInit {
  nguoiDungs: NguoiDung[] = [];
  showForm = false;
  editingNguoiDung: NguoiDung | null = null;
  newNguoiDung: NguoiDung = {
    NguoiDungID: 0,
    TenNguoiDung: '',
    Email: '',
    MatKhau: '',
    VaiTro: ''
  };

  constructor(private nguoiDungService: NguoiDungService) {}

  ngOnInit(): void {
    this.getAllNguoiDungs();
  }

  getAllNguoiDungs(): void {
    this.nguoiDungService.getNguoiDung().subscribe(
      data => {
        this.nguoiDungs = data;
        console.log(this.nguoiDungs);
      },
      error => {
        console.error('Error fetching user data', error);
      }
    );
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.resetForm();
    }
  }

  createNguoiDung(): void {
    this.nguoiDungService.addNguoiDung(this.newNguoiDung).subscribe(
      response => {
        this.getAllNguoiDungs(); // Re-fetch data
        this.toggleForm();
        this.resetForm();
      },
      error => {
        console.error('Error creating user', error);
      }
    );
  }

  editNguoiDung(nguoiDung: NguoiDung): void {
    this.editingNguoiDung = { ...nguoiDung };
    this.newNguoiDung = { ...nguoiDung };
    this.showForm = true;
  }

  updateNguoiDung(): void {
    if (this.editingNguoiDung) {
      this.nguoiDungService.updateNguoiDung(this.newNguoiDung.NguoiDungID, this.newNguoiDung).subscribe(
        response => {
          this.getAllNguoiDungs(); // Re-fetch data
          this.toggleForm();
        },
        error => {
          console.error('Error updating user', error);
        }
      );
    }
  }

  deleteNguoiDung(id: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa người dùng này?')) {
      this.nguoiDungService.deleteNguoiDung(id).subscribe(
        () => {
          this.nguoiDungs = this.nguoiDungs.filter(u => u.NguoiDungID !== id);
        },
        error => {
          console.error('Error deleting user', error);
        }
      );
    }
  }

  resetForm(): void {
    this.newNguoiDung = {
      NguoiDungID: 0,
      TenNguoiDung: '',
      Email: '',
      MatKhau: '',
      VaiTro: ''
    };
    this.editingNguoiDung = null;
  }

  saveNguoiDung(): void {
    if (this.editingNguoiDung) {
      this.updateNguoiDung();
    } else {
      this.createNguoiDung();
    }
  }
}
