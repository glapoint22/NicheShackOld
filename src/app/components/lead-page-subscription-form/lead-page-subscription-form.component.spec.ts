import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadPageSubscriptionFormComponent } from './lead-page-subscription-form.component';

describe('LeadPageSubscriptionFormComponent', () => {
  let component: LeadPageSubscriptionFormComponent;
  let fixture: ComponentFixture<LeadPageSubscriptionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadPageSubscriptionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadPageSubscriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
