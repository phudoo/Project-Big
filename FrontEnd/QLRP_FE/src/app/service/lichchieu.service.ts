import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LichchieuService {
  private apiURL = 'http://localhost:5100/api/LichChieus';

  constructor(private http: HttpClient) {}

  // Get all schedules
  getLich(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  // Add a new schedule
  addLich(suat: any): Observable<any> {
    return this.http.post<any>(this.apiURL, suat);
  }

  // Update an existing schedule
  updateLich(id: number, suat: any): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.put<any>(url, suat);
  }

  // Delete a schedule
  deleteLich(id: number): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete<any>(url);
  }
}
