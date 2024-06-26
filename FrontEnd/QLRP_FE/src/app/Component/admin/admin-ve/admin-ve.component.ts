import { Component, OnInit } from '@angular/core';
import { VeService } from '../../../service/ve.service';
import { Ve } from '../../../Models/ve';

@Component({
  selector: 'app-admin-ve',
  templateUrl: './admin-ve.component.html',
  styleUrls: ['./admin-ve.component.css']
})
export class AdminVeComponent implements OnInit {
  ves: Ve[] = [];
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

  constructor(private veService: VeService) {}

  ngOnInit(): void {
    this.getAllVes();
  }

  getAllVes(): void {
    this.veService.getVes().subscribe(
      data => {
        this.ves = data;
        console.log(this.ves);
      },
      error => {
        console.error('Error fetching ticket data', error);
      }
    );
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
        this.getAllVes(); // Re-fetch data
        this.toggleForm();
        this.resetForm();
      },
      error => {
        console.error('Error creating ticket', error);
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
          this.getAllVes(); // Re-fetch data
          this.toggleForm();
        },
        error => {
          console.error('Error updating ticket', error);
        }
      );
    }
  }

  deleteVe(id: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa vé này?')) {
      this.veService.deleteVe(id).subscribe(
        () => {
          this.ves = this.ves.filter(u => u.VeID !== id);
        },
        error => {
          console.error('Error deleting ticket', error);
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
