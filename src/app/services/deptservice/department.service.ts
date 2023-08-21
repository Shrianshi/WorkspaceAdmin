import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }
  dataUrl: string = 'https://localhost:7239/api/Department'
  getAllDepartment(): Observable<any> {
    return this.http.get<any>(this.dataUrl)
  }

}
