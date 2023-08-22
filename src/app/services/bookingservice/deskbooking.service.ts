import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeskbookingService {

  constructor(private http: HttpClient) { }
  dataUrl = 'https://localhost:7239/api/DeskBooking'
  getAllDeskBooking(): Observable<any> {
    return this.http.get<any>(this.dataUrl)
  }
  addDeskBooking(data: any): Observable<any> {
    return this.http.post<any>(this.dataUrl, data)
  }

}
