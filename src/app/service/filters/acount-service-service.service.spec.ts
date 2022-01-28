import { TestBed } from '@angular/core/testing';

import { AcountServiceServiceService } from './acount-service-service.service';

describe('AcountServiceServiceService', () => {
  let service: AcountServiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcountServiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
