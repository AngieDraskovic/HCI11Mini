import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailDialogComponent } from './weather-detail-dialog.component';

describe('WeatherDetailDialogComponent', () => {
  let component: WeatherDetailDialogComponent;
  let fixture: ComponentFixture<WeatherDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDetailDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
