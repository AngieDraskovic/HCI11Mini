import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';


@Component({
  selector: 'app-current-podcast',
  templateUrl: './current-podcast.component.html',
  styleUrls: ['./current-podcast.component.css']
})


export class CurrentPodcastComponent {
  @Input() weatherData: any;
  @Input() forecastData: any;
  @Input() astroData:any;
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
  lastUpdated:string ='';
  highLow:string = '';
  uvWarning:string = '';
  location:string = '';


  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['weatherData']) {
      this.getWeatherType();
    }

    if (changes['forecastData']){
      this.getHighLow();
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
      this.lastUpdated = this.weatherData.current.last_updated;
      this.humidity = this.weatherData.current.humidity;
      this.pressure_mb = this.weatherData.current.pressure_mb;
      this.uv = this.weatherData.current.uv;
      this.location = this.weatherData.location.name + ", " + this.weatherData.location.country;
      if (Number(this.uv) <= 2){
        this.uvWarning = "No protection needed."
      }else if (Number(this.uv) <= 7 && Number(this.uv) >= 3){
        this.uvWarning = "Sun protection needed. Seek shade."
      }else if (Number(this.uv) > 8){
        this.uvWarning = "Extra protection needed. Be careful outside."
      } 
  }
  }

  getHighLow(){
    this.highLow = this.forecastData;
  }



}
