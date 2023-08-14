import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import 'bootstrap-datepicker';

@Component({
  selector: 'app-article-section',
  templateUrl: './article-section.component.html',
  styleUrls: ['./article-section.component.css']
})
export class ArticleSectionComponent {
  constructor(private router: Router) { }
  employee() {
    this.router.navigate(['employee'])
    console.log("inside employee")
  }
  conference() {
    this.router.navigate([''])
    console.log("inside conference")
  }
}
