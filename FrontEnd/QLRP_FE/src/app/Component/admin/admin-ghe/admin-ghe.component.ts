import { Component, OnInit } from '@angular/core';
import { GheService } from '../../../service/ghe.service';
import { PhimService } from '../../../service/phim.service';
import { PhongService } from '../../../service/phong.service';
import { Ghe } from '../../../Models/Ghe';
import { Phim } from '../../../Models/Phim';
import { PhongChieu } from '../../../Models/Phongchieu';

@Component({
  selector: 'app-admin-ghe',
  templateUrl: './admin-ghe.component.html',
  styleUrls: ['./admin-ghe.component.css']
})
export class AdminGheComponent implements OnInit {
  ghes: Ghe[] = [];
  phims: Phim[] = [];
  phongChieus: PhongChieu[] = [];
  showForm = false;
  editingGhe: Ghe | null = null;
  newGhe: Ghe = {
    GheID: 0,
    PhongChieuID: 0,
    SoGhe: '',
    TrangThai: ''
  };

  constructor(
    private gheService: GheService,
    private phimService: PhimService,
    private phongChieuService: PhongService
  ) { }

  ngOnInit(): void {
    this.getAllGhes();
    this.getAllPhims();
    this.getAllPhongChieus();
  }

  getAllGhes(): void {
    this.gheService.getGhes().subscribe(
      data => {
        this.ghes = data;
      },
      error => {
        console.error('Error fetching Ghe data', error);
      }
    );
  }

  getAllPhims(): void {
    this.phimService.getPhim().subscribe(
      data => {
        this.phims = data;
      },
      error => {
        console.error('Error fetching Phim data', error);
      }
    );
  }

  getAllPhongChieus(): void {
    this.phongChieuService.getPhong().subscribe(
      data => {
        this.phongChieus = data;
      },
      error => {
        console.error('Error fetching PhongChieu data', error);
      }
    );
  }

  getPhimTitle(phimID: number): string {
    const phim = this.phims.find(p => p.PhimID === phimID);
    return phim ? phim.TieuDe : 'Unknown';
  }

  getPhongChieuNumber(phongChieuID: number): string {
    const phongChieu = this.phongChieus.find(p => p.PhongChieuID === phongChieuID);
    return phongChieu ? phongChieu.SoPhong.toString() : 'Unknown';
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.resetForm();
    }
  }

  createGhe(): void {
    this.gheService.addGhe(this.newGhe).subscribe(
      response => {
        this.getAllGhes();
        this.toggleForm();
        this.resetForm();
      },
      error => {
        console.error('Error creating Ghe', error);
      }
    );
  }

  editGhe(ghe: Ghe): void {
    this.editingGhe = { ...ghe };
    this.newGhe = { ...ghe };
    this.showForm = true;
  }

  updateGhe(): void {
    if (this.editingGhe) {
      this.gheService.updateGhe(this.newGhe.GheID, this.newGhe).subscribe(
        response => {
          this.getAllGhes();
          this.toggleForm();
        },
        error => {
          console.error('Error updating Ghe', error);
        }
      );
    }
  }

  deleteGhe(id: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa ghế này?')) {
      this.gheService.deleteGhe(id).subscribe(
        () => {
          this.ghes = this.ghes.filter(u => u.GheID !== id);
        },
        error => {
          console.error('Error deleting Ghe', error);
        }
      );
    }
  }

  resetForm(): void {
    this.newGhe = {
      GheID: 0,
      PhongChieuID: 0,
      SoGhe: '',
      TrangThai: ''
    };
    this.editingGhe = null;
  }

  saveGhe(): void {
    if (this.editingGhe) {
      this.updateGhe();
    } else {
      this.createGhe();
    }
  }
}
