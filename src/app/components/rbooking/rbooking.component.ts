import { Component } from '@angular/core';

@Component({
  selector: 'app-rbooking',
  templateUrl: './rbooking.component.html',
  styleUrls: ['./rbooking.component.css']
})
export class RbookingComponent {
  header:string='Room Bookings'
  rooms: any[] = []
  test:string=''

}
