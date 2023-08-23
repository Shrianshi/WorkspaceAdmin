import { Component, OnInit } from '@angular/core';

interface Card{
  imageData:string;
  roomName:string;
  roomLocation:string;
  roomCapacity:number;
}

@Component({
  selector: 'app-manage-conference',
  templateUrl: './manage-conference.component.html',
  styleUrls: ['./manage-conference.component.css']
})
export class ManageConferenceComponent  implements OnInit {
   cards: Card[]=[
    {
    imageData:'assets/images/conference1.jpeg',
    roomName:'Spring 4Pax',
    roomLocation:'Chennai',
    roomCapacity:20,
   },
   {
    imageData:'assets/images/conference2.jpeg',
    roomName:'Sunrise',
    roomLocation:'Pune',
    roomCapacity:6,
   },
   {
    imageData:'assets/images/conference3.jpeg',
    roomName:'Sunset',
    roomLocation:'Bangalore',
    roomCapacity:12,
   },
   {
    imageData:'assets/images/conference4.jpeg',
    roomName:'Dotnet',
    roomLocation:'Chennai',
    roomCapacity:6,
   },
   {
    imageData:'assets/images/conference6.jpeg',
    roomName:'CHC 2.0',
    roomLocation:'Pune',
    roomCapacity:10,
   },
   {
    imageData:'assets/images/conference5.jpeg',
    roomName:'Storyboard',
    roomLocation:'Bangalore',
    roomCapacity:14,
   },

  ]

  //Console Print 
  newRoom: Card = {
    imageData: '',
    roomName: '',
    roomLocation: 'Location',
    roomCapacity: 5
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
