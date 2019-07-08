import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxPriceFilterOptionsComponent } from './checkbox-price-filter-options.component';

describe('CheckboxPriceFilterOptionsComponent', () => {
  let component: CheckboxPriceFilterOptionsComponent;
  let fixture: ComponentFixture<CheckboxPriceFilterOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxPriceFilterOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxPriceFilterOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
