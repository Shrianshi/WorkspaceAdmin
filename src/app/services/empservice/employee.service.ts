import { HttpClient, HttpParams } from '@angular/common/http';
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
  updateEmployee(id: number, data: any): Observable<any> {
    let dataUrl = `${this.dataUrl}/${id}`
    return this.http.put<any>(dataUrl, data)
  }
  deleteEmployee(id: number): Observable<any> {
    let dataUrl = `${this.dataUrl}/${id}`
    return this.http.delete<any>(dataUrl)
  }
  getEmployeesByLocations(locationNames: string[]): Observable<any> {
    locationNames=["chennai"];
    const params = new HttpParams().set('locationNames', locationNames.join(','));
    return this.http.get<any>('https://localhost:7239/api/FilterLocation', { params });
  }
  
}
