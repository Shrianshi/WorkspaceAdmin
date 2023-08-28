import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/empservice/employee.service';
import { RoomService } from 'src/app/services/roomservice/room.service';
import { RoombookingService } from 'src/app/services/bookingservice/roombooking.service';
import { DeskbookingService } from 'src/app/services/bookingservice/deskbooking.service';
// import 'bootstrap-datepicker';

@Component({
  selector: 'app-article-section',
  templateUrl: './article-section.component.html',
  styleUrls: ['./article-section.component.css']
})
export class ArticleSectionComponent implements OnInit {
  header:string='Welcome admin';
  para:string='View complete details of all location and its corresponding details';
  search:string='bookings';

  date?:Date=new Date();
  count: number = 0;
  roomscount: number=0;
  deskcount:number=0;
  occupancy:number=0;

  constructor(private bookingSer:RoombookingService, private roomSer:RoomService,private deskSer:DeskbookingService) { }

  bookedrooms:any[]=[];
  bookeddesks:any[]=[];
  ngOnInit() {
    this.bookingSer.getAllRoomBookig().subscribe((data)=>{
      this.count=data.length
    },(error)=>{
      console.log(error)
    })

    this.roomSer.getAllRoom().subscribe((data)=>{
      this .roomscount=data.length
    },(error)=>{
      console.log(error)
    })

    this.deskSer.getAllDeskBooking().subscribe((data)=>{
      this.deskcount=data.length
    },(error)=>{
      console.log(error)
    })
  }
  
  calculating(){
    this.occupancy=(this.count/this.roomscount)*100
    return this.occupancy;
  }
  
}
