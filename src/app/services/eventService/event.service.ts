import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }
  dataUrl: string = 'https://localhost:7239/api/Event'
  addEvent(data: any): Observable<any> {
    return this.http.post<any>(this.dataUrl, data)
  }
  getAllEvents(): Observable<any> {
    return this.http.get<any>(this.dataUrl)
  }
  getEventById(id: number): Observable<any> {
    let url = `${this.dataUrl}/${id}`
    return this.http.get<any>(url)
  }
}
