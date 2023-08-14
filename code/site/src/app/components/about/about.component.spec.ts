import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('First name and middle initial should be "Chelsea"', () => {
    expect(component.firstAndMiddleInitial).toBe('Chelsea');
  });

  it('Last name should be "Swalec"', () => {
    expect(component.lastName).toBe('Swalec');
  });

  it('Email address should be "swalecchelsea@gmail.com"', () => {
    expect(component.email).toBe('swalecchelsea@gmail.com');
  });

  it('About is not empty', () => {
    expect(component.about).not.toBeUndefined();
    expect(component.about).not.toBeNull();
  })
});
