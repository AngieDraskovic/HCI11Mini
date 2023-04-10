import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Injectable, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-weather-detail-dialog',
  templateUrl: './weather-detail-dialog.component.html',
  styleUrls: ['./weather-detail-dialog.component.css']
})
export class WeatherDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<WeatherDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { detail: string }
  ) {}
}
