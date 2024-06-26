import { Component, OnInit } from '@angular/core';
import { PhimService } from '../../../service/phim.service';
import { Phim } from '../../../Models/Phim';

@Component({
  selector: 'app-admin-phim',
  templateUrl: './admin-phim.component.html',
  styleUrls: ['./admin-phim.component.css']
})
export class AdminPhimComponent implements OnInit {
  phims: Phim[] = [];
  showForm = false;
  editingPhim: Phim | null = null;
  newPhim: Phim = {
    PhimID: 0,
    TieuDe: '',
    TheLoai: '',
    ThoiLuong: 0,
    NgayKhoiChieu: new Date(),
    MoTa: '',
    DaoDien: '',
    DanhGia: 0,
    PosterURL: '',
    TrailerURL: ''
  };

  constructor(private phimService: PhimService) {}

  ngOnInit(): void {
    this.getAllPhims();
  }

  getAllPhims(): void {
    this.phimService.getPhim().subscribe(
      data => {
        this.phims = data;
        console.log(this.phims);
      },
      error => {
        console.error('Error fetching movie data', error);
      }
    );
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.resetForm();
    }
  }

  createPhim(): void {
    this.phimService.addPhim(this.newPhim).subscribe(
      response => {
        this.getAllPhims(); // Re-fetch data
        this.toggleForm();
        this.resetForm();
      },
      error => {
        console.error('Error creating movie', error);
      }
    );
  }

  editPhim(phim: Phim): void {
    this.editingPhim = { ...phim };
    this.newPhim = { ...phim };
    this.showForm = true;
  }

  updatePhim(): void {
    if (this.editingPhim) {
      this.phimService.updatePhim(this.newPhim.PhimID, this.newPhim).subscribe(
        response => {
          this.getAllPhims(); // Re-fetch data
          this.toggleForm();
        },
        error => {
          console.error('Error updating movie', error);
        }
      );
    }
  }

  deletePhim(id: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa phim này?')) {
      this.phimService.deletePhim(id).subscribe(
        () => {
          this.phims = this.phims.filter(u => u.PhimID !== id);
        },
        error => {
          console.error('Error deleting movie', error);
        }
      );
    }
  }

  resetForm(): void {
    this.newPhim = {
      PhimID: 0,
      TieuDe: '',
      TheLoai: '',
      ThoiLuong: 0,
      NgayKhoiChieu: new Date(),
      MoTa: '',
      DaoDien: '',
      DanhGia: 0,
      PosterURL: '',
      TrailerURL: ''
    };
    this.editingPhim = null;
  }

  savePhim(): void {
    if (this.editingPhim) {
      this.updatePhim();
    } else {
      this.createPhim();
    }
  }
}
