import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  constructor(private router: Router) { }
  location() {
    this.router.navigate(['manage/location'])
    console.log("inside location")
  }
  conference() {
    this.router.navigate(['manage/conference'])
    console.log("inside conference")
  }

}
