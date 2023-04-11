import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Forecast, WeatherInfo} from "../model/Forecast";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'https://api.weatherapi.com/v1';
  private API_KEY = 'b1148619541c470697380838230504'

  constructor(private http: HttpClient) {}

  getCurrentWeatherData(location: string) {
    return this.http.get(`${this.apiUrl}/current.json?key=${this.API_KEY}&q=${location}&units=metric&aqi=yes`);
  }

  getAstronomyTodayData(location:string){
    return this.http.get(`${this.apiUrl}/astronomy.json?key=${this.API_KEY}&q=${location}}&dt=today`);
  }

  getAstronomyRandomDateData(location:string, date:string):Observable<WInfo>{
    return this.http.get<WInfo>(`${this.apiUrl}/astronomy.json?key=${this.API_KEY}&q=${location}}&dt=${date}`);
  }

  getHourlyForecast(location: string){
    const endpoint = `${this.apiUrl}/forecast.json?key=${this.API_KEY}&q=${location}&days=1&hours=7`;
    return this.http.get(endpoint);
  }


  getWeatherForecastDate(location: string, date: string) {
    const formattedDate = new Date(date).toISOString().slice(0, 10);
    const url = `https://api.weatherapi.com/v1/history.json?key=${this.API_KEY}&q=${location}&dt=${formattedDate}&hour=0`;
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data.forecast.forecastday[0].day;
      });
  }
  

  

  getHighAndLow(location:string){
    return fetch(`https://api.weatherapi.com/v1/forecast.json?key=${this.API_KEY}&q=${location}&days=1&aqi=no&alerts=no`)
        .then(response => response.json())
        .then(data => {
          let maxTemp = -Infinity;
          let minTemp = Infinity;
          data.forecast.forecastday[0].hour.forEach((hour: { temp_c: number; }) => {
            if (hour.temp_c > maxTemp) {
              maxTemp = hour.temp_c;
            }
            if (hour.temp_c < minTemp) {
              minTemp = hour.temp_c;
            }
          });
          console.log(`Max temp: ${maxTemp}°C`);
          console.log(`Min temp: ${minTemp}°C`);

          return maxTemp + "°c | " + minTemp + "°c";
        });
  }

  getWeatherWarnings(location:string){
    return fetch(`https://api.weatherapi.com/v1/forecast.json?key=${this.API_KEY}&q=${location}&days=1&aqi=no&alerts=yes`)
        .then(response => response.json())
        .then(data => {
          return data.alerts;
        });
  }


  getForecastForTimeRange(location: string, startDate: Date, endDate: Date):Observable<WeatherInfo> {
    const formattedStartDate = this.formatDate(startDate);
    const formattedEndDate = this.formatDate(endDate);
    return this.http.get<WeatherInfo>(`${this.apiUrl}/history.json?key=${this.API_KEY}&q=${location}&dt=${formattedStartDate}&end_dt=${formattedEndDate}&units=metric`);
  }


  getTenDaysData(location: string) {
    const pastDays = 7;
    const futureDays = 4;
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - pastDays);
    endDate.setDate(endDate.getDate() + futureDays);
    const formattedStartDate = this.formatDate(startDate);
    const formattedEndDate = this.formatDate(endDate);
    return this.http.get(`${this.apiUrl}/history.json?key=${this.API_KEY}&q=${location}&dt=${formattedStartDate}&end_dt=${formattedEndDate}&units=metric`);
  }

  private formatDate(date: Date) {
    const year = date.getFullYear();
    const month = this.padZero(date.getMonth() + 1);
    const day = this.padZero(date.getDate());
    return `${year}-${month}-${day}`;
  }

  private padZero(num: number) {
    return num.toString().padStart(2, '0');
  }


}

interface WInfo {
  astronomy: any;
}