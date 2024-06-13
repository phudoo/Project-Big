import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5100/api/NguoiDungs';

  constructor(private http: HttpClient) { }

  login(tenNguoiDung: string, matKhau: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { tenNguoiDung, matKhau })
      .pipe(
        map(response => {
          if (response && response.token) {
            localStorage.setItem('currentUser', JSON.stringify(response));
          }
          return response;
        })
      );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }
}
