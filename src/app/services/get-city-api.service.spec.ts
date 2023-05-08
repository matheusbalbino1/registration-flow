import { TestBed } from '@angular/core/testing';

import { GetCityApiService } from './get-city-api.service';

describe('GetCityApiService', () => {
  let service: GetCityApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCityApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
