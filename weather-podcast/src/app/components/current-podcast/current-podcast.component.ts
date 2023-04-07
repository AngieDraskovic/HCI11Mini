import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { WeatherIconComponent } from '../weather-icon/weather-icon.component';

@Component({
  selector: 'app-current-podcast',
  templateUrl: './current-podcast.component.html',
  styleUrls: ['./current-podcast.component.css']
})


export class CurrentPodcastComponent {
  @Input() weatherData: any;
  @ViewChild(WeatherIconComponent) weatherComponent: any;
  weatherType:weatherType = weatherType.SUNNY;
  gotWeather:boolean = false;
  currentTemperature:string = '';
  feelsLike:string = '';
  wind_kph:string='';
  wind_dir:string = '';
  humidity:string = '';
  iconSrc:string = '';
  shortDescription:string = '';
  pressure_mb:string = '';
  visibility:string = '';
  uv:string = '';
  last_updated:string ='';



  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['weatherData']) {
      this.getWeatherType();
    }
  }
 
  getWeatherType(){
    console.log(this.weatherData);
    if(this.weatherData!= undefined){
      this.currentTemperature = this.weatherData.current.temp_c + "°C";
      this.iconSrc = this.weatherData.current.condition["icon"];
      this.gotWeather = true;
      this.shortDescription = this.weatherData.current.condition["text"];
      this.feelsLike = this.weatherData.current.feelslike_c + "°C"; 
      this.wind_dir = this.weatherData.current.wind_dir;
      this.wind_kph = this.weatherData.current.wind_kph;
      this.visibility = this.weatherData.current.vis_km;  
      this.last_updated = this.weatherData.current.last_updated;
      this.humidity = this.weatherData.current.humidity;
      this.pressure_mb = this.weatherData.current.pressure_mb;
      this.uv = this.weatherData.current.uv;

  }



  }}

export enum weatherType{
  CLOUDY,
  RAINY,      // MOZE I ZA NOC
  MOSTLY_CLOUDY,
  THUNDERSTORMS,
  THUNDERSTORMS_AND_RAIN,
  CLOUDY_NIGHT,
  SUNNY,
  CLEAR_NIGHT,
  WINDY_DAY, 
  SNOW
  }

