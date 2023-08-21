import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})

export class LocationComponent {
  selectedImage: File | null = null;
  selectedOption: string = '1';
  floorBuildingName: string = '';
  streetAddress: string = '';
  city: string = '';
  state: string = '';
  pincode: number | null = null;
  country: string = '';
  conferenceRooms: string = '';
  desks: string = '';

  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  onSubmit() {
    const formData = {
      image: this.selectedImage,
      option: this.selectedOption,
      floorBuildingName: this.floorBuildingName,
      streetAddress: this.streetAddress,
      city: this.city,
      state: this.state,
      pincode: this.pincode,
      country: this.country,
      conferenceRooms: this.conferenceRooms,
      desks: this.desks
    };
    
    console.log("success");

    console.log(formData);
  }
}
