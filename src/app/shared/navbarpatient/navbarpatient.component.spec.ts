import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarpatientComponent } from './navbarpatient.component';

describe('NavbarpatientComponent', () => {
  let component: NavbarpatientComponent;
  let fixture: ComponentFixture<NavbarpatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarpatientComponent]
    });
    fixture = TestBed.createComponent(NavbarpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
