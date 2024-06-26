// src/app/service/doanh-thu.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoanhThu } from '../Models/DoanhThu';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class DoanhThuService {
  private apiURL = 'http://localhost:5100/api/DoanhThus';

  constructor(private http: HttpClient) {}

  getDoanhThus(): Observable<DoanhThu[]> {
    return this.http.get<DoanhThu[]>(this.apiURL);
  }

  getDailyRevenue(): Observable<DoanhThu[]> {
    return this.http.get<DoanhThu[]>(`${this.apiURL}/daily-revenue`);
  }

  addDoanhThu(doanhThu: DoanhThu): Observable<DoanhThu> {
    return this.http.post<DoanhThu>(this.apiURL, doanhThu);
  }

  exportToExcel(doanhThus: DoanhThu[]): void {
    // Remove the ID field from each entry
    const filteredDoanhThus = doanhThus.map(({ Date, TicketsSold, TotalRevenue }) => ({
      Date,
      TicketsSold,
      TotalRevenue
    }));

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(filteredDoanhThus);
    const workbook: XLSX.WorkBook = {
      Sheets: { 'DoanhThu': worksheet },
      SheetNames: ['DoanhThu']
    };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'doanhthu');
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    saveAs(data, `${fileName}_export_${new Date().getTime()}.xlsx`);
  }
}

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
