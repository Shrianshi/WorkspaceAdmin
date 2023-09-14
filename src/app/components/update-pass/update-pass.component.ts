import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data, error } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/authservices/auth.service';

@Component({
  selector: 'app-update-pass',
  templateUrl: './update-pass.component.html',
  styleUrls: ['./update-pass.component.css']
})
export class UpdatePassComponent implements OnInit {
  forgotEmail: string | null = '';

  constructor(
    private http: HttpClient,
    private dataSharingService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private auhtSer: AuthService,
    private toast: ToastrService
  ) { }
  newDetail: any = {
    name: 'testName',
    email: 'testEmail',
    password: ''
  }
  passwordUpdateForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])
  })
  get password() {
    return this.passwordUpdateForm.get('password')
  }
  get confirmPassword() {
    return this.passwordUpdateForm.get('confirmPassword')
  }

  ngOnInit(): void {
    this.forgotEmail = localStorage.getItem('resetEmail');
  }

  updatePassword() {

    if (this.forgotEmail) {
      this.auhtSer.updatePassword(this.newDetail, this.forgotEmail).subscribe((data) => {
        this.toast.success("Password Changed Successfully")
        localStorage.removeItem('resetEmail')
      }, (error) => {
        console.log(error)
      })
    } else {
      this.toast.error('No Email Found')
    }
  }
}
