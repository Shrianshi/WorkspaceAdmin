import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocationService } from 'src/app/services/location.service';
import { NotificationService } from 'src/app/services/notificationService/notification.service';
import { WorkspaceFilterService } from 'src/app/services/workspaceFilters/workspace-filter.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  header: string = 'Notifications';
  search:string='notifications'

  constructor(private notiSer: NotificationService, private toast: ToastrService, private lcoationSer: LocationService, private wsFilterSer: WorkspaceFilterService) { }
  cards: any[] = []
  cardDetail: any = {
    notificationSubject: "",
    description: "",
    locationId: 0,
    date: "2023-08-26T22:09:44.005Z",
    time: "2023-08-26T22:09:44.005Z",
  }
  locations: any[] = []

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
    this.lcoationSer.getAllLocation().subscribe((data) => {
      this.locations = data
    }, (error) => {
      console.log(error)
    })

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
          this.cardDetail.locationId = '';
        });

        this.cardDetail.reset();
  

      },
      (error) => {
        console.log(error);
      }
    );
  }
  allNotification() {
    this.notiSer.getAllNotification().subscribe((data) => {
      this.cards = data
    }, (error) => {
      console.log(error)
    })

  }
  chennaiNotification() {
    this.wsFilterSer.getNotificationByLocation("Chennai").subscribe((data) => {
      this.cards = data
    })
  }
  puneNotification() {
    this.wsFilterSer.getNotificationByLocation("Pune").subscribe((data) => {
      this.cards = data
    })
  }
  coimbatoreNotification() {
    this.wsFilterSer.getNotificationByLocation("Coimbatore").subscribe((data) => {
      this.cards = data
    })
  }

}




