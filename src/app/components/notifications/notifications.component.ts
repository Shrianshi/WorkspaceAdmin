import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocationService } from 'src/app/services/location.service';
import { NotificationService } from 'src/app/services/notificationService/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  header: string = 'Notifications';

  constructor(
    private notiSer: NotificationService,
    private toast: ToastrService,
    private locationSer: LocationService
  ) {}

  cards: any[] = [];
  cardDetail: any = {
    notificationSubject: '',
    description: '',
    location: '',
    date: '',
    time: ''
  };
  locations: any[] = [];
  currentDate = new Date();

  year = this.currentDate.getFullYear();
  month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
  day = String(this.currentDate.getDate()).padStart(2, '0');
  hours = String(this.currentDate.getHours()).padStart(2, '0');
  minutes = String(this.currentDate.getMinutes()).padStart(2, '0');
  seconds = String(this.currentDate.getSeconds()).padStart(2, '0');

  ngOnInit(): void {
    this.notiSer.getAllNotification().subscribe(
      (data) => {
        this.cards = data;
      },
      (error) => {
        console.log(error);
      }
    );
    this.locationSer.getAllLocation().subscribe(
      (data) => {
        this.locations = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    this.cardDetail.date = `${this.year}-${this.month}-${this.day}`;
    this.cardDetail.time = `${this.hours}:${this.minutes}:${this.seconds}`;
    console.log(this.cardDetail);
  
    // Call your notification service here to add the notification
    this.notiSer.addNotification(this.cardDetail).subscribe(
      (data) => {
        this.toast.success('Notification Added');
        console.log('Notification sent:', this.cardDetail);
  
        // Clear the form fields after sending the notification with a delay
        setTimeout(() => {
          this.cardDetail.notificationSubject = '';
          this.cardDetail.description = '';
          this.cardDetail.location = '';
        });
  
      },
      (error) => {
        console.log(error);
      }
    );
  }
}