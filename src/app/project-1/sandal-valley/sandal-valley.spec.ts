import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandalValley } from './sandal-valley';

describe('SandalValley', () => {
  let component: SandalValley;
  let fixture: ComponentFixture<SandalValley>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SandalValley],
    }).compileComponents();

    fixture = TestBed.createComponent(SandalValley);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
