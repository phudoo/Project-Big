import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhimService {
  private apiURL = 'http://localhost:5100/api/Phims';

  constructor(private http: HttpClient) {} 
  /* constructor này dùng để inject HttpClient vào service PhimService, 
  cho phép PhimService có thể sử dụng HttpClient để thực hiện các yêu cầu HTTP tới API backend  */

  getPhim(): Observable<any> {  /*Nó cho phép các component của ứng dụng có thể lấy danh sách các bộ phim từ API để hiển thị hoặc xử lý tiếp. */
    return this.http.get<any>(this.apiURL); /*gửi yêu cầu HTTP GET tới một API backend (this.apiURL) */
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
    // phim.service.ts
searchPhimByTitle(TieuDe: string): Observable<any> {
  const url = `${this.apiURL}/search?TieuDe=${TieuDe}`;
  return this.http.get<any>(url);
}
}
