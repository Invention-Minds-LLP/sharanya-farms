import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageForm } from "../page-form/page-form";
import { Footer } from "../footer/footer";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, FormsModule, PageForm, Footer, RouterModule],
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
      desc: 'We handle everything from cultivation to maintenance.'
    },
    {
      image: '/imgs/home-page/img-2.png',
      title: 'Nature-First Philosophy',
      desc: 'Every farmland is curated with a deep respect for nature, ensuring ecological balance and sustainable growth.'
    },
    {
      image: '/imgs/home-page/img-3.png',
      title: 'Sustainable Farming',
      desc: 'We practice organic farming and drip irrigation.'
    },
    {
      image: '/imgs/home-page/img-4.png',
      title: 'Transparent Ownership',
      desc: 'All plots come with clear legal titles, documentation, and full visibility on...'
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
      name: 'PUBLIC TV'
    },
    {
      img: '/imgs/about/chan-2.png',
      name: 'PUBLIC TV'
    },
    {
      img: '/imgs/about/chan-3.png',
      name: 'SUVARNA news'
    },
    {
      img: '/imgs/about/chan-4.png',
      name: 'KARNATAKA TV9'
    },
    {
      img: '/imgs/about/chan-5.png',
      name: 'No.1 VIJAYAVANI KANNADA DAILY'
    },
    {
      img: '/imgs/about/chan-6.png',
      name: 'VIJAY KARNATAKA'
    },
  ]

  card = [
    {
      title: 'Sharanya Sandal valley Farms',
      desc: 'Sharanya Sandal Valley Farms represents a captivating blend of aesthetics, fostering a community-centric lifestyle within an eco-friendly expanse located on T Narasipura Road, near NH-Mysore-Malavali Road. Our vision is to reshape the essence of living and redefine the experience of acquiring real estate. Located off NH-Mysore-Malavali Road, near the prestigious World Heritage...',
      image: '/imgs/home-page/sandal-villey.png',
      link: ''
    },
    {
      title: 'Sharanya Hillview Farms',
      desc: 'Sharanya Hillview Farms is a nature-friendly getaway near Mysore designed for those seeking peace, greenery, and value. With sandalwood plantations and lush surroundings, its an ideal destination for weekend retreats, remote working, or mindful farming...',
      image: '/imgs/home-page/hill-view.png',
      link: '/hillview'
    },
    {
      title: 'Sharanya Weekend Village',
      desc: 'Sharanya Hillview Farms is a nature-friendly getaway near Mysore designed for those seeking peace, greenery, and value. With sandalwood plantations and lush surroundings, its an ideal destination for weekend retreats, remote working, or mindful farming...',
      image: '/imgs/home-page/weekend.png',
      link: ''
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
  isMobile = false;

  ngOnInit() {
    this.checkScreen();
  }

  checkScreen() {
    this.isMobile = window.innerWidth <= 1023;
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreen();
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

  constructor(private router: Router) { }

  goToImagePage(): void {

    this.router.navigate(['/image-page3']);
    console.log('clicking')
  }
}
