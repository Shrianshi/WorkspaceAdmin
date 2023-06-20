import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
