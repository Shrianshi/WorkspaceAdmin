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
  cards:any[]=[]

  newRoom: any = {
    imageData: '',
    roomName: '',
    location: '',
    capacity: 5,
    amenities:[]
  };
  amenities: string[] = ['TV', 'Whiteboard', 'Wi-Fi', 'Digital Projector'];
  selectedAmenities: { [key: string]: boolean } = {};

  addRoom() {
    console.log('this is newdata', this.newRoom);
    const selectedAmenitiesList = Object.keys(this.selectedAmenities).filter(amenity => this.selectedAmenities[amenity]);
    console.log('Selected Amenities:', selectedAmenitiesList);
    this.newRoom.amenities=this.selectedAmenities
    console.log("final data",this.newRoom)

  }

 

  ngOnInit() {
  }

}
