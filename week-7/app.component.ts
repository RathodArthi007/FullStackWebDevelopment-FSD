
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  successMessage = '';

  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ])
  });

  onSubmit() {
    this.successMessage = '';

    if (this.contactForm.valid) {
      this.successMessage =
        'Form submitted successfully!';

      console.log(this.contactForm.value);
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
