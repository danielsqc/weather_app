import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  // private apiKey = 'fd8189e62f5b5ba6f7e7006d89d68373';
  private apiKey = '7717925a5557b50ed7ab69a87e2f8ad3';
  
  getCelsius(temperature: number) {
    return parseFloat((temperature - 273.15).toFixed(1))

  }
  getCurrentWeather() {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?lat=43.6532&lon=-79.3832&appid=${this.apiKey}`)
  }
}