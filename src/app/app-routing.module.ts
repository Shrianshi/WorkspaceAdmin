import { NgModule } from '@angular/core';
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

const routes: Routes = [
  {path: '',redirectTo:'/article-section',pathMatch:'full'},
  {path:'article-section',component:ArticleSectionComponent},
  {path:'events',component:EventsComponent},
  {path:'calendar',component:CalendarComponent},
  {path:'dbooking',component:DbookingComponent},
  {path:'rbooking',component:RbookingComponent},
  {path:'mbooking',component:MbookingComponent},
  {path:'notifications',component:NotificationsComponent},
  {path:'manage',component:ManageComponent},
  {path:'employee',component:EmployeeComponent},
  {path: '**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
