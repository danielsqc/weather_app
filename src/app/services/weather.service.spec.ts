import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [WeatherService, { provide: HttpClient, useValue: httpClient }],
    })
    .compileComponents();
  });

  it('should get celsius from kelvin', () => {
    service = TestBed.inject(WeatherService);
    let actualInKelvin = 300;
    let expectInCelsius = 26.9;
    expect(service.getCelsius(actualInKelvin))
        .toBe(expectInCelsius);
  });

  it('should call httpClient.get only once', () => {
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpy.get.and.returnValue({ status: 200, data: {} });
    TestBed.overrideProvider(HttpClient, {useValue: httpClientSpy});
    service = TestBed.inject(WeatherService);
    service.getCurrentWeather();
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });

});
