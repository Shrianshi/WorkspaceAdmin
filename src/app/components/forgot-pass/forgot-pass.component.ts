import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent {
  email: string = '';

  @Output() emailEntered = new EventEmitter<string>();

  onConfirmClick(): void {
    this.emailEntered.emit(this.email);
  }

  onCancelClick(): void {
    // Handle cancellation if needed
  }
}
