import { TestBed } from '@angular/core/testing';

import { KdramasService } from './kdramas.service';

describe('KdramasService', () => {
  let service: KdramasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KdramasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
