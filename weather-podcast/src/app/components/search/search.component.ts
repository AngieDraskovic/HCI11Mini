import {HttpClient} from '@angular/common/http';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {WeatherService} from 'src/app/services/weather.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  cityControl = new FormControl();
  cities: string[] = ["Novi Sad", "Beograd", "Subotica"];
  filteredCities: Observable<string[]> = new Observable<string[]>();
  weatherData: any;
  astroData: any;
  forecastData: any;
  @Output() weatherDataEmitter = new EventEmitter<any>();
  @Output() astroDataEmitter = new EventEmitter<any>();
  @Output() forecastDataEmitter = new EventEmitter<any>();
  @Output() inputEmitter = new EventEmitter<any>();


  constructor(private http: HttpClient, private weatherService: WeatherService) {}

  ngOnInit() {
    this.filteredCities = this.cityControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    // this.getCities();
    // this.cityControl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map((value: string) => this.filterCities(value))
    //   )
    //   .subscribe(cities => {
    //     this.filteredCities = cities;
    //   });
  }


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

  // search() {
  //   this.inputEmitter.emit(this.userInput);
  //
  // }

  private _filter(value: string): string[] {
    if (value.length == 0) {
      return [];
    }

    return this.cities.filter(cities => cities.toLowerCase().includes(value.toLowerCase()));
  }

  resetAutocomplete() {
    this.cityControl.setValue('');
  }
}
