import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-weather-slider',
  templateUrl: './weather-slider.component.html',
  styleUrls: ['./weather-slider.component.css']
})
export class WeatherSliderComponent {
  @Input() tenDaysData:any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tenDaysData']) {
      console.log("ng");
      console.log(this.tenDaysData);
      console.log("ng");

    }
  }



}
