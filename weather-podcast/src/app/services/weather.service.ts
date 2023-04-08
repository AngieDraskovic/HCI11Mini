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
}
