import { Component, HostListener, ViewChild, ElementRef, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  constructor(private cdr: ChangeDetectorRef) {}

  plots = [
    {
      // 1
      pitch: 0,
      yaw: 20,
      title: 'Plot 1',
      des: 'testing plots'
    },
    {
      // 2
      pitch: -5,
      yaw: -35,
      title: 'Plot 2',
      des: 'testing plots'
    },
    {
      // 3
      pitch: -15,
      yaw: 30,
      title: 'Plot 3',
      des: 'testing plots'
    },
    {
      // 4
      pitch: -10,
      yaw: 45,
      id: 14,
      title: 'Plot 4',
      des: 'testing plots'
    },
    {
      // 5
      pitch: 20,
      yaw: -20,
      title: 'Plot 5',
      des: 'testing plots'
    },
    {
      // 6
      pitch: 0,
      yaw: 0,
      title: 'Plot 6',
      des: 'testing plots'
    },
    {
      // 7
      pitch: 15,
      yaw: -40,
      title: 'Plot 7',
      des: 'testing plots'
    },
  ]


  tooltipVisible = false;
  tooltipTitle = '';
  tooltipDes = '';

  tooltipX = 0;
  tooltipY = 0;



  ngAfterViewInit() {

    // const Component = this;

    
      const hotspots = this.plots.map(plot => ({
        pitch: plot.pitch,
        yaw: plot.yaw,
        type: 'custom',
        cssClass: 'plot-marker',
      
        createTooltipFunc: (div: any) => {
          div.innerHTML = `<img src="imgs/project-1/location.png">`;
      
          div.addEventListener("mouseenter", (e: MouseEvent) => {
              this.tooltipTitle = plot.title;
              this.tooltipDes = plot.des;
              this.tooltipX = e.clientX;
              this.tooltipY = e.clientY;
          
              this.tooltipVisible = true;
          
              this.cdr.detectChanges();
          });

          div.addEventListener("mousemove", (e: MouseEvent) => {

            this.tooltipX = e.clientX;
              this.tooltipY = e.clientY;
            this.cdr.detectChanges();
          });
      
          div.addEventListener("mouseleave", () => {
            this.tooltipVisible = false;

            this.cdr.detectChanges();
          });
        }
      }));
    

   

    pannellum.viewer('panorama', {
    
        type: 'equirectangular',
        panorama: 'imgs/project-1/sandal.png',
        autoLoad: true,
        showZoomCtrl: true,
        mouseZoom: true,
    
        hotSpots: hotspots
    
      });
    };
}




