import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientpanelComponent } from './patientpanel.component';

describe('PatientpanelComponent', () => {
  let component: PatientpanelComponent;
  let fixture: ComponentFixture<PatientpanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientpanelComponent]
    });
    fixture = TestBed.createComponent(PatientpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
