import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

import { ToastrModule, provideToastr } from 'ngx-toastr';
import { NoopAnimationsModule, } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticleSectionComponent } from './components/article-section/article-section.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EventsComponent } from './components/events/events.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { CalendarComponent } from './components//calendar/calendar.component';
import { RbookingComponent } from './components//rbooking/rbooking.component';
import { DbookingComponent } from './components//dbooking/dbooking.component';
import { MbookingComponent } from './components//mbooking/mbooking.component';
import { ManageComponent } from './components//manage/manage.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { BookaroomComponent } from './components/bookaroom/bookaroom.component';
import { SlotComponent } from './components/slot/slot.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ManageConferenceComponent } from './components/manage-conference/manage-conference.component';
import { LocationComponent } from './components/location/location.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { RemoveEmpComponent } from './components/remove-emp/remove-emp.component';
import { BookedSuccessComponent } from './components/booked-success/booked-success.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewEventComponent } from './components/view-event/view-event.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticleSectionComponent,
    PageNotFoundComponent,
    EventsComponent,
    NotificationsComponent,
    CalendarComponent,
    RbookingComponent,
    DbookingComponent,
    MbookingComponent,
    ManageComponent,
    EmployeeComponent,
    BookaroomComponent,
    SlotComponent,
    ManageConferenceComponent,
    LocationComponent,
    SignUpComponent,
    ForgotPassComponent,
    RemoveEmpComponent,
    BookedSuccessComponent,

    ViewEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes

    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    provideAnimations(),
    provideToastr(),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
