
import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  temperature: {temp: string,
                feels_like: string} = {temp: 'Loading',
                                        feels_like: 'Loading'}

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather()
      .subscribe({
        next: (value: any) => {
          const { temp, feels_like } = value.main;
          this.temperature = {
            temp: this.weatherService.getCelsius(temp) + '',
            feels_like: this.weatherService.getCelsius(feels_like) + ''
          }
        }
      })
  }

}
