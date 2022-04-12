import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenWeatherApiComponent } from './open-weather-api.component';

describe('OpenWeatherApiComponent', () => {
  let component: OpenWeatherApiComponent;
  let fixture: ComponentFixture<OpenWeatherApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenWeatherApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenWeatherApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
