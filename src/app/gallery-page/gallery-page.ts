import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { PageForm } from "../page-form/page-form";

@Component({
  selector: 'app-gallery-page',
  imports: [CommonModule, PageForm],
  templateUrl: './gallery-page.html',
  styleUrl: './gallery-page.css',
})
export class GalleryPage {
  selectedCategory = 'sandal';

  startIndex = 0;
  imagesPerPage = 1;

  ngOnInit() {
    this.setImagesPerPage();
  }

  @HostListener('window:resize')
  onResize() {
    this.setImagesPerPage();
  }

  setImagesPerPage() {
    const width = window.innerWidth;

    if (width <= 767) {
      this.imagesPerPage = 7; // mobile
    } else if (width <= 1024) {
      this.imagesPerPage = 1; // tablet
    } else {
      this.imagesPerPage = 1; // desktop
    }

    this.startIndex = 0;
  }

  selectCategory(cat: string) {
    this.selectedCategory = cat;
    this.startIndex = 0;
  }

  getTotalImages(): number {
    const width = window.innerWidth;

    if (width <= 767) {
      // mobile gallery-resp counts
      if (this.selectedCategory === 'sandal') return 14;
      if (this.selectedCategory === 'hillview') return 14;
      if (this.selectedCategory === 'weekend') return 14;
    } else {
      // desktop/tablet gallery counts
      if (this.selectedCategory === 'sandal') return 2;
      if (this.selectedCategory === 'hillview') return 2;
      if (this.selectedCategory === 'weekend') return 3;
    }

    return 0;
  }

  next() {
    const total = this.getTotalImages();

    if (this.startIndex + this.imagesPerPage < total) {
      this.startIndex += this.imagesPerPage;
    }
  }

  prev() {
    if (this.startIndex > 0) {
      this.startIndex -= this.imagesPerPage;
    }
  }

  isPrevDisabled(): boolean {
    return this.startIndex === 0;
  }

  isNextDisabled(): boolean {
    return this.startIndex + this.imagesPerPage >= this.getTotalImages();
  }
}
