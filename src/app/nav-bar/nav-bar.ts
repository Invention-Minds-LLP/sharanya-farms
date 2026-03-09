import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule, CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {

  constructor(private router: Router) { }
  isScrolled = false;
  isFixed = false;
  isBanner = true;

  menuOpen = false;

  showProjects = false;

  ngOnInit() {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        this.showProjects = false;
        this.showMobileProjects = false;
        this.menuOpen = false;

        document.body.style.overflow = "auto";

      });

  }

  toggleProjects() {
    this.showProjects = !this.showProjects;
  }

  showMobileProjects = false;

  toggleMobileProjects() {
    this.showMobileProjects = !this.showMobileProjects;
  }

  toggleMenu() {

    this.menuOpen = !this.menuOpen;

    this.showProjects = false;

    document.body.style.overflow = this.menuOpen ? "hidden" : "auto";

  }

  closeProjects() {
    this.showProjects = false;
  }

  @HostListener('window:scroll', [])
  onScroll() {

    const scrollY = window.scrollY;

    this.isScrolled = scrollY > 50;

    this.isBanner = scrollY < 600;

  }

}
