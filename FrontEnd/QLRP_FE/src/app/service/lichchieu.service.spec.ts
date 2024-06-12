import { TestBed } from '@angular/core/testing';

import { LichchieuService } from './lichchieu.service';

describe('LichchieuService', () => {
  let service: LichchieuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LichchieuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
