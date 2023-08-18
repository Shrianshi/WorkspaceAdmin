import { Component, OnInit } from '@angular/core';

interface Card{
  ImageUrl:string;
  RoomName:string;
  Location:string;
  Capacity:number;
  Color:string;
}

@Component({
  selector: 'app-manage-conference',
  templateUrl: './manage-conference.component.html',
  styleUrls: ['./manage-conference.component.css']
})
export class ManageConferenceComponent  implements OnInit {
   cards: Card[]=[
    
    {
    ImageUrl:'assets/images/conference1.jpeg',
    RoomName:'Spring 4Pax',
    Location:'Chennai',
    Capacity:20,
    Color:''
   },
   {
    ImageUrl:'assets/images/conference2.jpeg',
    RoomName:'Sunrise',
    Location:'Pune',
    Capacity:6,
    Color:''
   },
   {
    ImageUrl:'assets/images/conference3.jpeg',
    RoomName:'Sunset',
    Location:'Bangalore',
    Capacity:12,
    Color:''
   },
   {
    ImageUrl:'assets/images/conference4.jpeg',
    RoomName:'Dotnet',
    Location:'Chennai',
    Capacity:6,
    Color:''
   },
   {
    ImageUrl:'assets/images/conference6.jpeg',
    RoomName:'CHC 2.0',
    Location:'Pune',
    Capacity:10,
    Color:''
   },
   {
    ImageUrl:'assets/images/conference5.jpeg',
    RoomName:'Storyboard',
    Location:'Bangalore',
    Capacity:14,
    Color:''
   },

  ]

  ngOnInit() {
    this.applyColors();
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
          card.Color = ''; // Set a default color or leave it empty
          break;
      }
    }
  }
  
}
