import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Injectable, Inject } from '@angular/core';


@Component({
  selector: 'app-astro-dialog',
  templateUrl: './astro-dialog.component.html',
  styleUrls: ['./astro-dialog.component.css']
})
export class AstroDialogComponent {
  constructor(public dialogRef: MatDialogRef<AstroDialogComponent>,
   @Inject(MAT_DIALOG_DATA) public data: {sunrise:string, sunset:string, moonrise:string, moonset:string, moonphase:string}
   ) {}

}
