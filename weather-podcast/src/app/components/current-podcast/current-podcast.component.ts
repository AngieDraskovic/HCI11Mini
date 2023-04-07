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
  humidity:string = '';
  iconSrc:string = '';
  shortDescription:string = '';





  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['weatherData']) {
      this.getWeatherType();
    }
  }
 
  getWeatherType(){
    console.log(this.weatherData);
    if(this.weatherData!= undefined){
      this.currentTemperature = this.weatherData.current.temp_c;
      this.iconSrc = this.weatherData.current.condition["icon"];
      this.gotWeather = true;
      this.shortDescription = this.weatherData.current["text"];
    }
  }


}


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
