import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kdramas } from '../models/kdramas';
@Injectable({
  providedIn: 'root'
})
export class KdramasService {
private baseUrl ="assets/kdramas.json";
  constructor(private http: HttpClient ) { }
  fetchKdramas(): Observable<Kdramas[]> {
    return this.http.get<Kdramas[]>(this.baseUrl);
  }
}
