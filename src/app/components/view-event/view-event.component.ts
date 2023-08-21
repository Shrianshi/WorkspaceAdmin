import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Card {
  ImageUrl: string;
  Title: string;
  date: string;
  Time: string;
  Description: string;
}
@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent {

  cards: Card[] = [
    {
      ImageUrl: 'assets/images/Event desc.png',
      Title: 'Soft Skills Training',
      date: 'Jan 5, 2023', 
      Time: '10:00am-12:00pm',
      Description: '10 People joining this event',
    }
  ];
}

