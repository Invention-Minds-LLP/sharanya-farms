import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-register-form-popup',
  imports: [CommonModule, RouterModule],
  templateUrl: './register-form-popup.html',
  styleUrl: './register-form-popup.css',
})
export class RegisterFormPopup {

  showUtsavaPopup = true;

  constructor(private router: Router) {}

  closePopup(): void {
    this.showUtsavaPopup = false;
  }

  goToRegistration(): void {
    this.closePopup();
    this.router.navigate(['/registration-link']);
  }


}
