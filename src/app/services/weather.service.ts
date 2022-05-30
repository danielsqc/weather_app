import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  private apiKey = '';
  
  getCelsius(temperature: number) {
    return parseFloat((temperature - 273.15).toFixed(1));
  }

  getCurrentWeather() {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?lat=43.6532&lon=-79.3832&appid=${this.apiKey}`);
  }
  
}
