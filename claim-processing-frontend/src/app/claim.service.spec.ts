import { TestBed } from '@angular/core/testing';

import { ClaimService } from './claim.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ClaimService', () => {
  let service: ClaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers:[provideHttpClient(),provideHttpClientTesting()]
  });
    service = TestBed.inject(ClaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
