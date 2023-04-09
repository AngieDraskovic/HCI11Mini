import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  @ViewChild(SearchComponent) searchComponent: any;
  weatherData:any;
  forecastData:any;
  astroData:any;
  tenDaysData:any;
  input: string = '';
  onInputReceived(data: any) {
    this.input = data;
    Promise.all([
      this.weatherService.getCurrentWeatherData(this.input).toPromise(),
      this.weatherService.getAstronomyTodayData(this.input).toPromise(),
      this.weatherService.getHighAndLow(this.input),
      this.weatherService.getWeatherWarnings(this.input)
    ])
    .then(([weatherData, astroData, forecastData, warningData]) => {
      this.weatherData = weatherData;
      this.astroData = astroData;
      this.forecastData = forecastData;
      this.warningData = warningData;
      this.weatherService.getTenDaysData(this.input).toPromise()

    ])
    .then(([weatherData, astroData, forecastData, tenDaysData]) => {
      this.weatherData = weatherData;
      this.astroData = astroData;
      this.forecastData = forecastData;
      this.tenDaysData = tenDaysData;
    })
    .catch(error => {
      console.error(error); 
   });

  }

  constructor(private weatherService: WeatherService){}
  


}
