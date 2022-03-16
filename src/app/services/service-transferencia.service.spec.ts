import { TestBed } from '@angular/core/testing';

import { ServiceTransferenciaService } from './service-transferencia.service';

describe('ServiceTransferenciaService', () => {
  let service: ServiceTransferenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTransferenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
