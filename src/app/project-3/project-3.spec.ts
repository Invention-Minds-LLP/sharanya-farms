import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project3 } from './project-3';

describe('Project3', () => {
  let component: Project3;
  let fixture: ComponentFixture<Project3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Project3],
    }).compileComponents();

    fixture = TestBed.createComponent(Project3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
