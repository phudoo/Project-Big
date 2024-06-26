// src/app/components/admin-doanhthu/admin-doanhthu.component.ts
import { Component, OnInit } from '@angular/core';
import { DoanhThuService } from '../../../service/doanh-thu.service';
import { DoanhThu } from '../../../Models/DoanhThu';

@Component({
  selector: 'app-admin-doanhthu',
  templateUrl: './admin-doanhthu.component.html',
  styleUrls: ['./admin-doanhthu.component.css']
})
export class AdminDoanhThuComponent implements OnInit {
  doanhThus: DoanhThu[] = [];

  constructor(private doanhThuService: DoanhThuService) { }

  ngOnInit(): void {
    this.getAllDoanhThus();
  }

  getAllDoanhThus(): void {
    this.doanhThuService.getDailyRevenue().subscribe(
      data => {
        this.doanhThus = data;
      },
      error => {
        console.error('Error fetching DoanhThu data', error);
      }
    );
  }

  exportToExcel(): void {
    this.doanhThuService.exportToExcel(this.doanhThus);
  }
}
