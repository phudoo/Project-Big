import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LichChieu } from '../Models/LichChieu';

@Injectable({
  providedIn: 'root'
})
export class LichchieuService {
  private apiURL = 'http://localhost:5100/api/LichChieus';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getLich(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  addLich(lichChieu: LichChieu): Observable<any> {
    return this.http.post<any>(this.apiURL, JSON.stringify(lichChieu), this.httpOptions);
  }

  updateLich(id: number, lichChieu: LichChieu): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.put<any>(url, JSON.stringify(lichChieu), this.httpOptions);
  }

  deleteLich(id: number): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete<any>(url, this.httpOptions);
  }
}
