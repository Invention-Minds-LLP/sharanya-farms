import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css',
})
export class RegisterForm {
  list = [
    {
      img: '/imgs/register-form/icon-1.png',
      para: 'Own Your Farmland, Without the Hassle'
    },
    {
      img: '/imgs/register-form/icon-2.png',
      para: 'Own Your Farmland, Without the Hassle'
    },
    {
      img: '/imgs/register-form/icon-3.png',
      para: 'Ideal for Weekend Living + Smart Investment'
    },
    {
      img: '/imgs/register-form/icon-4.png',
      para: 'March 28th • Exclusive On-Site Experience'
    },

  ]

  card = [
    {
      img:'/imgs/register-form/card-icon-1.svg',
      heading:'Guided Farm Tour',
      para:'Experience a curated walk through 51 acres of lush, developed farmland and witness sustainable growth.'
    },
    {
      img:'/imgs/register-form/card-icon-2.svg',
      heading:'Organic Plantation Workshop',
      para:'Hands-on demonstration of organic farming techniques and plantation management.'
    },
    {
      img:'/imgs/register-form/card-icon-3.svg',
      heading:'Investment Masterclass',
      para:'Exclusive 1-on-1 sessions with farmland experts on ROI and asset appreciation.'
    },
    {
      img:'/imgs/register-form/card-icon-4.svg',
      heading:'Weekend Retreat Lifestyle',
      para:'Discover the joy of owning a weekend getaway spot amidst nature and tranquility.'
    },
    {
      img:'/imgs/register-form/card-icon-5.svg',
      heading:'Family & Kids Zone',
      para:'Engaging nature activities, kite flying, and fun games designed for children and families.'
    },
    {
      img:'/imgs/register-form/card-icon-6.svg',
      heading:'Traditional Cuisine',
      para:'Savor an authentic, organic meal prepared with fresh produce straight from the farm.'
    },
  ]

  registrationForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {

    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      city: ['bangalore'],
      occupation: ['it'],
      lookingFor: ['investment'],
      budget: ['5 Lakhs']
    });

  }

  get f() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }

    console.log(this.registrationForm.value);

    this.registrationForm.reset();

    this.submitted = false;
  }


}
