import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    emailjs.init("YOUR_PUBLIC_KEY");

    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

  }


  get f() {
    return this.contactForm.controls;
  }

  submitForm() {

    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    const formData = this.contactForm.value;

    const templateParams = {
      firstName: formData.firstName,
      phone: formData.mobile,
      email: formData.email,
      message: formData.message
    };

    emailjs.send(
      'service_xxxxxx',   
      'template_xxxxxx',
      templateParams
    )
      .then(() => {

        alert('Message sent successfully!');
        this.contactForm.reset();
        this.submitted = false;

      })
      .catch((error) => {

        console.log('EmailJS Error:', error);
        alert('Failed to send message.');

      });

  }

}
