import { TestBed } from '@angular/core/testing';

import { GlobalEndPointService } from './global-end-point.service';

describe('GlobalEndPointService', () => {
  let service: GlobalEndPointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalEndPointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
