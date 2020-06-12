import { TestBed } from '@angular/core/testing';

import { RubbersService } from './rubbers.service';

describe('RubbersService', () => {
  let service: RubbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RubbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
