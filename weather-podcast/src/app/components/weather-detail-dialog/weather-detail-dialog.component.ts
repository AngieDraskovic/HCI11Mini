import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Injectable, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-weather-detail-dialog',
  templateUrl: './weather-detail-dialog.component.html',
  styleUrls: ['./weather-detail-dialog.component.css']
})
export class WeatherDetailDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<WeatherDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { detail: any[] , noWarning: string}
  ) {}

  ngOnInit() {
    // this.data.detail.forEach(warning => warning.showMore = false);
  }
  
  setTrue(warning:any){
    console.log('setTrue function called');
    console.log(warning);
    warning.showMore = !warning.showMore;
  }
  
}
