import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPodcastComponent } from './main-podcast.component';

describe('MainPodcastComponent', () => {
  let component: MainPodcastComponent;
  let fixture: ComponentFixture<MainPodcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPodcastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
