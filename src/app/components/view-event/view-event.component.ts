import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/eventService/event.service';

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
export class ViewEventComponent implements OnInit {
  constructor(private activatedroute: ActivatedRoute, private eventSer: EventService) { }

  event: any = {}
  eventtId: string | null = ''
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param) => {
      this.eventtId = param.get('id')
    })
    if (this.eventtId != null)
      this.eventSer.getEventById(parseInt(this.eventtId)).subscribe((data) => {
        this.event = data
      })

  }
}

