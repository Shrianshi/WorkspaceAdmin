import { Component } from '@angular/core';

interface Card {
  Title: string;
  Description: string;
  Location:string;
  Date:string;
  Time:string;

}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  cards: Card[] = [
    {
      Title:'Pune Capacity Increases',
      Description:'Execute paddle on both sides, so put a record on and see who dances execute UX, and this proposal is a win-win situation which will cause a stellar paradigm shift, and produce a multi-fold increase in deliverables. Cloud strategy after I ran into Helen at a restaurant, I realized she was just office pretty we need to leverage.',
      Location:'Pune',
      Date:'July 11, 2022',
      Time:'11:30am'
    },
    {
      Title:'Pune Capacity Increases',
      Description:'Execute paddle on both sides, so put a record on and see who dances execute UX, and this proposal is a win-win situation which will cause a stellar paradigm shift, and produce a multi-fold increase in deliverables. Cloud strategy after I ran into Helen at a restaurant, I realized she was just office pretty we need to leverage.',
      Location:'Pune',
      Date:'July 11, 2022',
      Time:'11:30am'
    }
  ]
}
