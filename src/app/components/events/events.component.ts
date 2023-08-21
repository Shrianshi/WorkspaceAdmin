import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EventService } from 'src/app/services/eventService/event.service';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  constructor(private eventser: EventService, private toast: ToastrService) { }
  events: any[] = []

  newEvent: any = {
    imageData: "",
    eventTitle: "",
    eventDescription: "",
    locationId: 0,
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
    this.eventser.addEvent(this.newEvent).subscribe((data) => {
      this.toast.success("Event Added")
      console.log(data)
    }, (error) => {
      console.log(error)
    })

  }
  ngOnInit(): void {
    this.eventser.getAllEvents().subscribe((data) => {
      this.events = data
    }, (error) => {
      console.log(error)
    })
  }
}