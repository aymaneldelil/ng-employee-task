import { TestBed } from '@angular/core/testing';

import { SDummydatabasesService } from './s-dummydatabases.service';

describe('SDummydatabasesService', () => {
  let service: SDummydatabasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SDummydatabasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
