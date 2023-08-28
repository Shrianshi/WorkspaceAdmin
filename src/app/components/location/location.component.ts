import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})

export class LocationComponent implements OnInit {
  
  constructor(private locationserv: LocationService, private toast: ToastrService, private formBuilder:FormBuilder) { }

  locations: any[] = []

  locationForm!: FormGroup;
  newLocation: any = {
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
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const fileData = fileReader.result as ArrayBuffer;
      const byteArray = new Uint8Array(fileData);
      const numbersArray = Array.from(byteArray);
      const base64String = btoa(String.fromCharCode.apply(null, numbersArray));
      this.newLocation.imageData = base64String;
      console.log(this.newLocation)
    }
    fileReader.readAsArrayBuffer(file);
  }

  ngOnInit(): void {
    this.locationserv.getAllLocation().subscribe((data) => {
      this.locations = data
    }, (error) => {
      console.log(error)
    })
  
    this.locationForm = this.formBuilder.group({
      floorNumberOrBuildingName: ['', Validators.required],
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: [0, Validators.required],
      country: ['', Validators.required],
      imageData: [''],
      numberOfConferenceRooms: [0, Validators.required],
      numberOfDesk: [0, Validators.required],
    });
  
    // Remove this line from ngOnInit
    // this.newLocation = this.locationForm.value;
  }
  

  onSubmit() {
    if (this.locationForm.valid) {
      this.locationserv.addLocation(this.locationForm.value).subscribe((data) => {
        console.log(data); // Check the response from the server
        this.toast.success("Location Added");
        this.locationForm.reset();
      }, (error) => {
        console.log(error);
      });
    }
  }
}  