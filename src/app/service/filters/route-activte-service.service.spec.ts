import { TestBed } from '@angular/core/testing';

import { RouteActivteServiceService } from './route-activte-service.service';

describe('RouteActivteServiceService', () => {
  let service: RouteActivteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteActivteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
