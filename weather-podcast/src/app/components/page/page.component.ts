import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  @ViewChild(SearchComponent) searchComponent: any;


  weatherData: any;
  onWeatherDataReceived(data: any) {
    this.weatherData = data;

  
  }
  
}
