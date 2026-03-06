import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageForm } from "../page-form/page-form";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, FormsModule, PageForm, Footer],
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
    }
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

  nextFarm() {
    this.farmIndex = (this.farmIndex + 1) % this.slides.length;
  }

  prevFarm() {
    this.farmIndex = (this.farmIndex - 1 + this.slides.length) % this.slides.length;
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
}
