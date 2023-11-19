import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageprincipalComponent } from './pageprincipal.component';

describe('PageprincipalComponent', () => {
  let component: PageprincipalComponent;
  let fixture: ComponentFixture<PageprincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageprincipalComponent]
    });
    fixture = TestBed.createComponent(PageprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
