import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { WeatherService } from 'src/app/services/weather.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  userInput:string = '';
  cities: string[] = [];
  filteredCities: string[] = [];
  cityControl = new FormControl();
  weatherData:any;
  @Output() weatherDataEmitter = new EventEmitter<any>();


  constructor(private http: HttpClient, private weatherService: WeatherService){}

  // ngOnInit(){
  //   this.getCities();
  //   this.cityControl.valueChanges
  //     .pipe(
  //       startWith(''),
  //       map((value: string) => this.filterCities(value))
  //     )
  //     .subscribe(cities => {
  //       this.filteredCities = cities;
  //     });
  // }


  filterCities(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.cities.filter(city => city.toLowerCase().includes(filterValue));
  }

//   getCities() {
//   const apiUrl = 'https://cors-anywhere.herokuapp.com/https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
 
// // Make API call to GeoDB Cities API through a proxy server
//    this.http.get<any>(apiUrl, { headers: { 'X-Requested-With': 'XMLHttpRequest', 'X-RapidAPI-Key': 'your-rapidapi-key' } }).subscribe((data) => {
//     this.cities = data.cities;
// });

// }

  search(){
    // console.log(this.cities);
    this.weatherService.getCurrentWeatherData(this.userInput).subscribe((data) => {
      console.log(data); // display the weather data in the browser console for testing
      this.weatherData = data; 
      this.weatherDataEmitter.emit(this.weatherData);
    });
  }
}