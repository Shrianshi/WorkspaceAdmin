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
  today:Date = new Date();
  events2:any=[];
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
       
        { title: 'event 3', date: '2023-07-25',time:'7.00' }

      ],
      dayMaxEventRows: true,
      plugins: [dayGridPlugin] ,
      
    };
    this.events2= this.calendarOptions.events;
    console.log(this.events2);
  }//ngInit
 
  
}//end iof component
