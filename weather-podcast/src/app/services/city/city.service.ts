import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, map, Observable, tap, throwError} from "rxjs";
import {City} from "../../model/City";
import {IpAddress} from "../../model/IpAddress";
import {CurrentLocation} from "../../model/CurrentLocation";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private apiUrl = 'https://api.weatherapi.com/v1';
  private API_KEY = '7fbd719d147b4d468de150631230904'

  constructor(private http: HttpClient) {
  }

  getCurrentLocation(): Observable<CurrentLocation> {
    return this.http.get<CurrentLocation>(`${this.apiUrl}/ip.json?key=${this.API_KEY}&q=auto:ip`);
  }

  getCitiesForSearchTerm(searchTerm: string): Observable<City[]> {
    return this.http.get<City[]>(`${this.apiUrl}/search.json?key=${this.API_KEY}&q=${searchTerm}`);
  }
}
