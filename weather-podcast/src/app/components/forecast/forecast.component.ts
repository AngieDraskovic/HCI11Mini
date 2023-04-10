import { Component, Input, SimpleChanges } from '@angular/core';




interface WeatherDay {
  date: string;
  maxTemp: number;
  minTemp: number;
  conditionIcon: string;
  conditionText: string;
}


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  @Input() tenDaysData: any;

  weatherData: WeatherDay[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tenDaysData']) {

      

      const tenDays = this.tenDaysData.forecast.forecastday.slice(0, 10);
      this.weatherData = tenDays.map((day: any) => ({
        date: day.date,
        maxTemp: day.day.maxtemp_c,
        minTemp: day.day.mintemp_c,
        conditionIcon: day.day.condition.icon,
        conditionText: day.day.condition.text
      }));
    }
  }

}
