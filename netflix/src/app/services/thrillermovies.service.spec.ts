import { TestBed } from '@angular/core/testing';

import { ThrillermoviesService } from './thrillermovies.service';

describe('ThrillermoviesService', () => {
  let service: ThrillermoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThrillermoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
