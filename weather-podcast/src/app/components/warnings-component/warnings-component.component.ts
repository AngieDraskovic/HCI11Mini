import { Component, Input, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WeatherDetailDialogComponent } from '../weather-detail-dialog/weather-detail-dialog.component';

@Component({
  selector: 'app-warnings-component',
  templateUrl: './warnings-component.component.html',
  styleUrls: ['./warnings-component.component.css']
})
export class WarningsComponentComponent {
  @Input() alertData:any;
  warnings: [] = [];
  empty:boolean = true;


  constructor(private dialog:MatDialog){}


  ngOnChanges(changes: SimpleChanges) {
    if (changes['alertData']) {
      this.getWarningData();
    }
   
  }

  getWarningData(){
    if(this.alertData!=undefined){
      this.warnings = this.alertData.alert;
      console.log(this.warnings, 'heyooo');
      if(this.warnings.length > 0){
        this.empty = false;
      }else{
        this.empty = true;
      }
  }
  } 

  openDetailDialog(warning: any) {
    const dialogRef = this.dialog.open(WeatherDetailDialogComponent, {
      data: { detail: warning['desc'] }
    });
  }
}
