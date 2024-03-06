import { TestBed } from '@angular/core/testing';

import { ServiceTaxiService } from './service-taxi.service';

describe('ServiceTaxiService', () => {
  let service: ServiceTaxiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTaxiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
