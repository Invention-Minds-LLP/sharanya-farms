import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import AOS from 'aos';

interface HighlightCard {
  icon: string;
  label: string;
  title: string;
  description: string;
}

interface PriceCard {
  name: string;
  size: string;
  price: string;
  roi: string;
  value: string;
  recommended?: boolean;
}

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
      icon: '📍',
      label: 'Prime Location',
      title: '45 km from City Center',
      description: 'Well-connected via national highway with easy access to urban amenities'
    },
    {
      icon: '🏷️',
      label: 'Plot Sizes',
      title: '1200 - 5000 sq.ft',
      description: 'Flexible plot options to match your investment goals'
    },
    {
      icon: '₹',
      label: 'Starting Price',
      title: '₹25 Lakhs onwards',
      description: 'Competitive pricing with easy EMI options available'
    },
    {
      icon: '📄',
      label: 'Legal Approvals',
      title: 'RERA & DTCP',
      description: 'Fully approved with clear title and documentation'
    },
    {
      icon: '🌱',
      label: 'Plantation',
      title: 'Pre-landscaped',
      description: 'Premium saplings and mature trees included'
    },
    {
      icon: '🏠',
      label: 'Amenities',
      title: 'Resort-style',
      description: 'Clubhouse, security, and modern infrastructure'
    }
  ];

  pricing: PriceCard[] = [
    {
      name: 'Starter Plot',
      size: '1200 sq.ft',
      price: '₹25 Lakhs',
      roi: 'Expected ROI: 15-18% annually',
      value: '₹40-45 Lakhs'
    },
    {
      name: 'Premium Plot',
      size: '2500 sq.ft',
      price: '₹48 Lakhs',
      roi: 'Expected ROI: 18-20% annually',
      value: '₹85-95 Lakhs',
      recommended: true
    },
    {
      name: 'Starter Plot',
      size: '1200 sq.ft',
      price: '₹25 Lakhs',
      roi: 'Expected ROI: 15-18% annually',
      value: '₹40-45 Lakhs'
    }
  ];

  amenities: AmenitySlide[] = [
    { title: 'Landscape', image: 'assets/amenities/amenity-1.jpg' },
    { title: 'Gated Community', image: 'assets/amenities/amenity-2.jpg' },
    { title: 'Plantation', image: 'assets/amenities/amenity-3.jpg' },
    { title: 'Private Valley', image: 'assets/amenities/amenity-4.jpg' }
  ];

  currentAmenityIndex = 1;

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
}
