import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { an } from '@fullcalendar/core/internal-common';
import { error } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from 'src/app/services/deptservice/department.service';
import { EmployeeService } from 'src/app/services/empservice/employee.service';
import { LocationService } from 'src/app/services/location.service';
declare const bootstrap: any; 

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  header:string='Employee';
  search:string='employees'
  locationsarr:string[] = [];
  countEmp:number=0;
  addPassword:string='';
  confirmPassword:string='';
  constructor(private toast:ToastrService,private formBuilder: FormBuilder,private locationSer:LocationService,private deptSer:DepartmentService,private empSer:EmployeeService) {}
  locations:any[]=[]
  departments:any[]=[]
  employees:any[]=[]
  
  initialLocationCheckboxes = {
    chennai: false,
    coimbatore: false,
    banglore: false,
    pune: false
  };

  initialDepartmentCheckboxes = {
    itApplication: false,
    dataScience: false,
    softwareTesting: false,
    humanResource:false,
    financeAndAccounting:false,
    networkAndSecurity:false,
    digitalMarketing:false
  };

 
  locationCheckboxes = { ...this.initialLocationCheckboxes };
  departmentCheckboxes = { ...this.initialDepartmentCheckboxes };

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

arr:string[] = [];
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
   this.empSer.getEmployeesByLocations(this.arr).subscribe((data)=>{
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

  applyFilters(){
    if(this.locationCheckboxes.banglore==true){
      this.arr.push("Banglore");
    }
    if(this.locationCheckboxes.chennai==true){
      this.arr.push("Chennai");
    }
    if(this.locationCheckboxes.coimbatore==true){
      this.arr.push("Coimbatore");
    }
    if(this.locationCheckboxes.pune==true){
      this.arr.push("Pune");
    }
    this.empSer.getEmployeesByLocations(this.arr);
    
    this.closeFilterMenu();
  }

  resetFilters(){
    this.locationCheckboxes = { ...this.initialLocationCheckboxes };
    this.departmentCheckboxes = { ...this.initialDepartmentCheckboxes };
    while(this.arr.length > 0){
      this.arr.pop();
    }
    this.closeFilterMenu();

  }
  @ViewChild('filterMenu') filterMenu!: ElementRef ;


closeFilterMenu() {
    const dropdownMenu = this.filterMenu.nativeElement;
    if (dropdownMenu) {
      const bsDropdown = new bootstrap.Dropdown(dropdownMenu);
      bsDropdown.hide(); 
    }
  }

}
