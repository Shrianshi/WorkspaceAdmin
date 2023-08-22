import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent implements OnInit{

  showTextArea = false;

  toggleTextArea() {
    console.log('Toggle button clicked');
    this.showTextArea = !this.showTextArea;
  }
   bookroomForm: FormGroup=new FormGroup({});


   // Get references to the button and text area
  

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
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
