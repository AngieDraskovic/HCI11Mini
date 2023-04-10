import { NgModule } from '@angular/core';
import {CommonModule, DatePipe, NgOptimizedImage} from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HeaderComponent } from './header/header.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { TodayHighlightsComponent } from './today-highlights/today-highlights.component';
import { HourlyForecastComponent } from './hourly-forecast/hourly-forecast.component';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { WeatherDetailDialogComponent } from './weather-detail-dialog/weather-detail-dialog.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatChipsModule} from "@angular/material/chips";
@NgModule({
  declarations: [
    HeaderComponent,
    CurrentWeatherComponent,
    ForecastComponent,
    TodayHighlightsComponent,
    HourlyForecastComponent,
    FooterComponent,
    WeatherDetailDialogComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatListModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatTabsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatAutocompleteModule,
    NgOptimizedImage,
    MatDialogModule,
    MatButtonToggleModule,
    MatChipsModule
  ],
  providers: [
    DatePipe,
  ],
  exports: [
    HeaderComponent,
    CurrentWeatherComponent,
    ForecastComponent,
    TodayHighlightsComponent,
    HourlyForecastComponent,
    FooterComponent,
    WeatherDetailDialogComponent
  ]
})
export class ComponentsModule { }
