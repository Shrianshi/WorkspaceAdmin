import { Component, OnInit } from '@angular/core';
import { RoombookingService } from 'src/app/services/bookingservice/roombooking.service';
import { LocationService } from 'src/app/services/location.service';
import { RoomService } from 'src/app/services/roomservice/room.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { WorkspaceFilterService } from 'src/app/services/workspaceFilters/workspace-filter.service';



interface Card {
  ImageUrl: string;
  RoomName: string;
  Location: number;
  Capacity: number;
}

@Component({
  selector: 'app-manage-conference',
  templateUrl: './manage-conference.component.html',
  styleUrls: ['./manage-conference.component.css']
})
export class ManageConferenceComponent implements OnInit {
  header: string = 'Conference Rooms';
  search:string='rooms';
  //count:number=0;

  roomForm: FormGroup;

  constructor(private roomSer: RoomService, private locSer: LocationService, private toast: ToastrService,
    private fb: FormBuilder, private wsService: WorkspaceFilterService) { 
      this.roomForm = this.fb.group({
        roomName: new FormControl('',[Validators.required]),    
        roomCapacity: new FormControl('',[Validators.required]),
        locationId: new FormControl(1, [Validators.required]),
        amenities: new FormControl([],[Validators.required])
      });
    }

  cards: any[] = []
  locations: any[] = []
  locationName: string ='All'
  count: number = 0;


  newRoom: any = {
    imageData: '',
    roomName: '',
    locationId: null,
    roomCapacity: null,
    amenities: []
  };

  amenities: string[] = ['TV', 'Whiteboard', 'Wi-Fi', 'Digital Projector'];
  selectedAmenities: { [key: string]: boolean } = {};

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const fileData = fileReader.result as ArrayBuffer;
      const byteArray = new Uint8Array(fileData);
      const numbersArray = Array.from(byteArray);
      const base64String = btoa(String.fromCharCode.apply(null, numbersArray));
      this.newRoom.imageData = base64String;
      console.log(this.newRoom)
      this.showAddedToast('Image Added');
    }
    fileReader.readAsArrayBuffer(file);
  }

  private showAddedToast(message: string) {
    this.toast.success(message, '', {
      timeOut: 1000 // Time in milliseconds
    });
  }

  ngOnInit(): void {
    this.locSer.getAllLocation().subscribe((data) => {
      this.locations = data
    }, (error) => {
      console.log(error)
    })

    this.roomSer.getAllRoom().subscribe((data) => {
      this.cards = data
      this.count=data.length
    }, (error) => {
      console.log(error)
    })
  }

  addRoom() {
    const selectedAmenitiesList = Object.keys(this.selectedAmenities).filter(amenity => this.selectedAmenities[amenity]);
    console.log('Selected Amenities:', selectedAmenitiesList);
    const amenitiesJson = JSON.stringify(selectedAmenitiesList);
    this.newRoom.amenities = amenitiesJson;
    // console.log("Final data", this.newRoom);
    
    this.roomSer.addRoom(this.newRoom).subscribe((data) => {
      this.toast.success('Room Added')
      console.log(data);
    });
  }
  changeLocationHandler() {
    this.roomOnLocation(this.locationName)
  }
  roomOnLocation(locationName: string) {
    if (locationName == "All") {
      this.roomSer.getAllRoom().subscribe((data) => {
        this.cards = data
        this.count = data.length
      }, (error) => {
        console.log(error)
      })
    }
    else {
      this.wsService.getRoomsByLocation(locationName).subscribe((data) => {
        this.cards = []
        this.cards = data;
        this.count = data.length
      }, (error) => {
        console.log(error)
      })
    }
  }
}

