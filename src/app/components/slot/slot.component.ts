import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoombookingService } from 'src/app/services/bookingservice/roombooking.service';
import { EmployeeService } from 'src/app/services/empservice/employee.service';
import { RoomService } from 'src/app/services/roomservice/room.service';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent implements OnInit {
  header: string = ''

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private roomSer: RoomService, private empSer: EmployeeService, private bookingSer: RoombookingService, private toast: ToastrService) { }
  showTextArea = false;
  roomId: string | null = ''
  employees: any[] = []
  roomCapacityValue: number = 1

  toggleTextArea() {
    console.log('Toggle button clicked');
    this.showTextArea = !this.showTextArea;
  }
  bookroomForm: FormGroup = new FormGroup({});
  room: any = {

  }
  bookingDetail: any = {
    meetingTitle: "",
    numberOfParticipants: 0,
    bookedFor: "",
    startTime: "2023-08-24T05:44:08.047Z",
    endTime: "2023-08-24T05:44:08.047Z",
    employeeName: "",
    employeeId: 0,
    roomId: 0,
  }
  ngOnInit() {
    this.initializeForm();
    this.activatedRoute.paramMap.subscribe((param) => {
      this.roomId = param.get("id")
    })
    if (this.roomId != null)
      this.roomSer.getRoomById(parseInt(this.roomId)).subscribe((data) => {
        this.room = data
      }, (error) => {
        console.log(error)
      })
    this.empSer.getEmployees().subscribe((data) => {
      this.employees = data
    }, (error) => {
      console.log(error)
    })
  }

  initializeForm() {
    this.bookroomForm = this.formBuilder.group({
      meetingTitle: ['', Validators.required],
      numberOfParticipants: [''],
      employeeId: [''],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      location: ['', Validators.required],
    });
  }

  onSubmit() {
    // if (this.bookroomForm.valid) {
    //   console.log('Form submitted:', this.bookroomForm.value);
    // } else {
    //   console.log('Form is not valid');
    // }
    if (this.roomId != null && this.bookroomForm.valid) {
      this.bookingDetail.roomId = parseInt(this.roomId)
      this.bookingSer.addRoomBooking(this.bookingDetail).subscribe((data) => {
        this.toast.success("Booking Successful")
        console.log(this.bookingDetail)
      }, (error) => {
        console.log(error)
      })

    }
  }

  }
