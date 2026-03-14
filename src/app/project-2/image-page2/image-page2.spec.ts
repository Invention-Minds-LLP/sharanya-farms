import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePage2 } from './image-page2';

describe('ImagePage2', () => {
  let component: ImagePage2;
  let fixture: ComponentFixture<ImagePage2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagePage2],
    }).compileComponents();

    fixture = TestBed.createComponent(ImagePage2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
