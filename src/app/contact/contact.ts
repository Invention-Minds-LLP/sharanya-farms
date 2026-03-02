import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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

    console.log('Form Data:', this.contactForm.value);

    this.contactForm.reset();

    this.submitted = false;
  }
}
