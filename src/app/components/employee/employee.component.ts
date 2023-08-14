import { Component } from '@angular/core';


interface Card {
  EmpId:number;
  fname:string;
  lname:string;
  Title: string;
  Department: string;
  imageUrl: string;
  Email:string;
  Phone:number;

}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  cards: Card[] = [
    {
      EmpId:2678,
      fname:'Dhiraj',
      lname:'Rote',
      Department: 'Senior Associate',
      Title: 'IT Application Development',
      imageUrl: 'assets/img/dhiraj.jpg',
      Email:'dhiraj.rote@kanini.com',
      Phone:8007738148
    },
    {
      EmpId:2484,
      fname:'Sriram',
      lname:'Muralidharan',
      Department: 'Junior Associate',
      Title: 'IT Application Development',
      imageUrl: 'assets/img/sriram.jpg',
      Email:'sriram.muralidharan@kanini.com',
      Phone:8939191419
    }
    // {
    //   title: 'Card 2',
    //   description: 'Description for Card 2',
    //   imageUrl: 'https://example.com/card2.jpg'
    // },
    // Add more cards as needed...
  ];
}
