import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HacercomentComponent } from './hacercoment.component';

describe('HacercomentComponent', () => {
  let component: HacercomentComponent;
  let fixture: ComponentFixture<HacercomentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HacercomentComponent]
    });
    fixture = TestBed.createComponent(HacercomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
