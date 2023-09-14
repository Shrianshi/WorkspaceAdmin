import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  dataUrl: string = 'https://localhost:7239/api/Auth/Login'
  loginAdmin(data: any): Observable<any> {
    return this.http.post<any>(this.dataUrl, data)
  }
  updatePassword(data: any, email: string): Observable<any> {
    let dataUrl: string = `https://localhost:7239/api/Auth/updatePass?email=${email}`
    return this.http.put<any>(dataUrl, data)
  }
  getUserByEmail(email: string): Observable<any> {
    let dataUrl = `https://localhost:7239/api/Auth/getAdminByEmail?email=${email}`
    return this.http.get<any>(dataUrl)
  }
}
