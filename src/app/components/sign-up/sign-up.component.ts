import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  email: string = '';

  constructor(private router: Router) {}

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
          <input type="email" class="form-control" id="emailInput" placeholder="name@kanini.com"><br>
        </div>
      `,
      confirmButtonText: "Submit",
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const emailInput = document.getElementById('emailInput') as HTMLInputElement;
        if (emailInput) {
          this.email = emailInput.value;
          this.onEmailEntered();
        }
      }
    });
  }

  onEmailEntered() {
    const formData = {
      email: this.email
    };
    console.log(formData);
  }
}
