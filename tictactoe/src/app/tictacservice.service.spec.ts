import { TestBed } from '@angular/core/testing';

import { TictacserviceService } from './tictacservice.service';

describe('TictacserviceService', () => {
  let service: TictacserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TictacserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
