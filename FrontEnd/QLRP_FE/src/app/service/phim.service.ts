import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhimService {
  private apiURL = 'http://localhost:5100/api/Phims';

  constructor(private http: HttpClient) {}

  // Get all movies
  getPhim(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }
  getPhimById(id: number): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<any>(url);
  }
  
  // Add a new movie
  addPhim(phim: any): Observable<any> {
    return this.http.post<any>(this.apiURL, phim);
  }

  // Update an existing movie
  updatePhim(id: number, phim: any): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.put<any>(url, phim);
  }

  // Delete a movie
  deletePhim(id: number): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete<any>(url);
  }
}
