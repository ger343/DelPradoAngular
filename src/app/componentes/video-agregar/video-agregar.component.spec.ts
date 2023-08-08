import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAgregarComponent } from './video-agregar.component';

describe('VideoAgregarComponent', () => {
  let component: VideoAgregarComponent;
  let fixture: ComponentFixture<VideoAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoAgregarComponent]
    });
    fixture = TestBed.createComponent(VideoAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
