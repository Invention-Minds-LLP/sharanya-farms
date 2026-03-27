import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import AOS from 'aos';
import { Viewer } from 'photo-sphere-viewer';
import { AfterViewInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Router } from '@angular/router';
import { HillView } from './hill-view/hill-view';
import { PageForm } from '../page-form/page-form';



interface HighlightCard {
  icon: string;
  label: string;
  points?: string[];
  description?: string;
}


interface AmenitySlide {
  // title: string;
  image: string;
}

@Component({
  selector: 'app-project-2',
  standalone: true,
  imports: [CommonModule, RouterLink, HillView, PageForm],
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
      label: 'Infrastructure Details;',
      points: ['25 feet and 20 Feet internal roads',
        'Rain water storms drains/Drainage',
        'Underground Pipeline for water ',
        'Entrance arch',
        '10 feet Compound wall boundary',
      ]
    },
    {
      icon: 'imgs/project-1/water.png',
      label: 'Water and drip irrigation;',
      points: ['6 Borewells ',
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
      description: 'Security Guards, Compound wall boundary, CCTV cameras, Management team at the farm 24*7.'
    },
  ];


  amenities: AmenitySlide[] = [
    { image: '/imgs/gallery-page/hill-view-1.png' },
    { image: '/imgs/gallery-page/hill-view-2.png' },
    { image: '/imgs/gallery-page/hill-view-3.png' },
    { image: '/imgs/gallery-page/hill-view-4.png' },
    { image: '/imgs/gallery-page/hill-view-5.png' },
    { image: '/imgs/gallery-page/hill-view-6.png' },
    { image: '/imgs/gallery-page/hill-view-7.png' },
    { image: '/imgs/gallery-page/hill-view-8.png' },
    { image: '/imgs/gallery-page/hill-view-9.png' },
    { image: '/imgs/gallery-page/hill-view-10.png' },
    { image: '/imgs/gallery-page/hill-view-11.png' },
    { image: '/imgs/gallery-page/hill-view-12.png' },
    { image: '/imgs/gallery-page/hill-view-13.png' },
    { image: '/imgs/gallery-page/hill-view-14.png' },
  ];

  currentAmenityIndex = 0;
  showBannerVideo = false;
  showMobileVideo = false;
  showFormVideo = false;
  isMobile = false;

  constructor(private router: Router) {}

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

  // constructor(private router: Router) { }

  goToImagePage(): void {

    this.router.navigate(['/hillview-map']);
    console.log('clicking')
  }

  scrollToForm(): void {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });

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

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


}