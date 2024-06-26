import { Component, OnInit } from '@angular/core';
import { LichchieuService } from '../../../service/lichchieu.service';
import { PhimService } from '../../../service/phim.service';
import { PhongService } from '../../../service/phong.service';
import { LichChieu } from '../../../Models/LichChieu';
import { Phim } from '../../../Models/Phim';
import { PhongChieu } from '../../../Models/Phongchieu';

@Component({
  selector: 'app-admin-lichchieu',
  templateUrl: './admin-lichchieu.component.html',
  styleUrls: ['./admin-lichchieu.component.css']
})
export class AdminLichChieuComponent implements OnInit {
  lichChieus: LichChieu[] = [];
  phims: Phim[] = [];
  phongChieus: PhongChieu[] = [];
  showForm = false;
  editingLichChieu: LichChieu | null = null;
  newLichChieu: LichChieu = {
    LichChieuID: 0,
    PhimID: 0,
    PhongChieuID: 0,
    ThoiGianChieu: new Date()
  };

  constructor(
    private lichChieuService: LichchieuService,
    private phimService: PhimService,
    private phongChieuService: PhongService
  ) { }

  ngOnInit(): void {
    this.getAllLichChieus();
    this.getAllPhims();
    this.getAllPhongChieus();
  }

  getAllLichChieus(): void {
    this.lichChieuService.getLich().subscribe(
      (data: LichChieu[]) => {
        this.lichChieus = data;
      },
      (error: any) => {
        console.error('Error fetching LichChieu data', error);
      }
    );
  }

  getAllPhims(): void {
    this.phimService.getPhim().subscribe(
      (data: Phim[]) => {
        this.phims = data;
      },
      (error: any) => {
        console.error('Error fetching Phim data', error);
      }
    );
  }

  getAllPhongChieus(): void {
    this.phongChieuService.getPhong().subscribe(
      (data: PhongChieu[]) => {
        this.phongChieus = data;
      },
      (error: any) => {
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

  createLichChieu(): void {
    this.lichChieuService.addLich(this.newLichChieu).subscribe(
      (response: any) => {
        this.getAllLichChieus();
        this.toggleForm();
        this.resetForm();
      },
      (error: any) => {
        console.error('Error creating LichChieu', error);
      }
    );
  }

  editLichChieu(lichChieu: LichChieu): void {
    this.editingLichChieu = { ...lichChieu };
    this.newLichChieu = { ...lichChieu };
    this.showForm = true;
  }

  updateLichChieu(): void {
    if (this.editingLichChieu) {
      this.lichChieuService.updateLich(this.newLichChieu.LichChieuID, this.newLichChieu).subscribe(
        (response: any) => {
          this.getAllLichChieus();
          this.toggleForm();
        },
        (error: any) => {
          console.error('Error updating LichChieu', error);
        }
      );
    }
  }

  deleteLichChieu(id: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa lịch chiếu này?')) {
      this.lichChieuService.deleteLich(id).subscribe(
        () => {
          this.lichChieus = this.lichChieus.filter(u => u.LichChieuID !== id);
        },
        (error: any) => {
          console.error('Error deleting LichChieu', error);
        }
      );
    }
  }

  resetForm(): void {
    this.newLichChieu = {
      LichChieuID: 0,
      PhimID: 0,
      PhongChieuID: 0,
      ThoiGianChieu: new Date()
    };
    this.editingLichChieu = null;
  }

  saveLichChieu(): void {
    if (this.editingLichChieu) {
      this.updateLichChieu();
    } else {
      this.createLichChieu();
    }
  }
}
