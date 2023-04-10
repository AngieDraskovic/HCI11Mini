import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {City} from "../../model/City";
import {CityService} from "../../services/city/city.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isActive: boolean = false;
  searchResultActive: boolean = true;
  searchTimeout: any = null;
  isSearching: boolean = false;
  isEmptySearch: boolean = false;
  searchTimeoutDuration: number = 200;

  cities: City[] = [
    {id: "2830682", name: 'Belgrade', region: 'Central Serbia'},
    {id: "2618724", name: 'New York', region: 'New York'},
    {id: "2801268", name: 'London', region: 'City of London, Greater London'},
    {id: "3125553", name: 'Tokyo', region: 'Tokyo'},
    {id: "803267", name: 'Paris', region: 'Ile-de-France'},
    {id: "136022", name: 'Sydney', region: 'New South Wales'}
  ];
  fetchedCities: City[] = this.cities;

  @Output() inputEmitter = new EventEmitter<any>();


  constructor(private http: HttpClient, private cityService: CityService) {
  }

  ngOnInit(): void {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    this.cityService.getCurrentLocation().subscribe(city => {
      this.chooseCity(city[0].name);
    });
  }

  toggleSearch() {
    this.isActive = !this.isActive;
  }

  onInputChange(value: string) {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    if (!value) {
      this.isSearching = false;
      this.isEmptySearch = false;
      this.fetchedCities = this.cities;
    } else {
      this.isSearching = true;
    }

    if (value) {
      this.searchTimeout = setTimeout(() => {
        this.isSearching = false;

        this.cityService.getCitiesForSearchTerm(value).subscribe(foundCities => {
          this.isEmptySearch = foundCities.length == 0;
          this.fetchedCities = foundCities;
        });
      }, this.searchTimeoutDuration)
    }
  }

  chooseCity(name: string) {
    this.inputEmitter.emit(name);
  }
}
