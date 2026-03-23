import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule, FormsModule, ToastModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  contactForm!: FormGroup;
  submitted = false;

  loading = false;       // 🔹 loading state

  constructor(private fb: FormBuilder, private messageService : MessageService) { }

  ngOnInit() {

    emailjs.init("W_ip_8Elr8F2ydGtM"); //Public Key

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

    if (this.contactForm.invalid) return;

    this.loading = true;

    const formData = this.contactForm.value;

    const templateParams = {
      firstName: formData.firstName,
      phone: formData.mobile,
      email: formData.email,
      message: formData.message
    };

    emailjs.send(
      'service_rurc7vt', //Service ID
      'template_vdfnfuq', //Template ID
      templateParams
    )
      .then(() => {

        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Message sent successfully'
        });

        this.contactForm.reset();
        this.submitted = false;

      })
      .catch(() => {

        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to send message'
        });

      })
      .finally(() => {
        this.loading = false;
      });
  }

}