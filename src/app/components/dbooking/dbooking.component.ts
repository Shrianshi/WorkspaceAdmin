import { Component, OnInit } from '@angular/core';
import { DeskbookingService } from 'src/app/services/bookingservice/deskbooking.service';

@Component({
  selector: 'app-dbooking',
  templateUrl: './dbooking.component.html',
  styleUrls: ['./dbooking.component.css']
})
export class DbookingComponent implements OnInit{
  constructor(private deskSer:DeskbookingService){}
  deskbookings:any[]=[]
  ngOnInit(): void {
    this.deskSer.getAllDeskBooking().subscribe((data)=>{
      this.deskbookings=data
    },(error)=>{
      console.log(error)
    })
  }

}
