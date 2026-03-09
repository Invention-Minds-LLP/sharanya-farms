import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from "./contact/contact";
import { RegisterForm } from "./register-form/register-form";
import { Footer } from './footer/footer';
import { PageForm } from './page-form/page-form';
import { NavBar } from './nav-bar/nav-bar';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  Footer, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sharanya-forms');
}
