import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePage3 } from './image-page3';

describe('ImagePage3', () => {
  let component: ImagePage3;
  let fixture: ComponentFixture<ImagePage3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagePage3],
    }).compileComponents();

    fixture = TestBed.createComponent(ImagePage3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
