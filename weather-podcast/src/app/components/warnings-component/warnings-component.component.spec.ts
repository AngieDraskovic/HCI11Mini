import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningsComponentComponent } from './warnings-component.component';

describe('WarningsComponentComponent', () => {
  let component: WarningsComponentComponent;
  let fixture: ComponentFixture<WarningsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarningsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
