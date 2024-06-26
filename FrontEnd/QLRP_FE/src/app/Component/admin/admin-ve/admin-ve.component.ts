import { Component, OnInit } from '@angular/core';
import { VeService } from '../../../service/ve.service';
import { LichchieuService } from '../../../service/lichchieu.service';
import { NguoiDungService } from '../../../service/nguoidung.service';
import { GheService } from '../../../service/ghe.service'; // Import the GheService
import { Ve } from '../../../Models/ve';
import { LichChieu } from '../../../Models/LichChieu';
import { NguoiDung } from '../../../Models/NguoiDung';
import { Ghe } from '../../../Models/Ghe'; // Import the Ghe model

@Component({
  selector: 'app-admin-ve',
  templateUrl: './admin-ve.component.html',
  styleUrls: ['./admin-ve.component.css']
})
export class AdminVeComponent implements OnInit {
  ves: Ve[] = [];
  lichChieus: LichChieu[] = [];
  nguoiDungs: NguoiDung[] = [];
  ghes: Ghe[] = []; // Add a property for Ghe
  showForm = false;
  editingVe: Ve | null = null;
  newVe: Ve = {
    VeID: 0,
    NguoiDungID: 0,
    LichChieuID: 0,
    GheID: 0,
    ThoiGianMua: new Date(),
    Gia: 0
  };

  constructor(
    private veService: VeService,
    private lichChieuService: LichchieuService,
    private nguoiDungService: NguoiDungService,
    private gheService: GheService // Inject the GheService
  ) { }

  ngOnInit(): void {
    this.getAllVes();
    this.getAllLichChieus();
    this.getAllNguoiDungs();
    this.getAllGhes(); // Fetch all Ghe
  }

  getAllVes(): void {
    this.veService.getVes().subscribe(
      data => {
        this.ves = data;
      },
      error => {
        console.error('Error fetching Ve data', error);
      }
    );
  }

  getAllLichChieus(): void {
    this.lichChieuService.getLich().subscribe(
      data => {
        this.lichChieus = data;
      },
      error => {
        console.error('Error fetching LichChieu data', error);
      }
    );
  }

  getAllNguoiDungs(): void {
    this.nguoiDungService.getNguoiDung().subscribe(
      data => {
        this.nguoiDungs = data;
      },
      error => {
        console.error('Error fetching NguoiDung data', error);
      }
    );
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

  getThoiGianChieu(lichChieuID: number): string {
    const lichChieu = this.lichChieus.find(l => l.LichChieuID === lichChieuID);
    return lichChieu ? lichChieu.ThoiGianChieu.toLocaleString() : 'Unknown';
  }

  getNguoiDungName(nguoiDungID: number): string {
    const nguoiDung = this.nguoiDungs.find(n => n.NguoiDungID === nguoiDungID);
    return nguoiDung ? nguoiDung.TenNguoiDung : 'Unknown';
  }

  getSoGhe(gheID: number): string {
    const ghe = this.ghes.find(g => g.GheID === gheID);
    return ghe ? ghe.SoGhe : 'Unknown';
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.resetForm();
    }
  }

  createVe(): void {
    this.veService.addVe(this.newVe).subscribe(
      response => {
        this.getAllVes();
        this.toggleForm();
        this.resetForm();
      },
      error => {
        console.error('Error creating Ve', error);
      }
    );
  }

  editVe(ve: Ve): void {
    this.editingVe = { ...ve };
    this.newVe = { ...ve };
    this.showForm = true;
  }

  updateVe(): void {
    if (this.editingVe) {
      this.veService.updateVe(this.newVe.VeID, this.newVe).subscribe(
        response => {
          this.getAllVes();
          this.toggleForm();
        },
        error => {
          console.error('Error updating Ve', error);
        }
      );
    }
  }

  deleteVe(id: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa vé này?')) {
      this.veService.deleteVe(id).subscribe(
        () => {
          this.ves = this.ves.filter(v => v.VeID !== id);
        },
        error => {
          console.error('Error deleting Ve', error);
        }
      );
    }
  }

  resetForm(): void {
    this.newVe = {
      VeID: 0,
      NguoiDungID: 0,
      LichChieuID: 0,
      GheID: 0,
      ThoiGianMua: new Date(),
      Gia: 0
    };
    this.editingVe = null;
  }

  saveVe(): void {
    if (this.editingVe) {
      this.updateVe();
    } else {
      this.createVe();
    }
  }
}
