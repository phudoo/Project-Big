import { TestBed } from '@angular/core/testing';

import { VeService } from './ve.service';

describe('VeService', () => {
  let service: VeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
