import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import AOS from 'aos';

interface HighlightCard {
  icon: string;
  label: string;
  title: string;
  description: string;
}

// interface PriceCard {
//   name: string;
//   size: string;
//   price: string;
//   roi: string;
//   value: string;
//   recommended?: boolean;
// }

interface AmenitySlide {
  title: string;
  image: string;
}

@Component({
  selector: 'app-project-1',
  imports: [CommonModule],
  templateUrl: './project-1.html',
  styleUrl: './project-1.css',
})
export class Project1 {
  mobileMenuOpen = false;

  navItems = [
    { label: 'HOME', link: '#home' },
    { label: 'ABOUT', link: '#about' },
    { label: 'PROJECTS', link: '#projects' },
    { label: 'GALLERY', link: '#gallery' },
    { label: 'BLOGS', link: '#blogs' },
    { label: 'CONTACT US', link: '#contact' }
  ];

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

  // pricing: PriceCard[] = [
  //   {
  //     name: 'Starter Plot',
  //     size: '1200 sq.ft',
  //     price: '₹25 Lakhs',
  //     roi: 'Expected ROI: 15-18% annually',
  //     value: '₹40-45 Lakhs'
  //   },
    // {
    //   name: 'Premium Plot',
    //   size: '2500 sq.ft',
    //   price: '₹48 Lakhs',
    //   roi: 'Expected ROI: 18-20% annually',
    //   value: '₹85-95 Lakhs',
    //   recommended: true
    // },
  //   {
  //     name: 'Starter Plot',
  //     size: '1200 sq.ft',
  //     price: '₹25 Lakhs',
  //     roi: 'Expected ROI: 15-18% annually',
  //     value: '₹40-45 Lakhs'
  //   }
  // ];

  amenities: AmenitySlide[] = [
    { title: 'Landscape', image: 'imgs/project-1/Rectangle51.png' },
    { title: 'Gated Community', image: 'imgs/project-1/Rectangle52.png' },
    { title: 'Plantation', image: 'imgs/project-1/Rectangle53.png' },
    { title: 'Landscape', image: 'imgs/project-1/Rectangle54.png' },
    { title: 'Landscape', image: 'imgs/project-1/Rectangle51.png' },
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

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 991) {
      this.mobileMenuOpen = false;
    }
  }

  @ViewChild('bgImage') bgImage!: ElementRef;

  onMouseMove(event: MouseEvent) {

    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    const rotateX = -y * 15;
    const rotateY = x * 15;

    this.bgImage.nativeElement.style.transform =
      `scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  resetTilt() {
    this.bgImage.nativeElement.style.transform =
      `scale(1) rotateX(0deg) rotateY(0deg)`;
  }


}
