import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {WeatherService} from "../../services/weather.service";
import {DayInfo, ForecastDay} from "../../model/Forecast";
import {DatePipe} from "@angular/common";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AstroDialogComponent } from '../astro-dialog/astro-dialog.component';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {

  @Input() location:string = '';
  daysInfo: ForecastDay[] = [];
  private clickListener: any;
  sunrise:string = '';
  sunset:string = '';
  color:boolean = false;
  selectedDate: string | undefined;
  document: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['location']) {
      this.fetchForPast();
      this.fetchForFuture();
  }
  }




  
  constructor(private weatherService: WeatherService, private datePipe: DatePipe, private dialog:MatDialog) {
  }

  // ngOnInit(): void {
  //   this.fetchForPast();
  // }

  fetchForPast() {
    const pastDays = 7;
    const startDate = new Date();
    const endDate = new Date();
    startDate.setDate(startDate.getDate() - pastDays);
    endDate.setDate(endDate.getDate() - 1);

    this.weatherService.getForecastForTimeRange(this.location, startDate, endDate).subscribe(weatherInfo => {
      this.daysInfo = weatherInfo.forecast.forecastday;
    })
  }

  fetchForFuture() {
    const futureDays = 3;
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate());
    endDate.setDate(endDate.getDate() + futureDays);
    this.weatherService.getForecastForTimeRange(this.location, startDate, endDate).subscribe(weatherInfo => {
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

  
  onCardItemBlur() {
    this.selectedDate = " ";
  }

  onCardItemClick(date: string) {
    this.selectedDate = date;
    this.weatherService.getAstronomyRandomDateData(this.location, date).subscribe(
      wInfo => {
        const sunrise = wInfo.astronomy.astro['sunrise'];
        const sunset = wInfo.astronomy.astro['sunset'];
        const moonrise = wInfo.astronomy.astro['moonrise'];
        const moonset = wInfo.astronomy.astro['moonset'];
        const moonphase = wInfo.astronomy.astro['moon_phase']; 
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = { sunrise: sunrise, sunset: sunset, moonrise: moonrise, moonset:moonset, moonphase:moonphase };
        dialogConfig.minWidth = '40%';
        this.dialog.open(AstroDialogComponent, dialogConfig);
      },
      error => {
        console.error(error);
      }
    );
  }
}

