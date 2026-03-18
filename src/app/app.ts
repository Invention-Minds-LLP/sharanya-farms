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
import { HillView } from './project-2/hill-view/hill-view';
import { SandalValley } from './project-1/sandal-valley/sandal-valley';
import { WeekendVillage } from './project-3/weekend-village/weekend-village';


import { GalleryPage } from './gallery-page/gallery-page';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Footer, NavBar, CommonModule, ToastModule],
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
