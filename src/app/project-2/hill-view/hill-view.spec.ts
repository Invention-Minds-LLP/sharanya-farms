import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HillView } from './hill-view';

describe('HillView', () => {
  let component: HillView;
  let fixture: ComponentFixture<HillView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HillView],
    }).compileComponents();

    fixture = TestBed.createComponent(HillView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
