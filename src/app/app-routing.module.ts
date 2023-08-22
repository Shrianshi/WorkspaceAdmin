import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticleSectionComponent } from './components/article-section/article-section.component';
import { EventsComponent } from './components/events/events.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'; 
import { CalendarComponent } from './components/calendar/calendar.component';
import { DbookingComponent } from './components/dbooking/dbooking.component';
import { RbookingComponent } from './components/rbooking/rbooking.component';
import { MbookingComponent } from './components/mbooking/mbooking.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ManageComponent } from './components/manage/manage.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { BookaroomComponent } from './components/bookaroom/bookaroom.component';
import { SlotComponent } from './components/slot/slot.component';
import { ManageConferenceComponent } from './components/manage-conference/manage-conference.component';
import { LocationComponent } from './components/location/location.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { ViewEventComponent } from './components/view-event/view-event.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-up', pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'article-section', component: ArticleSectionComponent },
  { path: 'events', component: EventsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'dbooking', component: DbookingComponent },
  { path: 'rbooking', component: RbookingComponent },
  { path: 'mbooking', component: MbookingComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'manage', component: ManageComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'bookaroom', component: BookaroomComponent },
  { path: 'slot', component: SlotComponent },
  { path: 'bookaroom', component: BookaroomComponent },
  { path: 'slot', component: SlotComponent },
  { path: 'manage/conference', component: ManageConferenceComponent },
  { path: 'manage/location', component: LocationComponent },
  { path: 'forgotpass', component: ForgotPassComponent },
  { path: 'viewevent', component: ViewEventComponent },
  { path: 'forgot-pass', component: ForgotPassComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
