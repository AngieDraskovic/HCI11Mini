import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPodcastComponent } from './current-podcast.component';

describe('CurrentPodcastComponent', () => {
  let component: CurrentPodcastComponent;
  let fixture: ComponentFixture<CurrentPodcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentPodcastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
