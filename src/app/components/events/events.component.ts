import { Component } from '@angular/core';

interface Card {
  ImageUrl:string;
  Title: string;
  Description: string;
  Date:string;
  Time:string;

}


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  cards: Card[] = [
    {
      ImageUrl:'assets/img/Event_img.jpg',
      Title:'Soft Skills Training',
      Date:'12 July, 2022',
      Time:'10:00am-12:00pm',
      Description:'10 People joining this event'
    },
    {
      ImageUrl:'assets/img/Event_Img2.jpg',
      Title:'Soft Skills Training',
      Date:'12 July, 2022',
      Time:'10:00am-12:00pm',
      Description:'10 People joining this event'
    },

  ]
}
