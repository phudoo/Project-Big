import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ve } from '../Models/ve';

@Injectable({
  providedIn: 'root'
})
export class VeService {
  private apiURL = 'http://localhost:5100/api/Ves';

  constructor(private http: HttpClient) {}

  getVes(): Observable<Ve[]> {
    return this.http.get<Ve[]>(this.apiURL);
  }

  getVe(id: number): Observable<Ve> {
    return this.http.get<Ve>(`${this.apiURL}/${id}`);
  }

  addVe(ve: Ve): Observable<Ve> {
    return this.http.post<Ve>(this.apiURL, ve);
  }

  updateVe(id: number, ve: Ve): Observable<void> {
    return this.http.put<void>(`${this.apiURL}/${id}`, ve);
  }

  deleteVe(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
