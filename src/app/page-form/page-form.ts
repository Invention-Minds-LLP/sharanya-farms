import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-page-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './page-form.html',
  styleUrl: './page-form.css',
})
export class PageForm {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {

  
    emailjs.init("YOUR_PUBLIC_KEY");

    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });

  }


  submitForm() {

    if (this.contactForm.valid) {

      const formData = this.contactForm.value;

      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.mobile,
        email: formData.email,
        message: formData.message
      };

      emailjs.send(
        "service_xxxxxx",   
        "template_xxxxxx",
        templateParams
      )
        .then(() => {

          alert("Message sent successfully!");

          this.contactForm.reset();

        })
        .catch((error) => {

          console.error("EmailJS Error:", error);

          alert("Failed to send message");

        });

    } else {

      this.contactForm.markAllAsTouched();

    }

  }
}
