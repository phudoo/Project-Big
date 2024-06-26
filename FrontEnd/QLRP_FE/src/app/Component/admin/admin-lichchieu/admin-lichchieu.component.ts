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
export class AdminLichchieuComponent implements OnInit {
  lichChieus: LichChieu[] = [];
  phims: Phim[] = [];
  phongChieus: PhongChieu[] = [];
  showForm = false;
  editingLichChieu: LichChieu | null = null;
  newLichChieu: LichChieu = {
    PhimID: 0,
    PhongChieuID: 0,
    ThoiGianChieu: new Date()
  };

  constructor(
    private lichChieuService: LichchieuService,
    private phimService: PhimService,
    private phongService: PhongService
  ) {}

  ngOnInit(): void {
    this.getAllLichChieus();
    this.getAllPhims();
    this.getAllPhongChieus();
  }

  getAllLichChieus(): void {
    this.lichChieuService.getLich().subscribe(
      data => {
        this.lichChieus = data.map((item: LichChieu) => ({
          ...item,
          ThoiGianChieu: new Date(item.ThoiGianChieu) // Convert to Date object
        }));
      },
      error => {
        console.error('Error fetching schedules', error);
      }
    );
  }

  getAllPhims(): void {
    this.phimService.getPhim().subscribe(
      data => {
        this.phims = data;
      },
      error => {
        console.error('Error fetching movies', error);
      }
    );
  }

  getAllPhongChieus(): void {
    this.phongService.getPhong().subscribe(
      data => {
        this.phongChieus = data;
      },
      error => {
        console.error('Error fetching rooms', error);
      }
    );
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.resetForm();
    }
  }

  createLichChieu(): void {
    if (this.newLichChieu.PhimID === 0 || this.newLichChieu.PhongChieuID === 0) {
      alert('Please select a valid movie and room.');
      return;
    }
    
    this.lichChieuService.addLich(this.newLichChieu).subscribe(
      response => {
        this.getAllLichChieus(); // Re-fetch data
        this.toggleForm();
        this.resetForm();
      },
      error => {
        console.error('Error creating schedule', error);
        alert('Error creating schedule: ' + error.message);
      }
    );
  }
  

  editLichChieu(lichChieu: LichChieu): void {
    this.editingLichChieu = { ...lichChieu };
    this.newLichChieu = { 
      ...lichChieu, 
      ThoiGianChieu: new Date(lichChieu.ThoiGianChieu) // Convert to Date object
    };
    this.showForm = true;
  }

  updateLichChieu(): void {
    if (this.editingLichChieu) {
      this.lichChieuService.updateLich(this.newLichChieu.LichChieuID!, {
        ...this.newLichChieu,
        ThoiGianChieu: new Date(this.newLichChieu.ThoiGianChieu) // Ensure date is sent correctly
      }).subscribe(
        response => {
          this.getAllLichChieus(); // Re-fetch data
          this.toggleForm();
        },
        error => {
          console.error('Error updating schedule', error);
        }
      );
    }
  }

  deleteLichChieu(id: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa lịch chiếu này?')) {
      this.lichChieuService.deleteLich(id).subscribe(
        () => {
          this.lichChieus = this.lichChieus.filter(lc => lc.LichChieuID !== id);
        },
        error => {
          console.error('Error deleting schedule', error);
        }
      );
    }
  }

  resetForm(): void {
    this.newLichChieu = {
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

  getPhimTitle(phimID: number): string {
    const phim = this.phims.find(p => p.PhimID === phimID);
    return phim ? phim.TieuDe : 'Unknown';
  }

  getPhongChieuNumber(phongChieuID: number): number {
    const phongChieu = this.phongChieus.find(p => p.PhongChieuID === phongChieuID);
    return phongChieu ? phongChieu.SoPhong : 0;
  }
}
