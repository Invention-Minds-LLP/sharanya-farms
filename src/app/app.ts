import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from "./contact/contact";
import { RegisterForm } from "./register-form/register-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contact, RegisterForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sharanya-forms');
}
