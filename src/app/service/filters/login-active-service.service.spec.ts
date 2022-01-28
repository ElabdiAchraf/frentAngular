import { TestBed } from '@angular/core/testing';

import { LoginActiveServiceService } from './login-active-service.service';

describe('LoginActiveServiceService', () => {
  let service: LoginActiveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginActiveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
