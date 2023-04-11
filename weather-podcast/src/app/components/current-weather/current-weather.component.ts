import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {
  @Input() weatherData: any;

  currentTemperature:string = '';
  wind_kph:string='';
  wind_dir:string = '';
  iconSrc:string = '';
  shortDescription:string = '';
  uv:string = '';
  lastUpdated:string ='';
  uvWarning:string = '';
  location:string = '';
  day:string = '';
  date:string = ''

  


  ngOnChanges(changes: SimpleChanges) {
    if (changes['weatherData']) {
      this.getWeatherType();
    }

  }

  getWeatherType(){
    if(this.weatherData!= undefined){
      this.currentTemperature = this.weatherData.current.temp_c;
      this.shortDescription = this.weatherData.current.condition["text"];
      this.date = this.weatherData.location.localtime.split(" ")[0];
      let day = this.getDayOfTheWeek(this.date);
      let month = this.getMonthOfYear(this.date)
      this.date = day + ", "+ month + " " + this.getPrettierFormat(this.date);
      this.location = this.weatherData.location.name + ", " + this.weatherData.location.country;
      this.iconSrc = this.weatherData.current.condition["icon"];

     // this.gotWeather = true;
     
      this.wind_dir = this.weatherData.current.wind_dir;
      this.wind_kph = this.weatherData.current.wind_kph;
      this.lastUpdated = this.weatherData.current.last_updated;
      this.uv = this.weatherData.current.uv;

    
     // this.day = this.getDayOfTheWeek(this.date);
    //this.date = this.getPrettierFormat(this.date);
      if (Number(this.uv) <= 2){
        this.uvWarning = "No protection needed."
      }else if (Number(this.uv) <= 7 && Number(this.uv) >= 3){
        this.uvWarning = "Sun protection needed. Seek shade."
      }else if (Number(this.uv) > 8){
        this.uvWarning = "Extra protection needed. Be careful outside."
      } 
  }
  }

  getDayOfTheWeek(dateStr:string){
    const date = new Date(dateStr);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
  }

  getMonthOfYear(dateStr: string) {
    const date = new Date(dateStr);
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthOfYear = monthsOfYear[date.getMonth()];
    return monthOfYear;
  }



  getPrettierFormat(dateStr:string){
    const day = dateStr.split("-")[2];
    return day;
  }

}
