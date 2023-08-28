import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceFilterService {

  constructor(private http: HttpClient) { }
  getEventByLocation(locationName: string): Observable<any> {
    let dataUrl: string = `https://localhost:7239/api/WorkSpace/event/location?locationName=${locationName}`
    return this.http.get<any>(dataUrl)
  }
  getNotificationByLocation(locationName: string): Observable<any> {
    let dataUrl = `https://localhost:7239/api/WorkSpace/notification/location?locationName=${locationName}`
    return this.http.get<any>(dataUrl)
  }
  getRoomsByLocation(locationName: string): Observable<any> {
    let dataUrl = `https://localhost:7239/api/WorkSpace/manageConf/location?locationName=${locationName}`
    return this.http.get<any>(dataUrl);
  }
  getRBookingByLocation(locationName: string): Observable<any> {
    let dataUrl = `  https://localhost:7239/api/WorkSpace/roomBooking/location?locationName=${locationName}`
    return this.http.get<any>(dataUrl);
  }

}
