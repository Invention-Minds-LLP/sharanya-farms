import { Component, HostListener, ViewChild, ElementRef, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

declare var pannellum: any;  // Declare pannellum to avoid TypeScript errors



@Component({
  selector: 'app-image-page',
  imports: [CommonModule],
  templateUrl: './image-page.html',
  styleUrl: './image-page.css',
})
export class ImagePage {


  constructor(private cdr: ChangeDetectorRef, private location: Location) { }

  plots = [
    { name: 'Plot 1', description: '1200 sqft', top: 19, left: 37 },
    { name: 'Plot 2', description: '1500 sqft', top: 19, left: 41 },
    { name: 'Plot 3', description: '1800 sqft', top: 19, left: 44 },
    { name: 'Plot 4', description: '1200 sqft', top: 19, left: 47 },
    { name: 'Plot 5', description: '1500 sqft', top: 19, left: 51 },
    { name: 'Plot 6', description: '1800 sqft', top: 20, left: 55 },
    { name: 'Plot 7', description: '1200 sqft', top: 19, left: 60 },
    { name: 'Plot 8', description: '1500 sqft', top: 23, left: 59 },
    { name: 'Plot 9', description: '1800 sqft', top: 22, left: 65 },
    { name: 'Plot 10', description: '1200 sqft', top: 27, left: 64 },
    { name: 'Plot 11', description: '1500 sqft', top: 31, left: 64 },
    { name: 'Plot 12', description: '1800 sqft', top: 27, left: 59 },
    { name: 'Plot 13', description: '1200 sqft', top: 26, left: 54 },
    { name: 'Plot 14', description: '1500 sqft', top: 25, left: 50 },
    { name: 'Plot 15', description: 'Guntas-5.5', top: 24, left: 36 },
    { name: 'Plot 16', description: 'Guntas-6', top: 26, left: 39.5 },
    { name: 'Plot 17', description: 'Guntas-6', top: 28, left: 41.5 },
    { name: 'Plot 18', description: 'Guntas-6', top: 31, left: 43.5 },
    { name: 'Plot 19', description: 'Guntas-7.5', top: 31, left: 46 },
    { name: 'Plot 20', description: 'Guntas-7.5', top: 31, left: 49 },
    { name: 'Plot 21', description: 'Guntas-5.5', top: 33, left: 53 },
    { name: 'Plot 22', description: 'Guntas-5.5', top: 33, left: 56 },
    { name: 'Plot 23', description: 'Guntas-5.5', top: 33, left: 58 },
    { name: 'Plot 24', description: 'Guntas-5.25', top: 37, left: 61.5 },
    { name: 'Plot 25', description: 'Guntas-6', top: 38, left: 65.5 },
    { name: 'Plot 26', description: 'Guntas-13', top: 30, left: 71 },
    { name: 'Plot 27', description: 'Guntas-6', top: 40, left: 70 },
    { name: 'Plot 28', description: 'Guntas-5.5', top: 45, left: 69 },
    { name: 'Plot 29', description: 'Guntas-6', top: 44, left: 65 },
    { name: 'Plot 30', description: 'Guntas-6', top: 42, left: 61 },
    { name: 'Plot 31', description: 'Guntas-7.5', top: 47, left: 60 },
    { name: 'Plot 32', description: 'Guntas-6.25', top: 49, left: 64 },
    { name: 'Plot 33', description: 'Guntas-5.5', top: 50, left: 68 },
    { name: 'Plot 34', description: 'Guntas-5.5', top: 62, left: 66 },
    { name: 'Plot 35', description: 'Guntas-6.5', top: 71, left: 64 },
    { name: 'Plot 36', description: 'Guntas-8', top: 80, left: 62 },
    { name: 'Plot 37', description: 'Guntas-7.5', top: 76, left: 58 },
    { name: 'Plot 38', description: 'Guntas-8', top: 69, left: 60 },
    { name: 'Plot 39', description: 'Guntas-7', top: 60, left: 63 },
    { name: 'Plot 40', description: 'Guntas-5.5', top: 54, left: 60 },
    { name: 'Plot 41', description: 'Guntas-5.5', top: 58, left: 59.5 },
    { name: 'Plot 42', description: 'Guntas-5.5', top: 62, left: 58 },
    { name: 'Plot 43', description: 'Guntas-5.5', top: 67, left: 57 },
    { name: 'Plot 44', description: 'Guntas-5.5', top: 70.5, left: 55.5 },
    { name: 'Plot 45', description: 'Guntas-5.5', top: 75, left: 54.5 },
    { name: 'Plot 46', description: 'Guntas-6', top: 70, left: 50 },
    { name: 'Plot 47', description: 'Guntas-6', top: 66, left: 51 },
    { name: 'Plot 48', description: 'Guntas-7.5', top: 59, left: 53.5 },
    { name: 'Plot 49', description: 'Guntas-7.5', top: 53, left: 55 },
    { name: 'Plot 50', description: 'Guntas-7.5', top: 51.5, left: 51 },
    { name: 'Plot 51', description: 'Guntas7.5', top: 57, left: 50 },
    { name: 'Plot 52', description: 'Guntas-6', top: 65, left: 47 },
    { name: 'Plot 53', description: 'Guntas-5.5', top: 61, left: 43.5 },
    { name: 'Plot 54', description: 'Guntas-6', top: 59.5, left: 39 },
    { name: 'Plot 55', description: 'Guntas-6', top: 57, left: 34 },
    { name: 'Plot 56', description: 'Guntas-6.5', top: 56, left: 29.5 },
    { name: 'Plot 57', description: 'Guntas-6', top: 54, left: 24 },
    { name: 'Plot 58', description: 'Guntas-7', top: 52, left: 20 },
    { name: 'Plot 59', description: 'Guntas-7', top: 46, left: 21.5},
    { name: 'Plot 60', description: 'Guntas-8', top: 40, left: 28 },
    { name: 'Plot 61', description: 'Guntas-6', top: 45, left: 27 },
    { name: 'Plot 62', description: 'Guntas-6', top: 49, left: 25 },
    { name: 'Plot 63', description: 'Guntas-5.5', top: 49, left: 29.5 },
    { name: 'Plot 64', description: 'Guntas-5.5', top: 50, left: 32.5 },
    { name: 'Plot 65', description: 'Guntas-6', top: 52, left: 36 },
    { name: 'Plot 66', description: 'Guntas-6.5', top: 54, left: 40.5 },
    { name: 'Plot 67', description: 'Guntas-7', top: 56, left: 45 },
    { name: 'Plot 68', description: 'Guntas-6', top: 50, left: 48 },
    { name: 'Plot 69', description: 'Guntas-6', top: 50, left: 45.5 },
    { name: 'Plot 70', description: 'Guntas-6', top: 50, left: 42.5 },
    { name: 'Plot 71', description: 'Guntas-6', top: 46, left: 41 },
    { name: 'Plot 72', description: 'Guntas-6', top: 46, left: 38.5 },
    { name: 'Plot 73', description: 'Guntas-6', top: 46, left: 36 },
    { name: 'Plot 74', description: 'Guntas-5.5', top: 43, left: 34.3 },
    { name: 'Plot 75', description: 'Guntas-6.2', top: 43, left: 31.5 },
    { name: 'Plot 76', description: 'Guntas-6', top: 34, left: 33 },
    { name: 'Plot 77', description: 'Guntas-6.2', top: 29.5, left: 34.5 },
    { name: 'Plot 78', description: 'Guntas-8', top: 35, left: 37.5 },
    { name: 'Plot 79', description: 'Guntas-10', top: 36, left: 41 },
    { name: 'Plot 80', description: 'Guntas-10', top: 38, left: 44 },
    { name: 'Plot 81', description: 'Guntas-10', top: 39, left: 47.5 },
    { name: 'Plot 82', description: 'Guntas-10', top: 40, left: 51},
    { name: 'Site Office', description: '', top: 41, left: 55 },
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
