import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  dataUrl:string='https://localhost:7239/api/Auth/Login'
  loginAdmin(data:any):Observable<any>{
    return this.http.post<any>(this.dataUrl,data)
  }
}
