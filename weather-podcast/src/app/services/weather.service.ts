import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'https://api.weatherapi.com/v1';
  private API_KEY = 'b1148619541c470697380838230504'

  constructor(private http: HttpClient) {}

  getWeatherData(location: string) {
    return this.http.get(`${this.apiUrl}/current.json?key=${this.API_KEY}&q=${location}`);
  }
}
