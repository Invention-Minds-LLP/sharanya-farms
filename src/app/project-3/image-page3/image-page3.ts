import { Component, HostListener, ViewChild, ElementRef, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

declare var pannellum: any;  // Declare pannellum to avoid TypeScript errors




@Component({
  selector: 'app-image-page3',
  imports: [CommonModule],
  templateUrl: './image-page3.html',
  styleUrl: './image-page3.css',
})
export class ImagePage3 {

  constructor(private cdr: ChangeDetectorRef, private location: Location) { }

  plots = [
    { pitch: -69, yaw: 18, title: 'Plot-82', des: '8-G' },
    { pitch: -71, yaw: 10, title: 'Plot-83', des: '8-G' },
    { pitch: -59, yaw: 16, title: 'Plot-14', des: '8-G' },
    { pitch: -50, yaw: -9, title: 'Plot-25', des: '10-G' },
    {
      // 3
      pitch: -55,
      yaw: 27,
      title: 'Plot-46',
      des: '9.5-G'
    },
    {
      // 4
      pitch: -43,
      yaw: 11,
      id: 14,
      title: 'Plot-30',
      des: '10-G'
    },
    {
      // 5
      pitch: -62,
      yaw: -20,
      title: 'Plot-40',
      des: '10-G'
    },
    {
      // 6
      pitch: -46,
      yaw: 25,
      title: 'Plot-63',
      des: '9-G'
    },

    {
      // 6
      pitch: -43,
      yaw: 39,
      title: 'Plot-67',
      des: '10-G'
    },
    {
      // 7
      pitch: -55,
      yaw: -40,
      title: 'Plot-9',
      des: '10-G'
    },
    { pitch: -48, yaw: -32, title: 'Plot 5', des: '5-G' },
    { pitch: -50, yaw: -23, title: 'Plot 22', des: '10-G' },
    { pitch: -55, yaw: -28, title: 'Plot 10', des: '10-G' },
    { pitch: -59, yaw: -30, title: 'Plot 39', des: '10-G' },
    { pitch: -58, yaw: -10, title: 'Plot 12', des: '10-G' },
    { pitch: -44, yaw: -20, title: 'Plot 38', des: '10-G' },
    { pitch: -60, yaw: 29, title: 'Plot 45', des: '10-G' },
    { pitch: -66, yaw: -24, title: 'Plot 86', des: '6.5-G' },
    { pitch: -46, yaw: -2, title: 'Plot-33', des: '10-G' },
    { pitch: -43, yaw: -2, title: 'Plot-34', des: '10-G' },
    { pitch: -50, yaw: -1, title: 'Plot-26', des: '10-G' },
    { pitch: -43, yaw: 5, title: 'Plot-31', des: '10-G' },
    { pitch: -49, yaw: 20, title: 'Plot-48', des: '7-G' },
    { pitch: -53, yaw: -1, title: 'Plot-19', des: '10-G' },

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
      panorama: '/imgs/project-1/weekend.jpeg',
      autoLoad: true,
      showZoomCtrl: true,
      mouseZoom: true,

      hotSpots: hotspots

    });
  };

  goBack() {
    this.location.back();
  }

}





