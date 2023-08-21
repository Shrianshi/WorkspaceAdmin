import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  dataUrl: string = 'https://localhost:7239/api/Employee'
  addEmployee(data: any): Observable<any> {
    return this.http.post<any>(this.dataUrl, data)
  }
  getEmployees(): Observable<any> {
    return this.http.get<any>(this.dataUrl)
  }
}
