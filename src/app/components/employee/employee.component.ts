import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


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
export class EmployeeComponent implements OnInit{
  employeeForm: FormGroup= new FormGroup({});;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      employeeId: [''],
      firstName: [''],
      lastName: [''],
      // Add other form controls here...
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.employeeForm.value);
  }
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
