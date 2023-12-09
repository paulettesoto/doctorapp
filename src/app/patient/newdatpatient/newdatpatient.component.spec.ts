import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdatpatientComponent } from './newdatpatient.component';

describe('NewdatpatientComponent', () => {
  let component: NewdatpatientComponent;
  let fixture: ComponentFixture<NewdatpatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewdatpatientComponent]
    });
    fixture = TestBed.createComponent(NewdatpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
