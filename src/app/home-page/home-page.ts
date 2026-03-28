import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageForm } from "../page-form/page-form";
import { Footer } from "../footer/footer";
import { Router, RouterModule } from '@angular/router';
import { RegisterForm } from "../register-form/register-form";
import { RegisterFormPopup } from "./register-form-popup/register-form-popup";

import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule, PageForm, Footer, RouterModule, RegisterForm, RegisterFormPopup],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {


  
  active = 1;
  activeStep = 0;

  cards = [
    {
      image: '/imgs/home-page/img-1.png',
      title: 'Fully Managed Model',
      desc: 'We handle everything from cultivation to maintenance.',
      alt: 'Fully managed farmland model with plantation and maintenance services'
    },
    {
      image: '/imgs/home-page/img-2.png',
      title: 'Nature-First Philosophy',
      desc: 'Every farmland is curated with a deep respect for nature, ensuring ecological balance and sustainable growth.',
      alt: 'Nature first farmland with greenery and sustainable ecosystem design'
    },
    {
      image: '/imgs/home-page/img-3.png',
      title: 'Sustainable Farming',
      desc: 'We practice organic farming and drip irrigation.',
       alt: 'Organic farming practices with drip irrigation in managed farmland'
    },
    {
      image: '/imgs/home-page/img-4.png',
      title: 'Transparent Ownership',
      desc: 'All plots come with clear legal titles, documentation, and full visibility on...',
      alt: 'Clear land ownership with legal documentation in farmland investment'
    },
  ];
  get leftIndex() {
    return (this.active - 1 + this.cards.length) % this.cards.length;
  }

  get rightIndex() {
    return (this.active + 1) % this.cards.length;
  }

  next() {
    this.active = (this.active + 1) % this.cards.length;
  }

  prev() {
    this.active = (this.active - 1 + this.cards.length) % this.cards.length;
  }

  slides = [
    {
      image: '/imgs/home-page/layout-img-1.png',
      number: '01',
      title: 'Farm Layout Planning',
      desc: 'We create optimal land use layouts with plantations, pathways, cottages, and water features suited for productive and recreational use.'
    },
    {
      image: '/imgs/home-page/layout-img-2.png',
      number: '02',
      title: 'Sandalwood Plantation',
      desc: 'High-value sandalwood tree planting with long-term returns and full lifecycle management services by our agro experts.'
    },
    {
      image: '/imgs/home-page/layout-img-3.png',
      number: '03',
      title: 'Fencing & Security',
      desc: 'Secure your farmland with boundary fencing, gated access, and optional surveillance setups for peace of mind.'
    },
    {
      image: '/imgs/home-page/layout-img-4.png',
      number: '04',
      title: 'Drip Irrigation System',
      desc: 'Efficient water usage with automated drip irrigation ensures healthy plant growth and sustainability across seasons.'
    },
    {
      image: '/imgs/home-page/layout-img-5.png',
      number: '05',
      title: 'Clubhouse & Amenities',
      desc: 'Enjoy access to well-planned clubhouses, swimming pools, and relaxation spaces within nature-centric community zones..'
    },
    {
      image: '/imgs/home-page/layout-img-6.png',
      number: '06',
      title: 'Farmhouse Assistance',
      desc: 'We assist in designing and constructing aesthetic, eco-conscious farmhouses tailored to your preferences.'
    },
    {
      image: '/imgs/home-page/layout-img-7.png',
      number: '07',
      title: 'Agro Advisory & Support',
      desc: 'Get personalized guidance on plantation choices, soil enrichment, and organic practices from seasoned agro consultants.'
    },
    {
      image: '/imgs/home-page/layout-img-8.png',
      number: '08',
      title: 'Farm Resort Getaways & Weekend Retreats',
      desc: 'Unwind at our luxury farmland resort near Mysuru with wellness retreats, organic cuisine, and scenic nature stays.'
    },
  ];

  farmIndex = 0;
  farmAnimate = false;

  nextFarm() {

    if (this.farmIndex >= this.slides.length - 1) return;

    this.farmAnimate = true;

    setTimeout(() => {

      this.farmIndex = this.farmIndex + 1;
      this.farmAnimate = false;

    }, 500);

  }

  prevFarm() {

    if (this.farmIndex <= 0) return;

    this.farmAnimate = true;

    setTimeout(() => {

      this.farmIndex = this.farmIndex - 1;
      this.farmAnimate = false;

    }, 500);

  }

  get nextFarmIndex() {
    return (this.farmIndex + 1) % this.slides.length;
  }

  current = 0;

  slide = [
    {
      title: "Sharanya Sandal Valley Farms",
      desc: "Sharanya Sandal Valley Farms presents a captivating blend of aesthetics.",
      img: "/imgs/home-page/layout-img-8.png"
    },
    {
      title: "Hillview Premium Farms",
      desc: "Located near NH-Mysore-Malavalli Road.",
      img: "/imgs/home-page/layout-img-7.png"
    },
    {
      title: "Nature Living Plots",
      desc: "Eco-friendly farmland plots with greenery.",
      img: "/imgs/home-page/layout-img-6.png"
    }
  ];

  animate = false;

  get nextIndex() {
    return (this.current + 1) % this.slide.length;
  }

  goNextSlide() {

    this.animate = true;

    setTimeout(() => {
      this.current = this.nextIndex;
      this.animate = false;
    }, 600);

  }

  goPrevSlide() {

    this.animate = true;

    setTimeout(() => {
      this.current = (this.current - 1 + this.slide.length) % this.slide.length;
      this.animate = false;
    }, 600);


  }

  channels = [
    {
      img: '/imgs/about/chan-1.png',
      name: 'PUBLIC TV',
      alt: 'Sharanya Farms featured on Public TV news coverage'
    },
    {
      img: '/imgs/about/chan-2.png',
      name: 'DECCAN HERALD',
      alt: 'Sharanya Farms featured in Deccan Herald newspaper'
    },
    {
      img: '/imgs/about/chan-3.png',
      name: 'SUVARNA news',
      alt: 'Sharanya Farms coverage on Suvarna News channel'
    },
    {
      img: '/imgs/about/chan-4.png',
      name: 'KARNATAKA TV9',
      alt: 'Sharanya Farms featured on TV9 Karnataka news channel'
    },
    {
      img: '/imgs/about/chan-5.png',
      name: 'No.1 VIJAYAVANI KANNADA DAILY',
      alt: 'Sharanya Farms featured in Vijayavani Kannada daily news'
    },
    {
      img: '/imgs/about/chan-6.png',
      name: 'VIJAY KARNATAKA',
      alt: 'Sharanya Farms coverage in Vijay Karnataka publication'
    },
  ]

  card = [
    {
      title: 'Sharanya Sandal valley Farms',
      desc: 'Sharanya Sandal Valley Farms represents a captivating blend of aesthetics, fostering a community-centric lifestyle within an eco-friendly expanse located on T Narasipura Road, near Bangalore - Mysore road near Malavali. Our vision is to reshape the essence of living and redefine the experience of acquiring real estate. Located off Bangalore - Mysore road near Malavali, near the prestigious World Heritage...',
      image: '/imgs/home-page/sandal-villey.png',
      link: '/sandal-valley-farms',
      alt: 'Sandalwood plantation farmland at Sharanya Sandal Valley Farms project'
    },
    {
      title: 'Sharanya Hillview Farms',
      desc: 'Sharanya Hillview Farms is a nature-friendly getaway near Mysore designed for those seeking peace, greenery, and value. With sandalwood plantations and lush surroundings, its an ideal destination for weekend retreats, remote working, or mindful farming...',
      image: '/imgs/home-page/hill-view.png',
      link: '/hill-view-farms',
      alt: 'Scenic hill view farmland with greenery at Sharanya Hillview Farms'
    },
    {
      title: 'Sharanya Weekend Village',
      desc: 'We love nature and are unified as a team to preserve it. At Sharanya Farms, we believe that nature should be an integral part of our everyday lives and in the lives of future generations. We have developed farmland properties and the infrastructure for you to enjoy your time in the thick of nature near your farmhouse. We feel delighted in providing people with an opportunity to connect with nature at Sharanya Farms.',
      image: '/imgs/home-page/weekend.png',
      link: '/weekend-village-farms',
      alt: 'Weekend village farmland with natural surroundings and farmhouse lifestyle'
    }
  ]

  cardCurrent = 0;
  cardAnimating = false;

  get cardNextIndex() {
    return (this.cardCurrent + 1) % this.card.length;
  }

  get cardPrevIndex() {
    return (this.cardCurrent - 1 + this.card.length) % this.card.length;
  }

  cardnext() {

    if (this.cardAnimating) return;

    this.cardAnimating = true;

    const section = document.querySelector('.farm-section');
    section?.classList.add('slide-next');

    setTimeout(() => {

      this.cardCurrent = this.cardNextIndex;

      section?.classList.remove('slide-next');
      this.cardAnimating = false;

    }, 600);

  }

  cardprev() {

    if (this.cardAnimating) return;

    this.cardAnimating = true;

    const section = document.querySelector('.farm-section');
    section?.classList.add('slide-prev');

    setTimeout(() => {

      this.cardCurrent = this.cardPrevIndex;

      section?.classList.remove('slide-prev');
      this.cardAnimating = false;

    }, 600);

  }


  // activeStep = 0;


  showPopup: boolean = false;

  constructor(private cdr: ChangeDetectorRef, private router: Router, private title: Title, private meta: Meta) {
    // Title
    this.title.setTitle('Best Managed Farmland Near Bangalore | Sharanya Farms');

    // Meta Description
    this.meta.updateTag({
      name: 'description',
      content: 'Own managed farmland near Bangalore with Sharanya Farms. Premium agricultural land with expert care, sustainable practices, and long-term investment value.'
    });

    // Meta Keywords
    this.meta.updateTag({
      name: 'keywords',
      content: 'managed farmland near Bangalore, farmland investment near Bangalore, buy farmland near Bangalore, managed agricultural land Karnataka, farmland investment India, sustainable farmland projects'
    });

  }
  // constructor(private cdr: ChangeDetectorRef, private router: Router) { }

  isMobile = false;

  showBannerVideo = false;
  showMobileVideo = false;
  showFormVideo = false;

  resizeTimeout: any;

  ngOnInit() {
    this.checkScreen();
    this.loadBannerVideo();

    // form video delay
    setTimeout(() => {
      this.showFormVideo = true;
    }, 1000);

    // ✅ popup show
    setTimeout(() => {
      this.showPopup = true;
      this.cdr.detectChanges();
    }, 500);
  }

  // ✅ SCREEN CHECK
  checkScreen() {
    this.isMobile = window.innerWidth <= 1023;
  }

  // ✅ LOAD VIDEO (MAIN FIX)
  loadBannerVideo() {
    this.showBannerVideo = false;
    this.showMobileVideo = false;

    setTimeout(() => {
      if (this.isMobile) {
        this.showMobileVideo = true;

        setTimeout(() => {
          const video = document.querySelector('.home-page-video-mob') as HTMLVideoElement;
          this.playVideo(video);
        }, 100);

      } else {
        this.showBannerVideo = true;

        setTimeout(() => {
          const video = document.querySelector('.video-wrapper video') as HTMLVideoElement;
          this.playVideo(video);
        }, 100);
      }
    }, 50);
  }

  // ✅ FORCE VIDEO PLAY
  playVideo(video?: HTMLVideoElement) {
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.load();

    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => { });
    }
  }

  // ✅ RESIZE FIX
  @HostListener('window:resize')
  onResize() {
    clearTimeout(this.resizeTimeout);

    this.resizeTimeout = setTimeout(() => {
      const oldValue = this.isMobile;

      this.checkScreen();

      if (oldValue !== this.isMobile) {
        this.loadBannerVideo();
      }
    }, 150);
  }

  // ✅ MUTE TOGGLE
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
          this.cdr.detectChanges();
          observer.disconnect();
        }
      }, { threshold: 0.2 });

      observer.observe(section);
    }
  }
  closePopup() {
    this.showPopup = false;
  }

  /* Desktop hover */

  onHover(step: number) {
    if (!this.isMobile) {
      this.activeStep = step;
    }
  }

  onLeave() {
    if (!this.isMobile) {
      this.activeStep = 0;
    }
  }


  /* Mobile click */

  onStepClick(step: number) {

    if (this.isMobile) {

      if (this.activeStep === step) {
        this.activeStep = 0;   // close if clicked again
      } else {
        this.activeStep = step;  // open selected card
      }

    }

  }


  goToImagePage(): void {

    this.router.navigate(['/weekendvillage-map']);
    console.log('clicking')
  }


}
