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
    { name: 'Plot 1', description: '15 Guntas', top: 68, left: 72 },
    { name: 'Plot 2', description: '7.25 Guntas', top: 66, left: 70 },
    { name: 'Plot 3', description: '7 Guntas', top: 64, left: 68.5 },
    { name: 'Plot 4', description: '7 Guntas', top: 62, left: 67 },
    { name: 'Plot 5', description: '8 Guntas', top: 60, left: 67 },
    { name: 'Plot 6', description: '8 Guntas', top: 60, left: 65 }, 
    { name: 'Plot 12', description: '7 Guntas', top: 58, left: 64 },
    { name: 'Plot 13', description: '5.75 Guntas', top: 57, left: 65 },
    { name: 'Plot 7', description: '11 Guntas', top: 66, left: 63 },
    { name: 'Plot 8', description: '10 sqft', top: 63, left: 62 },
    { name: 'Plot 9', description: '9 Guntas', top: 60, left: 61 },
    { name: 'Plot 10', description: '10 sqft', top: 57, left: 57 },
    { name: 'Plot 11', description: '10 sqft', top: 56, left: 58 },
    { name: 'Plot 31', description: '8 sqft', top: 55.5, left: 59 },
    { name: 'Plot 32', description: '8 sqft', top: 54, left: 58 },
    { name: 'Plot 33', description: '8 sqft', top: 53.5, left: 59 },
    { name: 'Plot 14', description: '9 Guntas', top: 56.5, left: 69 },
    { name: 'Plot 15', description: '9 Guntas', top: 56.5, left: 72 },
    { name: 'Plot 16', description: '9.75 Guntas', top: 56.5, left: 75 },
    { name: 'Plot 17', description: '8.5 Guntas', top: 56.5, left: 78 },
    { name: 'Plot 18', description: '8 Guntas', top: 56.5, left: 82 },
    { name: 'Plot 83', description: '6.5 Guntas', top: 57.5, left: 80 },
    { name: 'Plot 21', description: '8.5 Guntas', top: 56, left: 85 },
    { name: 'Plot 22', description: '8 Guntas', top: 56, left: 88 },
    { name: 'Plot 20', description: '5.5 Guntas', top: 57, left: 86.5 },    
    { name: 'Plot 27', description: '8.25 Guntas', top: 55, left: 67 },
    { name: 'Plot 28', description: '7 Guntas', top: 55, left: 70 },
    { name: 'Plot 29', description: '7 Guntas', top: 55, left: 73 },
    { name: 'Plot 30', description: '7 Guntas', top: 53, left: 65 },
    { name: 'Plot 34', description: '10 Guntas', top: 53, left: 67.5 },
    { name: 'Plot 35', description: '10 Guntas', top: 53, left: 70 },
    { name: 'Plot 36', description: '10 Guntas', top: 53, left: 72.5 },
    { name: 'Plot 37', description: '10 Guntas', top: 55.5, left: 64 },
    { name: 'Plot 38', description: '8 Guntas', top: 53.5, left: 62 },
    { name: 'Plot 39', description: '8 Guntas', top: 54.5, left: 63 },
    { name: 'Plot 24', description: '9 Guntas', top: 54, left: 83.5 },
    { name: 'Plot 23', description: '10 Guntas', top: 54, left: 86 },
    { name: 'Plot 25', description: '8 Guntas', top: 54.5, left: 81 },
    { name: 'Plot 26', description: '7.75 Guntas', top: 54.5, left: 78 },
    { name: 'Plot 44', description: '5.5 Guntas', top: 53, left: 84.5 },
    { name: 'Plot 45', description: '5.5 Guntas', top: 53, left: 87 },
    { name: 'Plot 43', description: '5.5 Guntas', top: 53, left: 82 },
    { name: 'Plot 42', description: '5.5 Guntas', top: 53, left: 80 },
    { name: 'Plot 41', description: '5.5 Guntas', top: 53, left: 78 },
    { name: 'Plot 40', description: '10 Guntas', top: 53.5, left: 76 },


    { name: 'Club House', description: '', top: 50.5, left: 52 },
    { name: 'Swimming Pool', description: '', top: 48.5, left: 55 },
    { name: 'Badminton Court', description: '', top: 47.5, left: 53 },
    { name: 'Basketball  Court', description: '', top: 50.5, left: 54 },
    { name: 'Outdoor Gym', description: '', top: 47.5, left: 51 },


    
    { name: 'Plot 1', description: '6.25 Guntas', top: 49.5, left: 48 },
    { name: 'Plot 2', description: '6 Guntas', top: 49.5, left: 45.5 },
    { name: 'Plot 3', description: '6 Guntas', top: 49.5, left: 42 },
    { name: 'Plot 4', description: '7.25 Guntas', top: 48.5, left: 43 },
    { name: 'Plot 5', description: '7 Guntas', top: 47.5, left: 43.5 },
    { name: 'Plot 6', description: '7 Guntas', top: 47, left: 44 },
    { name: 'Plot 7', description: '5.5 Guntas', top: 46.5, left: 44.5 },
    { name: 'Plot 19', description: '5.5 Guntas', top: 49, left: 41 },
    { name: 'Plot 20', description: '6 Guntas', top: 49, left: 39 },
    { name: 'Plot 21', description: '5.5 Guntas', top: 49, left: 37 },
    { name: 'Plot 22', description: '5.5 Guntas', top: 49, left: 35 },
    { name: 'Plot 23', description: '6.25 Guntas', top: 49, left: 33 },
    { name: 'Plot 24', description: '6.25 Guntas', top: 49, left: 31 },
    { name: 'Plot 25', description: '6.25 Guntas', top: 49.5, left: 30 },
    { name: 'Plot 26', description: '6 Guntas', top: 50, left: 31 },
    { name: 'Plot 27', description: '6 Guntas', top: 51, left: 30 },
    { name: 'Plot 29', description: '7 Guntas', top: 52.5, left: 28 },
    { name: 'Plot 28', description: '7 Guntas', top: 51.5, left: 29 },
    { name: 'Plot 30', description: '7.5 Guntas', top: 53, left: 27 },

    { name: 'Plot 43', description: '6 Guntas', top: 61, left: 27 },
    { name: 'Plot 44', description: '6 Guntas', top: 60, left: 24 },
    { name: 'Plot 45', description: '6 Guntas', top: 61, left: 23 },
    { name: 'Plot 45', description: '6 Guntas', top: 61, left: 23 },
    { name: 'Plot 46', description: '5.75 Guntas', top: 61.5, left: 18 },
    { name: 'Plot 47', description: '6 Guntas', top: 60, left: 21 },
    { name: 'Plot 48', description: '6 Guntas', top: 61.5, left: 18 },
    { name: 'Plot 49', description: '6.5 Guntas', top: 59.5, left: 17 },
    { name: 'Plot 50', description: '6 Guntas', top: 59, left: 15 },
    { name: 'Plot 52', description: '6 Guntas', top: 58.5, left: 11 },
    { name: 'Plot 53', description: '6 Guntas', top: 58.5, left: 9 },
    { name: 'Plot 51', description: '6 Guntas', top: 58.5, left: 13 },
    { name: 'Plot 54', description: '6 Guntas', top: 58, left: 7 },
    { name: 'Plot 55', description: '6 Guntas', top: 58, left: 5 },
    { name: 'Plot 61', description: '9.5 Guntas', top: 57.5, left: 19 },
    { name: 'Plot 60', description: '6 Guntas', top: 57, left: 16.5 },
    { name: 'Plot 59', description: '6 Guntas', top: 57, left: 15 },
    { name: 'Plot 56', description: '6 Guntas', top: 56.5, left: 8.5 },
    { name: 'Plot 57', description: '6 Guntas', top: 56.5, left: 10.5},
    { name: 'Plot 58', description: '7 Guntas', top: 57, left: 13 },
    { name: 'Plot 62', description: '6 Guntas', top: 55.5, left: 22 },
    { name: 'Plot 63', description: '6 Guntas', top: 55.5, left: 20.5 },
    { name: 'Plot 64', description: '6 Guntas', top: 55.5, left: 18.5 },
    { name: 'Plot 65', description: '6 Guntas', top: 55, left: 16.5 },
    { name: 'Plot 66', description: '7 Guntas', top: 55, left: 14.5},
    { name: 'Plot 67', description: '10 Guntas', top: 55, left: 11.5 },
    { name: 'Plot 34', description: '7 Guntas', top: 55.5, left: 32 },
    { name: 'Plot 33', description: '8 Guntas', top: 55.5, left: 30 },
    { name: 'Plot 32', description: '7 Guntas', top: 55.5, left: 28 },
    { name: 'Plot 31', description: '7.75 Guntas', top: 55.5, left: 25 },

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
