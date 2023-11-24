import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchspecialistComponent } from './searchspecialist.component';

describe('SearchspecialistComponent', () => {
  let component: SearchspecialistComponent;
  let fixture: ComponentFixture<SearchspecialistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchspecialistComponent]
    });
    fixture = TestBed.createComponent(SearchspecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
