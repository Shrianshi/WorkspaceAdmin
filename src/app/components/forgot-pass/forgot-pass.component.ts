import { Component} from '@angular/core';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent {
  email: string = '';


  

  onCancelClick(): void {
    // Handle cancellation if needed
  }
}
