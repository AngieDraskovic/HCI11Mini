
import { Component, Input, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.css']
})
export class HourlyForecastComponent {
  @Input() hourlyForecastData: any;
  hourlyForecast: any;


  ngOnChanges(changes: SimpleChanges) {
    if (changes['hourlyForecastData']) {
      if(this.hourlyForecastData)
      {
        const allHours = this.hourlyForecastData.forecast.forecastday[0].hour;
        this.hourlyForecast = allHours.filter((_: any, index: number) => index % 3 === 0).slice(0, 7);


     
      }
    }
  }


  windDirectionToAngle(direction: string): number {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = directions.indexOf(direction);
    return index * 22.5;
  }

}


