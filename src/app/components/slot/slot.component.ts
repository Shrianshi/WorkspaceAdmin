import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/empservice/employee.service';
import { RoomService } from 'src/app/services/roomservice/room.service';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent implements OnInit{
  constructor(private formBuilder: FormBuilder,private activatedRoute:ActivatedRoute,private roomSer:RoomService,private empSer:EmployeeService) {}
  showTextArea = false;
  roomId:string |null=''
  employees:any[]=[]

  toggleTextArea() {
    console.log('Toggle button clicked');
    this.showTextArea = !this.showTextArea;
  }
   bookroomForm: FormGroup=new FormGroup({});
   room:any={

   }
  ngOnInit() {
    this.initializeForm();
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.roomId=param.get("id")
    })
    if(this.roomId!=null)
    this.roomSer.getRoomById(parseInt(this.roomId)).subscribe((data)=>{
       this.room=data
  },(error)=>{
    console.log(error)
  })
  this.empSer.getEmployees().subscribe((data)=>{
    this.employees=data
  },(error)=>{
    console.log(error)
  })
  }

  initializeForm() {
    this.bookroomForm = this.formBuilder.group({
      meetingTitle: [''],
      numberOfParticipants:[''],
      startTime:[''],
      endTime:[''],
      location: [''],

    });
  }

  onSubmit() {
    if (this.bookroomForm.valid) {
      console.log('Form submitted:', this.bookroomForm.value);
    } else {
      console.log('Form is not valid');
    }
  }

}
