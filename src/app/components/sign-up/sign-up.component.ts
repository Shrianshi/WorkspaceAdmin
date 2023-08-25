import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  loginForm: FormGroup=new FormGroup({});

  constructor(private formBuilder: FormBuilder,private router: Router) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password:['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.value);
      this.router.navigate(['article-section']);
    } else {
      console.log('Form is not valid');
    }
  }

  
  email: string = "";


  main() {
    this.router.navigate(['article-section']);
    console.log("inside dashboard");
  }

  emailNotification() {
    Swal.fire({
      html: `
      <div class="custom-sweetalert"> 
          <img src="../../assets/images/privacy 1 (1).png" alt="Your Image" class="sweetimg" width="83px" height="83px">
          <br><br><div style="color: #1F2131; font-size: 24px; font-family: Manrope; font-weight: 600; word-wrap: break-word;">Forgot Password?</div><br>
          <div style="color: #626D8A; font-size: 16px; font-family: Manrope; font-weight: 500; word-wrap: break-word;">No worries, we’ll send you reset instructions.</div><br>
          <div style="color: #626D8A; font-size: 16px; font-family: Inter; font-weight: 400; word-wrap: break-word; text-align:left; ">Email ID</div><br>     
          <input
          type="email"
          class="form-control"
          id="emailInput"
          placeholder="name@kanini.com"
          [ngClass]="{ 'is-invalid': emailInput.invalid && emailInput.dirty }"
          #emailInput="ngModel"
          required
          email
          [(ngModel)]="email"
        >
        <div *ngIf="emailInput.invalid && emailInput.dirty" class="invalid-feedback">
          Please enter a valid email.
        </div>        
      </div>
      `,
      confirmButtonText: "Submit",
      showCloseButton: true,
      preConfirm: () => {
        const emailInput = document.getElementById('emailInput') as HTMLInputElement;
        if (emailInput && emailInput.value) {
          if (this.isValidEmail(emailInput.value)) {
            this.email = emailInput.value;
            this.onEmailEntered();
          } else {
            Swal.showValidationMessage('Please enter a valid email address.');
          }
        }
      }
    });
  }

  isValidEmail(email: string): boolean {
    // Use a regular expression or any other method to validate the email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  onEmailEntered() {
    const formData = {
      email: this.email
    };
    console.log(formData);
  }
}