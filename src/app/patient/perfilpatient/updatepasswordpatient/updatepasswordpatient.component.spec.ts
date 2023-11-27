import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepasswordpatientComponent } from './updatepasswordpatient.component';

describe('UpdatepasswordpatientComponent', () => {
  let component: UpdatepasswordpatientComponent;
  let fixture: ComponentFixture<UpdatepasswordpatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatepasswordpatientComponent]
    });
    fixture = TestBed.createComponent(UpdatepasswordpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
