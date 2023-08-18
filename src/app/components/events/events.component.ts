import { Component } from '@angular/core';

interface Card {
  ImageUrl: string;
  Title: string;
  Description: string;
  date: string; // Use string for date
  Time: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
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

  addEvent() {

    console.log('this is newdata', this.newEvent);
  }
}
