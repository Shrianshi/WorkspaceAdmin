import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { an } from '@fullcalendar/core/internal-common';
import { error } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from 'src/app/services/deptservice/department.service';
import { EmployeeService } from 'src/app/services/empservice/employee.service';
import { LocationService } from 'src/app/services/location.service';


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
  constructor(private toast:ToastrService,private formBuilder: FormBuilder,private locationSer:LocationService,private deptSer:DepartmentService,private empSer:EmployeeService) {}
  locations:any[]=[]
  departments:any[]=[]

  employeeForm: FormGroup= new FormGroup({});;
  newEmployee:any={
    fname: '',
    lname: "",
    locationId: 0,
    depId: 0,
    email: "",
    phone: "",
    addPassword: "",
    title: "",
    imageData: ""
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const fileData = fileReader.result as ArrayBuffer;
      const byteArray = new Uint8Array(fileData);
      const numbersArray = Array.from(byteArray);
      const base64String = btoa(String.fromCharCode.apply(null, numbersArray));
      this.newEmployee.imageData = base64String;
      console.log(this.newEmployee)
    }
    fileReader.readAsArrayBuffer(file);
  }


  ngOnInit() {
    this.locationSer.getAllLocation().subscribe((data)=>{
      this.locations=data
    },(error)=>{
      console.log(error)
    })
    this.deptSer.getAllDepartment().subscribe((data)=>{
      this.departments=data
    },(error)=>{
      console.log(error)
    })
    this.employeeForm = this.formBuilder.group({
      fname: [''],
      lname: [''],
      empimage:[''],
      locationId:[1],
      depId:[1],
      title:[''],
      email:[''],
      phone:[''],
      addPassword:[''],

    });
   
  }

  onSubmit() {
    this.toast.success('Employee Added')
    console.log(this.newEmployee)
    // this.empSer.addEmployee(this.newEmployee).subscribe((data)=>{
    //   this.toast.success('Employee Added')
    //   console.log(this.newEmployee)
    // },(error)=>{
    //   console.log(error)
    // })
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
 
  ];


}
