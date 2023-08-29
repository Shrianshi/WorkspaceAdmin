import { Component, OnInit } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  today: Date = new Date();
  
  calendarOptions: CalendarOptions = {};
  header: string = 'Calendar';
  search:string='events'

  events: EventInput[] = [
    { title: 'Event 1', start: '2023-08-27', extendedProps: { time: '8:00 AM' } },
    { title: 'Event 2', start: '2023-08-28', extendedProps: { time: '12:00 PM' } },
    //{ title: 'Event 3', start: '2023-08-28', extendedProps: { time: '2:00 PM' } },
    { title: 'Event 4', start: '2023-08-27', extendedProps: { time: '12:00 PM' } },


  ];
  eventsToday: EventInput[] = [];

  ngOnInit() {
    const todayDate = new Date().toISOString().split('T')[0];
    this.eventsToday = this.events.filter(event => event.start === todayDate);
 
    this.calendarOptions = {
      initialView: 'dayGridMonth', 
      headerToolbar: {
        left: 'dayGridDay,dayGridWeek,dayGridMonth', 
        center: 'title', 
        end: 'prev,next'             
      },
      events: this.events,
      dayMaxEventRows: true,
      plugins: [dayGridPlugin],
      eventContent: this.customEventContent
    };
  }

  customEventContent(info: any) {
    const eventTime = new Date(info.event.start);
    const eventProps = info.event.extendedProps;
    const formattedTime = eventProps && eventProps.time ? eventProps.time : '';
    
    return {
      html: `
        <div>${info.event.title}</div>
        <div>Date: ${eventTime.toDateString()}</div>
        <div>Time: ${formattedTime}</div>
      `
    };
  }
}
