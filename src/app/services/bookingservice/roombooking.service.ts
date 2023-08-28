import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoombookingService {

  constructor(private http: HttpClient) { }
  dataUrl = 'https://localhost:7239/api/RoomBooking'
  getAllRoomBookig(): Observable<any> {
    return this.http.get<any>(this.dataUrl)
  }
  addRoomBooking(data: any): Observable<any> {
    return this.http.post<any>(this.dataUrl, data)
  }
}
