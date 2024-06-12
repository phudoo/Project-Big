import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhongService {
  private apiURL = 'http://localhost:5100/api/PhongChieus';

  constructor(private http: HttpClient) {}

  // Get all rooms
  getPhong(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  // Add a new room
  addPhong(phong: any): Observable<any> {
    return this.http.post<any>(this.apiURL, phong);
  }

  // Update an existing room
  updatePhong(id: number, phong: any): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.put<any>(url, phong);
  }

  // Delete a room
  deletePhong(id: number): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete<any>(url);
  }
}
