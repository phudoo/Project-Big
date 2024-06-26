// src/app/service/ghe.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ghe } from '../Models/Ghe';

@Injectable({
  providedIn: 'root'
})
export class GheService {
  private apiURL = 'http://localhost:5100/api/Ghes';

  constructor(private http: HttpClient) {}

  // Get all seats
  getGhes(): Observable<Ghe[]> {
    return this.http.get<Ghe[]>(this.apiURL);
  }

  // Get a specific seat by ID
  getGhe(id: number): Observable<Ghe> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Ghe>(url);
  }

  // Add a new seat
  addGhe(ghe: Ghe): Observable<Ghe> {
    return this.http.post<Ghe>(this.apiURL, ghe);
  }

  // Update an existing seat
  updateGhe(id: number, ghe: Ghe): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.put(url, ghe);
  }

  // Delete a seat
  deleteGhe(id: number): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url);
  }
}
