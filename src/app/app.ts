import { Component, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Contact } from "./contact/contact";
import { RegisterForm } from "./register-form/register-form";
import { Footer } from './footer/footer';
import { PageForm } from './page-form/page-form';
import { NavBar } from './nav-bar/nav-bar';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { BrowserModule } from '@angular/platform-browser';
import { Project1 } from './project-1/project-1';
import { Project2 } from './project-2/project-2';
import { Project3 } from './project-3/project-3';
import { ImagePage } from './project-1/image-page/image-page';
import { ImagePage2 } from './project-2/image-page2/image-page2';
import { ImagePage3 } from './project-3/image-page3/image-page3';



import { GalleryPage } from './gallery-page/gallery-page';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Footer, NavBar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sharanya-forms');

   showLayout = true;

  constructor(private router: Router, private route: ActivatedRoute) {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        let currentRoute = this.route.firstChild;
        while (currentRoute?.firstChild) {
          currentRoute = currentRoute.firstChild;
        }

        this.showLayout = !currentRoute?.snapshot.data['hideLayout'];
      });
    }
}
