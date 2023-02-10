import { TestBed } from '@angular/core/testing';

import { ListEventService } from './list-event.service';

describe('ListEventService', () => {
  let service: ListEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
