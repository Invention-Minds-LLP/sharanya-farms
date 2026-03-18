import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import AOS from 'aos';
import { PageForm } from '../page-form/page-form';


interface HighlightCard {
  icon: string;
  label: string;
  description?:string;  //? to indicate that this property is optional
  points?: string[];
}


interface AmenitySlide {
  // title: string;
  image: string;
}

@Component({
  selector: 'app-project-1',
  imports: [CommonModule, PageForm],
  templateUrl: './project-1.html',
  styleUrl: './project-1.css',
})
export class Project1 {
  mobileMenuOpen = false;

  // navItems = [
  //   { label: 'HOME', link: '#home' },
  //   { label: 'ABOUT', link: '#about' },
  //   { label: 'PROJECTS', link: '#projects' },
  //   { label: 'GALLERY', link: '#gallery' },
  //   { label: 'BLOGS', link: '#blogs' },
  //   { label: 'CONTACT US', link: '#contact' }
  // ];

  highlights: HighlightCard[] = [
    {
      icon: '/imgs/project-1/location.png',
      label: 'Infrastructure Details',
      points:['25 feet and 20 Feet internal roads',
        'Rain water storms drains Drainage',
        'Underground Pipeline for water',
        'Entrance arch',
        '10 feet Compound wall boundary',
      ]
    },
    {
      icon: 'imgs/project-1/water.png',
      label: 'Water and drip irrigation',
      points: ['6 Borewells',
        'Underground pipeline connection to all the plots for domestic usage',
        'Drip irrigation set up for the farming activities',
      ]
    },
    {
      icon: 'imgs/project-1/electric.png',
      label: 'Electricity',
      description: 'Overhead across the property'
    },
    {
      icon: 'imgs/project-1/security.png',
      label: 'Security',
      description: 'Security Guards, Compound wall boundary, CCTV cameras, Management, team at the farm 24*7'
    },
  ];

  // isArray(value: string | string[]): value is string[] {
  //   return Array.isArray(value);
  // }



  amenities: AmenitySlide[] = [
    { image: 'imgs/gallery-page/san-1.png' },
    { image: 'imgs/gallery-page/san-2.png' },
    { image: 'imgs/gallery-page/san-3.png' },
    { image: 'imgs/gallery-page/san-4.png' },
    { image: 'imgs/gallery-page/san-5.png' },
    { image: 'imgs/gallery-page/san-6.png' },
    { image: 'imgs/gallery-page/san-7.png' },
    { image: 'imgs/gallery-page/san-8.png' },
    { image: 'imgs/gallery-page/san-9.png' },
    { image: 'imgs/gallery-page/san-10.png' },
    { image: 'imgs/gallery-page/san-11.png' },
    { image: 'imgs/gallery-page/san-12.png' },
    { image: 'imgs/gallery-page/san-13.png' },
    { image: 'imgs/gallery-page/san-14.png' },
  ];

  currentAmenityIndex = 0;

  ngAfterViewInit(): void {
    AOS.init({
      duration: 900,
      once: true,
      offset: 60,
      easing: 'ease-out-cubic'
    });
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  prevAmenity(): void {
    this.currentAmenityIndex =
      this.currentAmenityIndex === 0
        ? this.amenities.length - 1
        : this.currentAmenityIndex - 1;
  }

  nextAmenity(): void {
    this.currentAmenityIndex =
      this.currentAmenityIndex === this.amenities.length - 1
        ? 0
        : this.currentAmenityIndex + 1;
  }

  // get progressWidth(): number {
  //   return ((this.currentAmenityIndex + 1) / this.amenities.length) * 100;
  // }

  // goToAmenity(index: number): void {
  //   this.currentAmenityIndex = index;
  // }

  // get currentAmenity(): AmenitySlide {
  //   return this.amenities[this.currentAmenityIndex];
  // }

  // get leftAmenity(): AmenitySlide {
  //   return this.amenities[
  //     this.currentAmenityIndex === 0
  //       ? this.amenities.length - 1
  //       : this.currentAmenityIndex - 1
  //   ];
  // }

  // get rightAmenity(): AmenitySlide {
  //   return this.amenities[
  //     this.currentAmenityIndex === this.amenities.length - 1
  //       ? 0
  //       : this.currentAmenityIndex + 1
  //   ];
  // }

  // get nextRightAmenity(): AmenitySlide {
  //   return this.amenities[
  //     this.currentAmenityIndex >= this.amenities.length - 2
  //       ? (this.currentAmenityIndex + 2) % this.amenities.length
  //       : this.currentAmenityIndex + 2
  //   ];
  // }

  constructor(private router: Router) { }

  goToImagePage(): void {

    this.router.navigate(['/sandalvalley-map']);
    console.log('clicking')
  }

  scrollToForm(): void {
    // this.router.navigate(['/page-form']);
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
    console.log('clicking')
  }
}
