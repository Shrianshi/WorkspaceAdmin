import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { an } from '@fullcalendar/core/internal-common';
import { error } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from 'src/app/services/deptservice/department.service';
import { EmployeeService } from 'src/app/services/empservice/employee.service';
import { LocationService } from 'src/app/services/location.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  header:string='Employee';



  countEmp:number=0;
  addPassword:string='';
  confirmPassword:string='';
  constructor(private toast:ToastrService,private formBuilder: FormBuilder,private locationSer:LocationService,private deptSer:DepartmentService,private empSer:EmployeeService) {}
  locations:any[]=[]
  departments:any[]=[]
  employees:any[]=[]
  

  employeeForm: FormGroup= new FormGroup({});;
  newEmployee:any={
    fname: '',
    lname: "",
    locationId: null,
    depId: null,
    email: "",
    phone: "",
    addPassword: "",
    confirmPassword: "",
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
      fname: ['',Validators.required],
      lname: ['',Validators.required],
      empimage:['',Validators.required],
      locationId:[1],
      depId:[1],
      title:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      addPassword:['',Validators.required],
      confirmPassword:['',Validators.required]

    });
   this.empSer.getEmployees().subscribe((data)=>{
    this.employees=data
    this.countEmp=data.length
   },(error)=>{
    console.log(error)
   })
  }

  onSubmit() {
   
    this.empSer.addEmployee(this.newEmployee).subscribe((data)=>{
      this.toast.success('Employee Added')
      console.log(this.newEmployee)
      this.employeeForm.reset();
    },(error)=>{
      console.log(error)
    })
  }

 



}
