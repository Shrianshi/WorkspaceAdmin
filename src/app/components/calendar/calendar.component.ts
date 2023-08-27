import { Component,OnInit,AfterViewInit } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import * as $ from 'jquery';
import 'bootstrap-datepicker';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  today:Date = new Date();
  
  calendarOptions: CalendarOptions = {};
  header:string='Calendar';
  events: EventInput[] = [
    { title: 'Event 1', start: '2023-08-08', time: '8:00 AM' },
    { title: 'Event 2', start: '2023-08-09', time: '12:00' },
  ];
  events2:EventInput=[];
  
  ngOnInit() {
    this.calendarOptions = {
      initialView: 'dayGridMonth', 
      headerToolbar: {
        
        left: 'dayGridDay,dayGridWeek,dayGridMonth', 
        center: 'title', 
        end: 'prev,next'             
      },
      events: [
       
        { title: 'event 3', date: '2023-07-25',time:'7.00' }

      ],
      dayMaxEventRows: true,
      plugins: [dayGridPlugin] ,
      
      
    };

    
    
    }
  customEventContent(info:any) {
    return { html: `<div>${info.event.title}</div><div>${info.event.start.toLocaleTimeString()}</div>` };
  }
  
}
