import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageForm } from "../page-form/page-form";
import { Footer } from "../footer/footer";
import { NavBar } from "../nav-bar/nav-bar";

@Component({
  selector: 'app-about-page',
  imports: [CommonModule, PageForm, Footer, NavBar],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {
  card = [
    {
      heading: 'Sustainable Stewardship',
      para: 'We protect the earth first. Our farming and land practices ensure soil health, water conservation, and ecological balance — respecting the land as much as those who use it.'
    },
    {
      heading: 'Trust and Transparency',
      para: 'Our processes are clear, our documentation is solid, and our relationships are built on integrity. From first inquiry to long-term ownership, we ensure peace of mind.'
    },
    {
      heading: 'Holistic Living Spaces',
      para: 'More than a farm - a lifestyle. Our designs emphasize comfort, wellness, and harmony with nature, blending practicality with soulful living.'
    },
  ]

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
  current = 0;

  slides = [
    {
      number: '1',
      title: 'Nature-First Approach',
      desc: 'Our farms are designed to thrive with nature — sustainable, organic, and eco-conscious from the soil up.',
      color: '#556708'
    },
    {
      number: '2',
      title: 'Transparent Ownership',
      desc: 'With clear titles and secure documentation, your investment is safe and hassle-free — always.',
      color: '#A89311'
    },
    {
      number: '3',
      title: 'Managed Farm Living',
      desc: 'We maintain and manage your farm so you can relax, visit, or work remotely without stress.',
      color: '#227546'
    },
    {
      number: '4',
      title: 'Blending Heritage & Modernity',
      desc: 'Close to Mysore’s heritage yet designed for today’s lifestyle — enjoy a resort-like rural escape near the city.',
      color: '#80A811'
    }
  ];

  next() {
    this.current = (this.current + 1) % this.slides.length;
  }

  prev() {
    this.current =
      (this.current - 1 + this.slides.length) % this.slides.length;
  }

  scrollToForm() {
    document.getElementById('form-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
