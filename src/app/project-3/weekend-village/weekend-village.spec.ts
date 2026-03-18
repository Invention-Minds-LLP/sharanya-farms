import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekendVillage } from './weekend-village';

describe('WeekendVillage', () => {
  let component: WeekendVillage;
  let fixture: ComponentFixture<WeekendVillage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekendVillage],
    }).compileComponents();

    fixture = TestBed.createComponent(WeekendVillage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
