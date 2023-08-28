import { Component, OnInit } from '@angular/core';
import { RoombookingService } from 'src/app/services/bookingservice/roombooking.service';
import { LocationService } from 'src/app/services/location.service';
import { RoomService } from 'src/app/services/roomservice/room.service';
import { ToastrService } from 'ngx-toastr';
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
  header: string = 'Conference Rooms'
  constructor(private roomSer: RoomService, private locSer: LocationService, private toast: ToastrService, private wsService: WorkspaceFilterService) { }
  cards: any[] = []
  locations: any[] = []
  locationName: string = 'All'

  newRoom: any = {
    imageData: '',
    roomName: '',
    locationId: 1,
    roomCapacity: 5,
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
    }
    fileReader.readAsArrayBuffer(file);
  }
  ngOnInit(): void {
    this.locSer.getAllLocation().subscribe((data) => {
      this.locations = data
    }, (error) => {
      console.log(error)
    })

    this.roomSer.getAllRoom().subscribe((data) => {
      this.cards = data
    }, (error) => {
      console.log(error)
    })
  }
  addRoom() {
    const selectedAmenitiesList = Object.keys(this.selectedAmenities).filter(amenity => this.selectedAmenities[amenity]);
    console.log('Selected Amenities:', selectedAmenitiesList);
    const amenitiesJson = JSON.stringify(selectedAmenitiesList);
    this.newRoom.amenities = amenitiesJson;
    console.log("Final data", this.newRoom);
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
      }, (error) => {
        console.log(error)
      })
    }
    else {
      this.wsService.getRoomsByLocation(locationName).subscribe((data) => {
        this.cards = []
        this.cards = data;
      }, (error) => {
        console.log(error)
      })
    }
  }
}
