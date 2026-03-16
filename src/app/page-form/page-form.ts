import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-page-form',
  imports: [CommonModule, ReactiveFormsModule, ToastModule],
  templateUrl: './page-form.html',
  styleUrl: './page-form.css',
})
export class PageForm {
  contactForm: FormGroup;
  submitted = false;

  loading = false;

  constructor(private fb: FormBuilder, private messageService: MessageService) {


    emailjs.init("44sQRxJOiepWwo5y8");

    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });

  }


  // submitForm() {

  //   if (this.contactForm.valid) {

  //     const formData = this.contactForm.value;

  //     this.loading = true

  //     const templateParams = {
  //       firstName: formData.firstName + ' ' + formData.lastName,
  //       phone: formData.mobile,
  //       email: formData.email,
  //       message: formData.message
  //     };

  //     emailjs.send(
  //       'service_j8dl5uv',
  //       'template_69zjg7a',
  //       templateParams
  //     )
  //       .then(() => {

  //         alert("Message sent successfully!");

  //         this.contactForm.reset();

  //       })
  //       .catch((error) => {

  //         console.error("EmailJS Error:", error);

  //         alert("Failed to send message");

  //       });

  //   } else {

  //     this.contactForm.markAllAsTouched();

  //   }

  // }

  submitForm() {

    this.submitted = true;

    if (this.contactForm.invalid) return;

    this.loading = true;

    const formData = this.contactForm.value;

    const templateParams = {
      firstName: formData.firstName + ' ' + formData.lastName,
      phone: formData.mobile,
      email: formData.email,
      message: formData.message
    };
    emailjs.send(
      'service_j8dl5uv',
      'template_69zjg7a',
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
