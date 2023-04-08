import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'https://api.weatherapi.com/v1';
  private API_KEY = 'b1148619541c470697380838230504'

  constructor(private http: HttpClient) {}

  getCurrentWeatherData(location: string) {
    return this.http.get(`${this.apiUrl}/current.json?key=${this.API_KEY}&q=${location}&units=metric`);
  }

  getAstronomyTodayData(location:string){
    return this.http.get(`${this.apiUrl}/current.json?key=${this.API_KEY}&q=${location}&dt=today`);
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

          return "H: " + maxTemp + "°C |" + "  L: " + minTemp + "°C";
        });
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