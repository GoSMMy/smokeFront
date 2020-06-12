import { TestBed } from '@angular/core/testing';

import { LiquidsService } from './liquids.service';

describe('LiquidsService', () => {
  let service: LiquidsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiquidsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
