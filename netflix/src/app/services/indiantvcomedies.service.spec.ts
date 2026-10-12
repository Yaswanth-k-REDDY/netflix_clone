import { TestBed } from '@angular/core/testing';

import { IndiantvcomediesService } from './indiantvcomedies.service';

describe('IndiantvcomediesService', () => {
  let service: IndiantvcomediesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndiantvcomediesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
