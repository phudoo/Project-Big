import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NguoiDungService {
  private apiURL = 'http://localhost:5100/api/NguoiDungs';

  constructor(private http: HttpClient) {}

  // Get all users
  getNguoiDung(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  // Get user by ID
  getNguoiDungById(id: number): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<any>(url);
  }
  
  // Add a new user
  addNguoiDung(nguoiDung: any): Observable<any> {
    return this.http.post<any>(this.apiURL, nguoiDung);
  }

  // Update an existing user
  updateNguoiDung(id: number, nguoiDung: any): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.put<any>(url, nguoiDung);
  }

  // Delete a user
  deleteNguoiDung(id: number): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete<any>(url);
  }
}
