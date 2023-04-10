import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable, throwError} from "rxjs";
import {City} from "../../model/City";
import {CurrentLocation} from "../../model/CurrentLocation";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private apiUrl = 'https://api.weatherapi.com/v1';
  private API_KEY = '7fbd719d147b4d468de150631230904'

  constructor(private http: HttpClient) {
  }

  getCurrentLocation(): Observable<City[]> {
    return this.http.get<City[]>(`${this.apiUrl}/search.json?key=${this.API_KEY}&q=auto:ip`);
  }

  getCitiesForSearchTerm(searchTerm: string): Observable<City[]> {
    return this.http.get<City[]>(`${this.apiUrl}/search.json?key=${this.API_KEY}&q=${searchTerm}`);
  }
}
