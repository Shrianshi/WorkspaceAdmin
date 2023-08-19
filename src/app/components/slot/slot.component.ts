import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent implements OnInit{
  timelineEvents = [
    { date: '2023-08-01', description: 'Event 1' },
    { date: '2023-08-10', description: 'Event 2' },
    { date: '2023-08-18', description: 'Event 3' },
    // Add more events as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
