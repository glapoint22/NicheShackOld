import { TestBed } from '@angular/core/testing';

import { QueryParametersService } from './query-parameters.service';

describe('QueryParametersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueryParametersService = TestBed.get(QueryParametersService);
    expect(service).toBeTruthy();
  });
});
