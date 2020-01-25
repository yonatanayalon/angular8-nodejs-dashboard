import { TestBed } from '@angular/core/testing';

import { CustomerTableService } from './customer-table.service';

describe('CustomerTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerTableService = TestBed.get(CustomerTableService);
    expect(service).toBeTruthy();
  });
});
