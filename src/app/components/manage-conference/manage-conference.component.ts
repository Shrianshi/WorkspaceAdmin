import { Component, OnInit } from '@angular/core';

interface Card{
  ImageUrl:string;
  RoomName:string;
  Location:string;
  Capacity:number;
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
   },
   {
    ImageUrl:'assets/images/conference2.jpeg',
    RoomName:'Sunrise',
    Location:'Pune',
    Capacity:6,
   },
   {
    ImageUrl:'assets/images/conference3.jpeg',
    RoomName:'Sunset',
    Location:'Bangalore',
    Capacity:12,
   },
   {
    ImageUrl:'assets/images/conference4.jpeg',
    RoomName:'Dotnet',
    Location:'Chennai',
    Capacity:6,
   },
   {
    ImageUrl:'assets/images/conference6.jpeg',
    RoomName:'CHC 2.0',
    Location:'Pune',
    Capacity:10,
   },
   {
    ImageUrl:'assets/images/conference5.jpeg',
    RoomName:'Storyboard',
    Location:'Bangalore',
    Capacity:14,
   },

  ]

  //Console Print 
  newRoom: Card = {
    ImageUrl: '',
    RoomName: '',
    Location: 'Location',
    Capacity: 5
  };

  addRoom() {

    console.log('this is newdata', this.newRoom);
    const selectedAmenitiesList = Object.keys(this.selectedAmenities).filter(amenity => this.selectedAmenities[amenity]);
    console.log('Selected Amenities:', selectedAmenitiesList);
  }

  amenities: string[] = ['TV', 'Whiteboard', 'Wi-Fi', 'Digital Projector'];
  selectedAmenities: { [key: string]: boolean } = {};

  ngOnInit() {
  }

}
