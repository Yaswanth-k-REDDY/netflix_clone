import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thrillermovies } from '../models/thrillermovies';
@Injectable({
  providedIn: 'root'
})
export class ThrillermoviesService {
private baseUrl =" http://localhost:8082/api/v1/thrillermoviesdata";
  constructor(private http: HttpClient ) { }
  fetchThrillermovies(): Observable<Thrillermovies[]> {
    return this.http.get<Thrillermovies[]>(this.baseUrl);
  }
}
