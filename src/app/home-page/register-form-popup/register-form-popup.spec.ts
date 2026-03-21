import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormPopup } from './register-form-popup';

describe('RegisterFormPopup', () => {
  let component: RegisterFormPopup;
  let fixture: ComponentFixture<RegisterFormPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFormPopup],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterFormPopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
