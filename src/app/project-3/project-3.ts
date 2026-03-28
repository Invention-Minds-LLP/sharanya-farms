import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import AOS from 'aos';
import { Viewer } from 'photo-sphere-viewer';
import { AfterViewInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Router } from '@angular/router';
import { PageForm } from '../page-form/page-form';
import { WeekendVillage } from './weekend-village/weekend-village';

import { Meta, Title } from '@angular/platform-browser';

interface HighlightCard {
  icon: string;
  label: string;
  // title: string;
  description?: string;
  points?: string[];
  alt: string

}


interface AmenitySlide {
  // title: string;
  image: string;
  alt: string
}

@Component({
  selector: 'app-project-3',
  standalone: true,
  imports: [CommonModule, RouterLink, WeekendVillage, PageForm],
  templateUrl: './project-3.html',
  styleUrl: './project-3.css',
})
export class Project3 {
  mobileMenuOpen = false;
  highlights: HighlightCard[] = [
    {
      icon: '/imgs/project-1/location.png',
      label: 'Infrastructure Details',
      points: ['25 feet and 20 Feet internal roads',
        'Rain water storms drains Drainage',
        'Underground Pipeline for water',
        'Entrance arch',
        '10 feet Compound wall boundary',
      ],
      alt: 'Infrastructure layout including roads and drainage in Weekend Village farmland',
    },
    {
      icon: 'imgs/project-1/water.png',
      label: 'Water and drip irrigation',
      points: ['6 Borewells',
        'Underground pipeline connection to all the plots for domestic usage',
        'Drip irrigation set up for the farming activities',
      ],
      alt: 'Infrastructure layout including roads and drainage in Weekend Village farmland',
    },
    {
      icon: 'imgs/project-1/electric.png',
      label: 'Electricity',
      description: 'Overhead across the property',
      alt: 'Water supply and drip irrigation system in Weekend Village farmland',
    },
    {
      icon: 'imgs/project-1/security.png',
      label: 'Security',
      description: 'Security Guards, Compound wall boundary, CCTV cameras, Management, team at the farm 24*7',
      alt: 'Electricity infrastructure available across Weekend Village farmland project',
    },
  ];

  // isArray(value: string | string[]): value is string[] {
  //   return Array.isArray(value);
  // }



  amenities: AmenitySlide[] = [
    { 
      image: '/imgs/gallery-page/week-img-1.png',
      alt: 'Entrance of Sharanya Weekend Village farmland project'
    },
    { 
      image: '/imgs/gallery-page/week-img-2.png' ,
      alt: 'Entrance of Sharanya Weekend Village farmland project'
    },
    { 
      image: '/imgs/gallery-page/week-img-3.png',
      alt: 'Green plants and trees in Weekend Village farmland'
    },
    { 
      image: '/imgs/gallery-page/week-img-4.png',
      alt: 'Coconut plantation in Sharanya Weekend Village farmland'
    },
    { 
      image: '/imgs/gallery-page/week-img-5.png',
      alt: 'Brick building structure in Weekend Village project area' 
    },
    { 
      image: '/imgs/gallery-page/week-img-6.png',
      alt: 'Corridor inside farmhouse in Weekend Village farmland'
    },
    { 
      image: '/imgs/gallery-page/week-img-7.png',
      alt: 'Indoor room setup in Weekend Village farmhouse'
    },
    { 
      image: '/imgs/gallery-page/week-img-8.png' ,
      alt: 'Wooden farmhouse in Sharanya Weekend Village farmland'
    },
    { 
      image: '/imgs/gallery-page/week-img-9.png',
      alt: 'Green leaves and plants in Weekend Village landscape'
    },
    { 
      image: '/imgs/gallery-page/week-img-10.png',
      alt: 'Green leaves and plants in Weekend Village landscape'
    },
    { 
      image: '/imgs/gallery-page/week-img-11.png',
      alt: 'Flower plant blooming in Weekend Village farmland project'
    },
    { 
      image: '/imgs/gallery-page/week-img-12.png',
      alt: 'Palm trees and greenery in Weekend Village farmland'
    },
    { 
      image: '/imgs/gallery-page/week-img-13.png',
      alt: 'Open farmland area with trees in Weekend Village project'
     },
    { 
      image: '/imgs/gallery-page/week-img-14.png' ,
      alt: 'Tree plantation area in Weekend Village farmland'
    },

  ];

  currentAmenityIndex = 0;
  showBannerVideo = false;
  showMobileVideo = false;
  showFormVideo = false;
  isMobile = false;

  // constructor(private router: Router) { }

  ngOnInit() {
    this.checkScreen();
    this.loadBannerVideo();

    setTimeout(() => {
      this.showFormVideo = true;
    }, 1000);
  }

  checkScreen() {
    this.isMobile = window.innerWidth <= 767;
  }

  loadBannerVideo() {
    this.showBannerVideo = false;
    this.showMobileVideo = false;

    setTimeout(() => {
      if (this.isMobile) {
        this.showMobileVideo = true;
      } else {
        this.showBannerVideo = true;
      }
    }, 50);
  }

  @HostListener('window:resize')
  onResize() {
    const oldValue = this.isMobile;
    this.checkScreen();

    if (oldValue !== this.isMobile) {
      this.loadBannerVideo();
    }
  }

  toggleMute(video: HTMLVideoElement) {
    video.muted = !video.muted;
    if (!video.muted) {
      video.play();
    }
  }



  ngAfterViewInit() {
    const section = document.querySelector('.form-part');

    if (section) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.showFormVideo = true;
          // this.cdr.detectChanges();
          observer.disconnect();
        }
      }, { threshold: 0.2 });

      observer.observe(section);
    }
  }

  // ngAfterViewInit(): void {
  //   AOS.init({
  //     duration: 900,
  //     once: true,
  //     offset: 60,
  //     easing: 'ease-out-cubic'
  //   });
  // }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  cardWidth = 276; // 260 + gap (16)
  visibleCount = 4;

  nextAmenity() {
    if (this.currentAmenityIndex < this.amenities.length - this.visibleCount) {
      this.currentAmenityIndex++;
    }
  }

  prevAmenity() {
    if (this.currentAmenityIndex > 0) {
      this.currentAmenityIndex--;
    }
  }

  get translateX() {
    return this.currentAmenityIndex * this.cardWidth;
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

  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.title.setTitle('Sharanya Weekend Village | Farmland & Nature Living');

    this.meta.updateTag({
      name: 'description',
      content: 'Experience Sharanya Weekend Village with managed farmland and serene surroundings. Ideal for weekend living, relaxation, and long-term investment value.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'Sharanya Weekend Village, weekend farmland project, managed farmland living, weekend getaway farmland, farmland investment India, Sharanya Farms projects'
    });
   }

  goToImagePage(): void {

    this.router.navigate(['/weekendvillage-map']);
    console.log('clicking')
  }



  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
