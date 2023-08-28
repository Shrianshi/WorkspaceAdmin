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

  constructor(private locationserv: LocationService, private toast: ToastrService, private formBuilder: FormBuilder) { }
  locations: any[] = []
  locationForm!: FormGroup;
  newLocation: any = {
    floorNumberOrBuildingName:"",
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
      pincode: [null,[Validators.required, Validators.pattern(/^\d{6}$/)]],
      country: ['', Validators.required],
      imageData: [''],
      numberOfConferenceRooms: [null, Validators.required],
      numberOfDesk: [null, Validators.required],
    });
  }

  get floorNumberOrBuildingName(){
    return this.locationForm.get('floorNumberOrBuildingName');
  }

  get streetAddress(){
    return this.locationForm.get('streetAddress');
  }
  
  get city(){
    return this.locationForm.get('city');
  }

  get state(){
    return this.locationForm.get('state');
  }

  get pincode(){
    return this.locationForm.get('pincode');
  }

  get country(){
    return this.locationForm.get('country');
  }

  get numberOfConferenceRooms(){
    return this.locationForm.get('numberOfConferenceRooms');
  }

  get numberOfDesk(){
    return this.locationForm.get('numberOfDesk');
  }
  get imageData(){
    return this.locationForm.get('imageData')
  }

  onSubmit() {
    if (this.locationForm.valid) {
      this.locationserv.addLocation(this.newLocation).subscribe((data) => {
        console.log(data);
        this.toast.success("Location Added");
        this.locationForm.reset();

        this.newLocation.imageData = '';
      }, (error) => {
        console.log(error);
      });
    }
  }
}  
