import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { from } from 'rxjs';

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
  hourlyForecastData:any;
  userInput:string = '';
  chosedDate:string = '';

  constructor(private weatherService: WeatherService){}

  onInputReceived(data: any) {
    this.userInput = data;
    Promise.all([
      this.weatherService.getCurrentWeatherData(this.userInput).toPromise(),
      this.weatherService.getAstronomyTodayData(this.userInput).toPromise(),
      this.weatherService.getHighAndLow(this.userInput),
      this.weatherService.getWeatherWarnings(this.userInput),
      this.weatherService.getHourlyForecast(this.userInput).toPromise()
    ])
    .then(([weatherData, astroData, forecastData, warningData, hourlyForecastData]) => {
      this.weatherData = weatherData;
      this.astroData = astroData;
      this.forecastData = forecastData;
      this.warningData = warningData;
      this.hourlyForecastData = hourlyForecastData;

      
    })
    .catch(error => {
      console.error(error);
   });

  }


  // onCardItemClick(date: string) {
  //   console.log("caoooo angie");
  //   this.chosedDate = date;
  //   from(this.weatherService.getWeatherForecastDate(this.userInput, this.chosedDate))
  //     .subscribe(
  //       weatherData => {
  //         this.weatherData = weatherData;
  //         console.log(this.weatherData, "brorororo");
  //       },
  //       error => {
  //         console.error(error);
  //       }
  //     );
  // }
}
