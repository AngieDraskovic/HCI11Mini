import { Component, Input } from '@angular/core';
import { weatherType } from '../current-podcast/current-podcast.component';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.css']
})
export class WeatherIconComponent {
  @Input() weatherType: weatherType = weatherType.SUNNY;

  get weatherTypeString(): string {
    return weatherType[this.weatherType];
  }
}
