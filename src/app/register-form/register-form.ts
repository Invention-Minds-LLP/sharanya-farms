import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css',
})
export class RegisterForm implements OnInit {

  registrationForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  list = [
    {
      img: '/imgs/register-form/icon-1.png',
      para: 'Traditional Ugadi celebration in a farm setting'
    },

    {
      img: '/imgs/register-form/icon-1.png',
      para: 'Meet and interact with the Sharanya Farms community'
    },

    {
      img: '/imgs/register-form/icon-1.png',
      para: 'Fun village games for kids and adults'
    },
    {
      img: '/imgs/register-form/icon-1.png',
      para: 'Pottery making & pot painting activities'
    },
    {
      img: '/imgs/register-form/icon-1.png',
      para: 'Beautiful farm photo booth for family memories'
    },
    {
      img: '/imgs/register-form/icon-1.png',
      para: 'Relaxing nature walk within the farm'
    },
    {
      img: '/imgs/register-form/icon-1.png',
      para: 'Enjoy a traditional Ugadi festive meal'
    },
  ];

  card = [
    {
      img: '/imgs/register-form/card-icon-1.svg',
      heading: 'Guided Farm Tour',
      para: 'Experience a curated walk through 51 acres of lush farmland.'
    },

    {
      img: '/imgs/register-form/card-icon-2.svg',
      heading: 'Organic Plantation Workshop',
      para: 'Hands-on demonstration of organic farming techniques.'
    },

    {
      img: '/imgs/register-form/card-icon-3.svg',
      heading: 'Investment Masterclass',
      para: '1-on-1 sessions with farmland experts on ROI.'
    },

    {
      img: '/imgs/register-form/card-icon-4.svg',
      heading: 'Weekend Retreat Lifestyle',
      para: 'Discover the joy of owning a weekend getaway.'
    },

    {
      img: '/imgs/register-form/card-icon-5.svg',
      heading: 'Family & Kids Zone',
      para: 'Engaging nature activities and fun games.'
    },

    {
      img: '/imgs/register-form/card-icon-6.svg',
      heading: 'Traditional Cuisine',
      para: 'Savor authentic organic farm meals.'
    }

  ];

  ngOnInit(): void {

    emailjs.init("44sQRxJOiepWwo5y8");

    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      email: ['', [Validators.required, Validators.email]],
      city: ['bangalore'],
      familyMembers: [''],
      coFarmer: ['no'],
      ownPlot: ['no'],
      arrivalTime: [''],
      specialRequest: ['']
    });

  }

  submitForm() {

    if (this.registrationForm.invalid) {
      alert("Please fill required fields");
      return;
    }

    const formData = this.registrationForm.value;

    emailjs.send(
      "service_j8dl5uv",
      "template_2xk3ave",
      formData
    ).then(
      () => {
        alert("Registration Successful! Our team will contact you.");
        this.registrationForm.reset();
      },
      () => {
        alert("Something went wrong. Please try again.");
      }
    );

  }

}