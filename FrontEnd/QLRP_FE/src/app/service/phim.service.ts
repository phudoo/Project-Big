import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhimService {
  private apiURL = 'http://localhost:5100/api/Phims';

  constructor(private http: HttpClient) {}

  getPhim(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }
}
