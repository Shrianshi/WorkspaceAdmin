import { Component,OnInit } from '@angular/core';
import { RoombookingService } from 'src/app/services/bookingservice/roombooking.service';

@Component({
  selector: 'app-mbooking',
  templateUrl: './mbooking.component.html',
  styleUrls: ['./mbooking.component.css']
})
export class MbookingComponent {
  count:number=0
  header:string='My Bookings';
  search:string='my bookings'

  constructor(private bookingSer:RoombookingService){}
  cards:any[]=[]
  ngOnInit(){
     this.bookingSer.getAllRoomBookig().subscribe((data)=>{
      this.cards=data
      this.count=data.length
     },(error)=>{
      console.log(error)
     })
  }

}
