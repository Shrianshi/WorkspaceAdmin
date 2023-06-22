import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookaroom',
  templateUrl: './bookaroom.component.html',
  styleUrls: ['./bookaroom.component.css']
})
export class BookaroomComponent {
  constructor(private router: Router) {}

  redirectToSlot() {
    this.router.navigate(['slot']);
  }

}
