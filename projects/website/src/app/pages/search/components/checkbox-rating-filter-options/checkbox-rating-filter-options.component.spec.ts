import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxRatingFilterOptionsComponent } from './checkbox-rating-filter-options.component';

describe('CheckboxRatingFilterOptionsComponent', () => {
  let component: CheckboxRatingFilterOptionsComponent;
  let fixture: ComponentFixture<CheckboxRatingFilterOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxRatingFilterOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxRatingFilterOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
