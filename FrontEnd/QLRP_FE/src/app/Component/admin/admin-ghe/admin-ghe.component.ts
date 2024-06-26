// src/app/components/admin-ghe/admin-ghe.component.ts

import { Component, OnInit } from '@angular/core';
import { GheService } from '../../../service/ghe.service';
import { Ghe } from '../../../Models/Ghe';
@Component({
  selector: 'app-admin-ghe',
  templateUrl: './admin-ghe.component.html',
  styleUrls: ['./admin-ghe.component.css']
})
export class AdminGheComponent implements OnInit {
  ghes: Ghe[] = [];
  showForm = false;
  editingGhe: Ghe | null = null;
  newGhe: Ghe = {
    GheID: 0,
    PhongChieuID: 0,
    SoGhe: '',
    TrangThai: ''
  };

  constructor(private gheService: GheService) {}

  ngOnInit(): void {
    this.getAllGhes();
  }

  getAllGhes(): void {
    this.gheService.getGhes().subscribe(
      data => {
        this.ghes = data;
      },
      error => {
        console.error('Error fetching seats data', error);
      }
    );
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
        this.getAllGhes(); // Re-fetch data
        this.toggleForm();
        this.resetForm();
      },
      error => {
        console.error('Error creating seat', error);
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
          this.getAllGhes(); // Re-fetch data
          this.toggleForm();
        },
        error => {
          console.error('Error updating seat', error);
        }
      );
    }
  }

  deleteGhe(id: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa ghế này?')) {
      this.gheService.deleteGhe(id).subscribe(
        () => {
          this.ghes = this.ghes.filter(g => g.GheID !== id);
        },
        error => {
          console.error('Error deleting seat', error);
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
