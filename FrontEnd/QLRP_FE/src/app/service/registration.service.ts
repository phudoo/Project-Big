import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NguoiDung } from '../Models/NguoiDung';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'http://localhost:5100/api/NguoiDungs';

  constructor(private http: HttpClient) { }

  addNguoiDung(nguoiDung: NguoiDung): Observable<NguoiDung> {
    return this.http.post<NguoiDung>(this.apiUrl, nguoiDung);
  }
}
