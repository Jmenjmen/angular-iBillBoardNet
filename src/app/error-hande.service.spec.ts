import { TestBed } from '@angular/core/testing';

import { ErrorHandeService } from './error-hande.service';

describe('ErrorHandeService', () => {
  let service: ErrorHandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorHandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
