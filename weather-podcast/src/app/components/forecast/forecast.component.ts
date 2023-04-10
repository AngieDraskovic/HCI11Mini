import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {WeatherService} from "../../services/weather.service";
import {DayInfo, ForecastDay} from "../../model/Forecast";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  @Output() cardItemClick = new EventEmitter<string>();
  daysInfo: ForecastDay[] = [];

  constructor(private weatherService: WeatherService, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.fetchForPast();
  }

  fetchForPast() {
    const pastDays = 7;
    const startDate = new Date();
    const endDate = new Date();
    startDate.setDate(startDate.getDate() - pastDays);
    endDate.setDate(endDate.getDate() - 1);

    this.weatherService.getForecastForTimeRange("Belgrade", startDate, endDate).subscribe(weatherInfo => {
      this.daysInfo = weatherInfo.forecast.forecastday;
    })
  }

  fetchForFuture() {
    const futureDays = 3;
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate());
    endDate.setDate(endDate.getDate() + futureDays);
    this.weatherService.getForecastForTimeRange("Belgrade", startDate, endDate).subscribe(weatherInfo => {
      this.daysInfo = weatherInfo.forecast.forecastday;
    })
  }

  formatTemperature(temperature: number) {
    temperature = Math.ceil(temperature);
    return temperature.toString() + '°';
  }

  formatDate(date: string): string {
    const dateD = new Date(date);
    const formattedDate = this.datePipe.transform(dateD, 'd MMMM');
    if (formattedDate) {
      return formattedDate;
    } else {
      return "";
    }
  }

  getDayOfTheWeek(date: string): string {
    const dateD = new Date(date);
    const dayOfTheWeek = this.datePipe.transform(dateD, 'EEEE');
    if (dayOfTheWeek) {
      return dayOfTheWeek;
    } else {
      return "";
    }
  }

  onCardItemClick(date: string) {
    this.cardItemClick.emit(date);
  }
}
