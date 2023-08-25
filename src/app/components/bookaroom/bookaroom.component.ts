import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/services/roomservice/room.service';

interface Card{
  ImageUrl:string;
  RoomName:string;
  Location:string;
  Capacity:number;
  Color:string;
}

@Component({
  selector: 'app-bookaroom',
  templateUrl: './bookaroom.component.html',
  styleUrls: ['./bookaroom.component.css']
})
export class BookaroomComponent implements OnInit {
  header:string='Book a room';
  search:string='booked room';

  constructor(private router: Router,private roomSer:RoomService) {}

  redirectToSlot() {
    this.router.navigate(['slot']);
  }

  cards: any[]=[
    
   

  ]

  ngOnInit() {
    this.applyColors();
    this.roomSer.getAllRoom().subscribe((data)=>{
      this.cards=data
    },(error)=>{
      console.log(error)
    })
  }

  applyColors() {
    for (const card of this.cards) {
      switch (card.Location.toLowerCase()) {
        case 'pune':
          card.Color = 'rgba(246, 81, 81, 0.14)';
          break;
        case 'bangalore':
          card.Color = 'rgba(173, 81, 246, 0.14)';
          break;
        case 'chennai':
          card.Color = 'rgba(81, 98, 246, 0.14)';
          break;
        default:
          card.Color = ''; 
          break;
      }
    }
  }

}
