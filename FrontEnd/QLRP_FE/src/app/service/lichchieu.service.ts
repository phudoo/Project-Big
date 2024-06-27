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

  // Get all showtimes
  getLich(): Observable<LichChieu[]> {
    return this.http.get<LichChieu[]>(this.apiURL);
  }
  

  // Add a new showtime
  addLich(lichChieu: LichChieu): Observable<LichChieu> {
    return this.http.post<LichChieu>(this.apiURL, lichChieu, this.httpOptions);
  }

  // Update an existing showtime
  updateLich(id: number, lichChieu: LichChieu): Observable<LichChieu> {
    const url = `${this.apiURL}/${id}`;
    return this.http.put<LichChieu>(url, lichChieu, this.httpOptions);
  }

  // Delete a showtime
  deleteLich(id: number): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete<any>(url, this.httpOptions);
  }
}
