import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhongChieu } from '../Models/Phongchieu';
@Injectable({
  providedIn: 'root'
})
export class PhongService {
  private apiURL = 'http://localhost:5100/api/PhongChieus';

  constructor(private http: HttpClient) {}

  // Get all rooms
  getPhong(): Observable<PhongChieu[]> {
    return this.http.get<PhongChieu[]>(this.apiURL);
  }

  // Add a new room
  addPhong(phong: PhongChieu): Observable<PhongChieu> {
    return this.http.post<PhongChieu>(this.apiURL, phong);
  }

  // Update an existing room
  updatePhong(id: number, phong: PhongChieu): Observable<PhongChieu> {
    const url = `${this.apiURL}/${id}`;
    return this.http.put<PhongChieu>(url, phong);
  }

  // Delete a room
  deletePhong(id: number): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete<any>(url);
  }
}
