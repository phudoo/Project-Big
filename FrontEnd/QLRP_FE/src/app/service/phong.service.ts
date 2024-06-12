import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhongService {
  private apiURL = 'http://localhost:5100/api/PhongChieus';

  constructor(private http: HttpClient) {}

  getPhong(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }
}