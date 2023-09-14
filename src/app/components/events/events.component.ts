import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EventService } from 'src/app/services/eventService/event.service';
import { LocationService } from 'src/app/services/location.service';
import { WorkspaceFilterService } from 'src/app/services/workspaceFilters/workspace-filter.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  header: string = 'Events';
  search: string = 'events';
  eventForm: FormGroup;

  constructor(private eventser: EventService, private toast: ToastrService, private locser: LocationService,
    private wsfilterser: WorkspaceFilterService, private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      eventTitle: new FormControl('', [Validators.required]),
      eventDescription: new FormControl('', [Validators.required]),
      locationId: new FormControl(1, [Validators.required]),
      startTime: new FormControl('', [Validators.required]),
      endTime: new FormControl('', [Validators.required]),
    });
  }
  events: any[] = []
  locations: any[] = []
  filterloc: string = 'All'
  filterDate: string = 'l'
  count: number = 0;
  newEvent: any = {
    imageData: "",
    eventTitle: "",
    eventDescription: "",
    locationId: 1,
    startTime: "2023-08-21T17:38:43.809Z",
    endTime: "2023-08-21T17:38:43.809Z",
  };
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const fileData = fileReader.result as ArrayBuffer;
      const byteArray = new Uint8Array(fileData);
      const numbersArray = Array.from(byteArray);
      const base64String = btoa(String.fromCharCode.apply(null, numbersArray));
      this.newEvent.imageData = base64String;
      console.log(this.newEvent)
    }
    fileReader.readAsArrayBuffer(file);
  }
  addEvent() {
    if (this.eventForm.valid) {
      console.log('addevent');
      this.newEvent.eventTitle = this.eventForm.get('eventTitle')?.value;
      this.newEvent.eventDescription = this.eventForm.get('eventDescription')?.value;
      this.newEvent.locationId = this.eventForm.get('locationId')?.value;
      this.newEvent.startTime = this.eventForm.get('startTime')?.value;
      this.newEvent.endTime = this.eventForm.get('endTime')?.value;
      this.eventser.addEvent(this.newEvent).subscribe(
        (data) => {
          this.toast.success('Event Added');
          console.log(data);
          this.eventForm.reset();

        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.toast.error('Invalid form data. Please check the fields.');
    }
  }

  changeFilterLoc() {
    console.log(this.filterloc)
    this.eventFilterOnLocation(this.filterloc)
  }
  eventFilterOnLocation(locationName: string) {
    if (locationName == "All") {
      this.eventser.getAllEvents().subscribe((data) => {
        this.events = data
        this.count = data.length

      }, (error) => {
        console.log(error)
      })
    }
    else {
      this.wsfilterser.getEventByLocation(locationName).subscribe((data) => {
        this.events = []
        this.events = data;
        this.count = data.length
      }, (error) => {
        console.log(error)
      })
    }
  }
  ngOnInit(): void {
    this.eventser.getAllEvents().subscribe((data) => {
      this.events = data
      this.count = data.length
    }, (error) => {
      console.log(error)
    })
    this.locser.getAllLocation().subscribe((data) => {
      this.locations = data
    }, (error) => {
      console.log(error)
    })
  }
  filterArrayOnDate(arr: any[], filterDate: string): any[] {
    let filteredArray: any[] = []
    filteredArray = arr.filter((item: any) => {
      const eventDate = item.startTime.slice(0, 10)
      console.log(eventDate, " ", filterDate)
      return eventDate === filterDate
    })
    return filteredArray;
  }
  handleDateChange() {
    if (this.filterDate.length <= 3) {
      this.changeFilterLoc()
    }
    else {
      if (this.filterloc == "All") {
        this.eventser.getAllEvents().subscribe((data) => {
          this.events = this.filterArrayOnDate(data, this.filterDate)
          this.count = this.events.length

        }, (error) => {
          console.log(error)
        })
      }
      else {
        this.wsfilterser.getEventByLocation(this.filterloc).subscribe((data) => {
          this.events = this.filterArrayOnDate(data, this.filterDate);
          this.count = this.events.length

        }, (error) => {
          console.log(error)
        })
      }
    }
  }
}