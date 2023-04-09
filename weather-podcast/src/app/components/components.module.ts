import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { SearchComponent } from './search/search.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { PageComponent } from './page/page.component';
import { CurrentPodcastComponent } from './current-podcast/current-podcast.component';
import { WarningsComponentComponent } from './warnings-component/warnings-component.component';
import { WeatherDetailDialogComponent } from './weather-detail-dialog/weather-detail-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    SearchComponent,
    PageComponent,
    CurrentPodcastComponent,
    WarningsComponentComponent,
    WeatherDetailDialogComponent,
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
   MatDialogModule,
   MatTooltipModule
  ],
  exports:[
    SearchComponent,
    PageComponent,
    CurrentPodcastComponent
  ]
})
export class ComponentsModule { }
