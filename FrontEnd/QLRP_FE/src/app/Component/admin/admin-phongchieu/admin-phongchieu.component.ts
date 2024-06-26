import { Component, OnInit } from '@angular/core';
import { PhongService } from '../../../service/phong.service';
import { PhongChieu } from '../../../Models/Phongchieu';

@Component({
  selector: 'app-admin-phongchieu',
  templateUrl: './admin-phongchieu.component.html',
  styleUrls: ['./admin-phongchieu.component.css']
})
export class AdminPhongchieuComponent implements OnInit {
  phongChieus: PhongChieu[] = [];
  showForm = false;
  editingPhongChieu: PhongChieu | null = null;
  newPhongChieu: PhongChieu = {
    PhongChieuID: 0,
    SoPhong: 0,
    SucChua: 0
  };

  constructor(private phongService: PhongService) {}

  ngOnInit(): void {
    this.getAllPhongChieus();
  }

  getAllPhongChieus(): void {
    this.phongService.getPhong().subscribe(
      data => {
        this.phongChieus = data;
        console.log(this.phongChieus);
      },
      error => {
        console.error('Error fetching room data', error);
      }
    );
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.resetForm();
    }
  }

  createPhongChieu(): void {
    this.phongService.addPhong(this.newPhongChieu).subscribe(
      response => {
        this.getAllPhongChieus(); // Re-fetch data
        this.toggleForm();
        this.resetForm();
      },
      error => {
        console.error('Error creating room', error);
      }
    );
  }

  editPhongChieu(phongChieu: PhongChieu): void {
    this.editingPhongChieu = { ...phongChieu };
    this.newPhongChieu = { ...phongChieu };
    this.showForm = true;
  }

  updatePhongChieu(): void {
    if (this.editingPhongChieu) {
      this.phongService.updatePhong(this.newPhongChieu.PhongChieuID, this.newPhongChieu).subscribe(
        response => {
          this.getAllPhongChieus(); // Re-fetch data
          this.toggleForm();
        },
        error => {
          console.error('Error updating room', error);
        }
      );
    }
  }

  deletePhongChieu(id: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa phòng chiếu này?')) {
      this.phongService.deletePhong(id).subscribe(
        () => {
          this.phongChieus = this.phongChieus.filter(u => u.PhongChieuID !== id);
        },
        error => {
          console.error('Error deleting room', error);
        }
      );
    }
  }

  resetForm(): void {
    this.newPhongChieu = {
      PhongChieuID: 0,
      SoPhong: 0,
      SucChua: 0
    };
    this.editingPhongChieu = null;
  }

  savePhongChieu(): void {
    if (this.editingPhongChieu) {
      this.updatePhongChieu();
    } else {
      this.createPhongChieu();
    }
  }
}
