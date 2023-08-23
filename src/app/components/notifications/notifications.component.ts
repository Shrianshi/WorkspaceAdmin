import { Component, OnInit } from '@angular/core';
import { error } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/services/notificationService/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  constructor(private notiSer: NotificationService, private toast: ToastrService) { }
  cards: any[] = []
  cardDetail: any = {
    notificationSubject: "",
    description: "",
    location: "",
    date: "",
    time: ""
  }
  currentDate = new Date();

  year = this.currentDate.getFullYear();
  month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
  day = String(this.currentDate.getDate()).padStart(2, '0');
  hours = String(this.currentDate.getHours()).padStart(2, '0');
  minutes = String(this.currentDate.getMinutes()).padStart(2, '0');
  seconds = String(this.currentDate.getSeconds()).padStart(2, '0');
  ngOnInit(): void {
    this.notiSer.getAllNotification().subscribe((data) => {
      this.cards = data
    }, (error) => {
      console.log(error)
    })
  }

  onSubmit() {
    this.cardDetail.date = `${this.year}-${this.month}-${this.day}`;
    this.cardDetail.time = `${this.hours}:${this.minutes}:${this.seconds}`;
    console.log(this.cardDetail)
    this.notiSer.addNotification(this.cardDetail).subscribe((data) => {
      this.toast.success("Notification Added")
      console.log(this.cardDetail)
    }, (error) => {
      console.log(error)
    })
  }
}
