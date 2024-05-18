import { TestBed } from '@angular/core/testing';

import { PatientServiceDocAppService } from './patient-service-doc-app.service';

describe('PatientServiceDocAppService', () => {
  let service: PatientServiceDocAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientServiceDocAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
