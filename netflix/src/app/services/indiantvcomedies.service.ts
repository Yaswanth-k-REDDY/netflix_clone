import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class IndiantvcomediesService {
private baseurl ="http://localhost:8081/api/version1/getDetails";
  constructor(private http: HttpClient) { }
  onSubmit(){
    return this.http.get(this.baseurl);
  }
}
