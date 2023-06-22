import { Component,OnInit,AfterViewInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import * as $ from 'jquery';
import 'bootstrap-datepicker';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  
  calendarOptions: CalendarOptions = {
    
   
  };
  
  ngOnInit() {
    this.calendarOptions = {
      initialView: 'dayGridMonth', 
      headerToolbar: {
        
        left: 'dayGridDay,dayGridWeek,dayGridMonth', 
        center: 'title', 
        end: 'prev,next'             
      },
      events: [
        { title: 'event 1', date: '2023-06-01' },
        { title: 'event 2', date: '2019-04-02' }
      ],
      dayMaxEventRows: true,
      plugins: [dayGridPlugin] ,
      
    };
  }
  

  
}
