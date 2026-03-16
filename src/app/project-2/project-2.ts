import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import AOS from 'aos';
import { Viewer } from 'photo-sphere-viewer';
import { AfterViewInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Router } from '@angular/router';
import { ImagePage2 } from './image-page2/image-page2';
import { PageForm } from '../page-form/page-form';



interface HighlightCard {
  icon: string;
  label: string;
  title: string;
  description: string;
}


interface AmenitySlide {
  title: string;
  image: string;
}

@Component({
  selector: 'app-project-2',
  standalone: true,
  imports: [CommonModule, RouterLink,ImagePage2, PageForm],
  templateUrl: './project-2.html',
  styleUrl: './project-2.css',
})
export class Project2 {
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
      label: 'Prime Location',
      title: '45 km from City Center',
      description: 'Well-connected via national highway with easy access to urban amenities'
    },
    {
      icon: 'imgs/project-1/scale.png',
      label: 'Plot Sizes',
      title: '1200 - 5000 sq.ft',
      description: 'Flexible plot options to match your investment goals'
    },
    {
      icon: 'imgs/project-1/money.png',
      label: 'Starting Price',
      title: '₹25 Lakhs onwards',
      description: 'Competitive pricing with easy EMI options available'
    },
    {
      icon: 'imgs/project-1/doc.png',
      label: 'Legal Approvals',
      title: 'RERA & DTCP',
      description: 'Fully approved with clear title and documentation'
    },
    {
      icon: 'imgs/project-1/land.png',
      label: 'Plantation',
      title: 'Pre-landscaped',
      description: 'Premium saplings and mature trees included'
    },
    {
      icon: 'imgs/project-1/home.png',
      label: 'Amenities',
      title: 'Resort-style',
      description: 'Clubhouse, security, and modern infrastructure'
    }
  ];


  amenities: AmenitySlide[] = [
    { title: 'Landscape', image: 'imgs/project-1/Rectangle51.png' },
    { title: 'Gated Community', image: 'imgs/project-1/Rectangle52.png' },
    { title: 'Plantation', image: 'imgs/project-1/Rectangle53.png' },
    { title: 'Landscape', image: 'imgs/project-1/Rectangle54.png' },
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

  get progressWidth(): number {
    return ((this.currentAmenityIndex + 1) / this.amenities.length) * 100;
  }

  goToAmenity(index: number): void {
    this.currentAmenityIndex = index;
  }

  get currentAmenity(): AmenitySlide {
    return this.amenities[this.currentAmenityIndex];
  }

  get leftAmenity(): AmenitySlide {
    return this.amenities[
      this.currentAmenityIndex === 0
        ? this.amenities.length - 1
        : this.currentAmenityIndex - 1
    ];
  }

  get rightAmenity(): AmenitySlide {
    return this.amenities[
      this.currentAmenityIndex === this.amenities.length - 1
        ? 0
        : this.currentAmenityIndex + 1
    ];
  }

  get nextRightAmenity(): AmenitySlide {
    return this.amenities[
      this.currentAmenityIndex >= this.amenities.length - 2
        ? (this.currentAmenityIndex + 2) % this.amenities.length
        : this.currentAmenityIndex + 2
    ];
  }

  constructor(private router: Router) {}

  goToImagePage(): void {

    this.router.navigate(['/image-page2']);
    console.log('clicking')
}

}

