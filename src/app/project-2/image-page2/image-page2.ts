import { Component, HostListener, ViewChild, ElementRef, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

declare var pannellum: any;  // Declare pannellum to avoid TypeScript errors



@Component({
  selector: 'app-image-page2',
  imports: [CommonModule],
  templateUrl: './image-page2.html',
  styleUrl: './image-page2.css',
})
export class ImagePage2 {


  constructor(private cdr: ChangeDetectorRef, private location: Location) { }

  plots = [
    { name: 'Plot 1', description: '1200 sqft', top: 35, left: 30 },
    { name: 'Plot 2', description: '1500 sqft', top: 50, left: 55 },
    { name: 'Plot 3', description: '1800 sqft', top: 25, left: 70 }
  ];

  activePlot: any = null;

  hoverPlot(plot:any){
    this.activePlot = plot;
  }

  leavePlot(){
    this.activePlot = null;
  }


  goBack() {
    this.location.back();
  }

}
