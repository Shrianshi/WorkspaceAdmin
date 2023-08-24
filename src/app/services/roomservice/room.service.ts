import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }
  dataUrl = 'https://localhost:7239/api/Room'
  addRoom(data: any): Observable<any> {
    return this.http.post<any>(this.dataUrl, data)
  }
  getAllRoom(): Observable<any> {
    return this.http.get<any>(this.dataUrl)
  }
  getRoomById(id: number): Observable<any> {
    let url = `${this.dataUrl}/${id}`
    return this.http.get<any>(url)
  }
}
