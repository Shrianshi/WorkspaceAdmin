import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})

export class LocationComponent implements OnInit {
  constructor(private locationserv: LocationService, private toast: ToastrService) { }
  locationDetail: any = {
    floorNumberOrBuildingName: "",
    streetAddress: "",
    city: "",
    state: "",
    pincode: 0,
    country: "",
    imageData: "",
    numberOfConferenceRooms: 0,
    numberOfDesk: 0,
  }
  locations: any[] = []


  onFileSelected(event: any) {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const fileData = fileReader.result as ArrayBuffer;
      const byteArray = new Uint8Array(fileData);
      const numbersArray = Array.from(byteArray);
      const base64String = btoa(String.fromCharCode.apply(null, numbersArray));
      this.locationDetail.imageData = base64String;
      console.log(this.locationDetail)
    }
    fileReader.readAsArrayBuffer(file);
  }
  ngOnInit(): void {
    this.locationserv.getAllLocation().subscribe((data) => {
      this.locations = data
      console.log(this.locations)
    }, (error) => {
      console.log(error)
    })

  }

  onSubmit() {
    console.log(this.locationDetail)
    this.locationserv.addLocation(this.locationDetail).subscribe((data) => {
      this.toast.success("Location Added")
      console.log(data)
    }, (error) => {
      console.log(error)
    })
  }
  testToast() {
    this.toast.success("Location Added")

  }
}

