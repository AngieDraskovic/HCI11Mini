import { Component, Input, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { WeatherDetailDialogComponent } from '../weather-detail-dialog/weather-detail-dialog.component';

@Component({
  selector: 'app-today-highlights',
  templateUrl: './today-highlights.component.html',
  styleUrls: ['./today-highlights.component.css']
})
export class TodayHighlightsComponent {
    @Input() weatherData: any;
    @Input() astroData:any;
    @Input() forecastData: any;
    @Input() warningData:any;

    feelsLike:string = '';
    humidity:string = '';
    pressure_mb:string = '';
    visibility:string = '';
    precip:string = '';
    highLow:string = '';
    uv:number = 0;

    sunrise:string = '';
    sunset:string = '';
    moonPhase:string = '';

    co:number = 0;
    no2:number = 0;
    o3:number = 0;
    so2:number = 0;
    air_index:number= 0;



    constructor(private dialog:MatDialog){}


    ngOnChanges(changes: SimpleChanges) {
      if (changes['weatherData']) {
        this.getWeatherType();
      }
      if (changes['astroData']) {
        this.getAstroData();
      }
      if (changes['forecastData']){
        this.getHighLow();
      }
      if (changes['warningData']){
        this.getWarnings();
      }
    }


    getWeatherType(){
      console.log(this.weatherData)
      if(this.weatherData!=undefined){
        this.feelsLike = this.weatherData.current.feelslike_c; 
        this.visibility = this.weatherData.current.vis_km;  
        this.humidity = this.weatherData.current.humidity;
        this.pressure_mb = this.weatherData.current.pressure_mb;
        this.precip = this.weatherData.current.precip_mm;
        this.uv = Number(this.weatherData.current.uv);


        this.co = this.weatherData.current.air_quality['co'].toFixed(1);
        this.no2 = this.weatherData.current.air_quality['no2'].toFixed(2);
        this.o3 = this.weatherData.current.air_quality['o3'].toFixed(2);
        this.so2 = this.weatherData.current.air_quality['so2'].toFixed(2);
        this.air_index = Number(this.weatherData.current.air_quality['us-epa-index']);
      }
  }


    getAstroData(){
      console.log(this.astroData);
      if(this.astroData!=undefined){
      this.sunrise = this.astroData.astronomy.astro['sunrise'];
      this.sunset = this.astroData.astronomy.astro['sunset'];
      this.moonPhase  = this.astroData.astronomy.astro['moon_phase'];
      }
    }

      
    getHighLow(){
      this.highLow = this.forecastData;
    }

    
    
    getWarnings(){
      console.log(this.warningData);
      if(this.warningData!=undefined){
        this.warningData = this.warningData.alert;
      }
    }

    
    openDetailDialog() {
      const dialogConfig = new MatDialogConfig();
      if(this.warningData.length == 0 ){
        dialogConfig.data = { noWarning: "No warnings for selected area."}
      }else{
        dialogConfig.data = { detail: this.warningData };
      }
      dialogConfig.minWidth = '30%'; // set minimum width to 50% of screen
    
      this.dialog.open(WeatherDetailDialogComponent, dialogConfig);
    }
}
