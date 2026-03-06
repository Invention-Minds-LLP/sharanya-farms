import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from "./contact/contact";
import { RegisterForm } from "./register-form/register-form";
import { Footer } from './footer/footer';
import { PageForm } from './page-form/page-form';
import { NavBar } from './nav-bar/nav-bar';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contact, RegisterForm, Footer, PageForm, NavBar, HomePage, AboutPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sharanya-forms');
}
