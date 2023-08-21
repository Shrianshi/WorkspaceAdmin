import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

interface Card {
  ImageUrl: string;
  Title: string;
  Description: string;
  date: string; 
  Time: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  eventForm: FormGroup; // Define the eventForm property

  cards: Card[] = [
    {
      ImageUrl: 'assets/img/Event_img.jpg',
      Title: 'Soft Skills Training',
      date: 'Jan 5, 2023', // Use a string in a consistent date format
      Time: '10:00am-12:00pm',
      Description: '10 People joining this event',
    },
    {
      ImageUrl: 'assets/img/Event_Img2.jpg',
      Title: 'Soft Skills Training',
      date: 'Oct 10, 2023', // Use a string in a consistent date format
      Time: '10:00am-12:00pm',
      Description: '10 People joining this event',
    },
  ];

  

  newEvent: Card = {
    ImageUrl: '',
    Title: '',
    date: '',
    Time: '',
    Description: '',
  };

   constructor(private formBuilder: FormBuilder) {
    this.eventForm = this.formBuilder.group({
      eventLocation: ['', Validators.required], // Example form control with validation
    });
  }
  handleImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.displayImage(file);

      // Process the uploaded file, e.g., display it or send it to a server
    }
  }
  displayImage(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.newEvent.ImageUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  addEvent() {
    // Push the newEvent to the cards array if valid
    if (
      this.newEvent.ImageUrl &&
      this.newEvent.Title &&
      this.newEvent.date &&
      this.newEvent.Time &&
      this.newEvent.Description
    ) {
      this.cards.push(this.newEvent);
      console.log('New event added:', this.newEvent);
      this.resetNewEvent(); // Reset the newEvent object
    } else {
      console.log('Please fill in all fields before adding the event.');
    }
  }

  resetNewEvent() {
    // Reset the newEvent object to its initial state
    this.newEvent = {
      ImageUrl: '',
      Title: '',
      date: '',
      Time: '',
      Description: '',
    };
  }
}