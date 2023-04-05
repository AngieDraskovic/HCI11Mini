import { Component } from '@angular/core'
import { WeatherService } from 'src/app/services/weather.service'
@Component({
  selector: 'app-main-podcast',
  templateUrl: './main-podcast.component.html',
  styleUrls: ['./main-podcast.component.css']
})
export class MainPodcastComponent {

  weatherData:any;
  constructor(private weatherService: WeatherService) { }


  getWeatherForTown(town: string) {

    this.weatherService.getWeatherData(town).subscribe((data) => {
      console.log(data); // display the weather data in the browser console for testing
      this.weatherData = data; // store the weather data in a property for use in the template
    });
  }
}
