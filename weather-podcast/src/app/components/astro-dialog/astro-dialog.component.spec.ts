import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroDialogComponent } from './astro-dialog.component';

describe('AstroDialogComponent', () => {
  let component: AstroDialogComponent;
  let fixture: ComponentFixture<AstroDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstroDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstroDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
