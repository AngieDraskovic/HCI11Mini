import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-podcast';
  weatherData:any;
  astroData:any;
  forecastData:any;
  warningData:any;
  userInput:string = '';


  constructor(private weatherService: WeatherService){}

  onInputReceived(data: any) {
    this.userInput = data;
    Promise.all([
      this.weatherService.getCurrentWeatherData(this.userInput).toPromise(),
      this.weatherService.getAstronomyTodayData(this.userInput).toPromise(),
      this.weatherService.getHighAndLow(this.userInput),
      this.weatherService.getWeatherWarnings(this.userInput)
    ])
    .then(([weatherData, astroData, forecastData, warningData]) => {
      this.weatherData = weatherData;
      this.astroData = astroData;
      this.forecastData = forecastData;
      this.warningData = warningData;
    })
    .catch(error => {
      console.error(error); 
   });

  }
}
