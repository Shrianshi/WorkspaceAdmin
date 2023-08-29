import { Component, OnInit } from '@angular/core';
import { RoombookingService } from 'src/app/services/bookingservice/roombooking.service';
import { WorkspaceFilterService } from 'src/app/services/workspaceFilters/workspace-filter.service';

@Component({
  selector: 'app-rbooking',
  templateUrl: './rbooking.component.html',
  styleUrls: ['./rbooking.component.css']
})
export class RbookingComponent implements OnInit {
  constructor(private rbookingSer: RoombookingService, private wsfilter: WorkspaceFilterService) { }
  header: string = 'Room Bookings';
  search:string='room bookings';
  count:number=0
  rooms: any[] = []
  test: string = ''
  filterloc: string = ''
  ngOnInit(): void {
    this.rbookingSer.getAllRoomBookig().subscribe((data) => {
      this.rooms = data
      this.count=data.length
    }, (error) => {
      console.log(error)
    })
  }
  changeFilterLoc() {
    this.rBookingFilterOnLocation(this.filterloc)
  }
  rBookingFilterOnLocation(locationName: string) {
    if (locationName == "All") {
      this.rbookingSer.getAllRoomBookig().subscribe((data) => {
        this.rooms = data
      }, (error) => {
        console.log(error)
      })
    }
    else {
      this.wsfilter.getRBookingByLocation(locationName).subscribe((data) => {
        this.rooms = []
        this.rooms = data;
      }, (error) => {
        console.log(error)
      })
    }
  }
}
