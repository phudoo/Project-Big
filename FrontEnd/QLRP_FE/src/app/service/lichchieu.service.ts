import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LichchieuService {
  private apiURL = 'http://localhost:5100/api/LichChieus';

  constructor(private http: HttpClient) {}

  getSuat(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }
}
