import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaGroupComponent } from './media-group.component';

describe('MediaGroupComponent', () => {
  let component: MediaGroupComponent;
  let fixture: ComponentFixture<MediaGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
