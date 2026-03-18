import { Component, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';


declare var pannellum: any;

@Component({
  selector: 'app-weekend-village',
  imports: [],
  templateUrl: './weekend-village.html',
  styleUrl: './weekend-village.css',
})
export class WeekendVillage {

  constructor(private cdr: ChangeDetectorRef, private location: Location) { }

  plots = [
    { pitch: -69, yaw: 18, title: 'Plot-82', des: '8-G' },
    { pitch: -70, yaw: 7, title: 'Plot-83', des: '8-G' },
    { pitch: -46, yaw: 25, title: 'Plot-63', des: '9-G' },
    { pitch: -43, yaw: 39, title: 'Plot-67', des: '10-G' },

    { pitch: -42, yaw: -27, title: 'Plot 1', des: '5.5-G' },
    { pitch: -44, yaw: -25, title: 'Plot 2', des: '5-G' },
    { pitch: -46, yaw: -30, title: 'Plot 4', des: '5-G' },
    { pitch: -48, yaw: -32, title: 'Plot 5', des: '5-G' },
    { pitch: -50, yaw: -31, title: 'Plot 6', des: '5-G' },
    { pitch: -51, yaw: -35, title: 'Plot 7', des: '5-G' },
    { pitch: -53, yaw: -35, title: 'Plot 8', des: '6.5-G' },
    { pitch: -55, yaw: -40, title: 'Plot 9', des: '10-G' },
    { pitch: -55, yaw: -26, title: 'Plot 10', des: '10-G' },
    { pitch: -57, yaw: -17, title: 'Plot 11', des: '10-G' },
    { pitch: -58, yaw: -8, title: 'Plot 12', des: '10-G' },
    { pitch: -59, yaw: 2, title: 'Plot 13', des: '10-G' },
    { pitch: -59, yaw: 10, title: 'Plot 14', des: '5-G' },
    { pitch: -59, yaw: 16, title: 'Plot 15', des: '5-G' },
    { pitch: -57, yaw: 19, title: 'Plot 16', des: '6.157-G' },
    { pitch: -53, yaw: 15, title: 'Plot 17', des: '6.5-G' },
    { pitch: -54, yaw: 8, title: 'Plot 18', des: '10-G' },
    { pitch: -54, yaw: -1, title: 'Plot 19', des: '10-G' },
    { pitch: -54, yaw: -8, title: 'Plot 20', des: '10-G' },
    { pitch: -53, yaw: -15, title: 'Plot 21', des: '10-G' },
    { pitch: -51, yaw: -23, title: 'Plot 22', des: '10-G' },
    { pitch: -48, yaw: -21, title: 'Plot 23', des: '10-G' },
    { pitch: -50, yaw: -13, title: 'Plot 24', des: '10-G' },
    { pitch: -51, yaw: -6, title: 'Plot-25', des: '10-G' },
    { pitch: -51, yaw: -1, title: 'Plot 26', des: '10-G' },
    { pitch: -51, yaw: 8, title: 'Plot 27', des: '10-G' },
    { pitch: -50, yaw: 15, title: 'Plot 28', des: '7.5-G' },
    { pitch: -46, yaw: 12, title: 'Plot 29', des: '10-G' },
    { pitch: -43, yaw: 11, title: 'Plot-30', des: '10-G' },

    { pitch: -43, yaw: 5, title: 'Plot 31', des: '10-G' },
    { pitch: -46, yaw: 5, title: 'Plot 32', des: '10-G' },
    { pitch: -46, yaw: -2, title: 'Plot 33', des: '10-G' },
    { pitch: -43, yaw: -2, title: 'Plot 34', des: '10-G' },

    { pitch: -44, yaw: -20, title: 'Plot 38', des: '10-G' },
    { pitch: -59, yaw: -30, title: 'Plot 39', des: '10-G' },
    { pitch: -62, yaw: -20, title: 'Plot-40', des: '10-G' },
    { pitch: -63, yaw: -8, title: 'Plot-41', des: '10-G' },
    { pitch: -63, yaw: 3, title: 'Plot-42', des: '9.25-G' },
    { pitch: -63, yaw: 15, title: 'Plot-43', des: '8.5-G' },
    { pitch: -62, yaw: 22, title: 'Plot-44', des: '8.5-G' },
    { pitch: -60, yaw: 29, title: 'Plot 45', des: '10-G' },
    { pitch: -55, yaw: 27, title: 'Plot 46', des: '9.5-G' },
    { pitch: -52, yaw: 22.5, title: 'Plot 47', des: '8.5-G' },
    { pitch: -49, yaw: 20, title: 'Plot 48', des: '7-G' },


    { pitch: -70, yaw: -4, title: 'Plot 84', des: '8-G' },
    { pitch: -70, yaw: -11, title: 'Plot 85', des: '8-G' },
    { pitch: -66, yaw: -24, title: 'Plot 86', des: '6.5-G' },




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
