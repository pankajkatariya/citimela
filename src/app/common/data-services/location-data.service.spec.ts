import { TestBed, inject } from '@angular/core/testing';

import { LocationDataService } from './location-data.service';

describe('LocationDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationDataService]
    });
  });

  it('should be created', inject([LocationDataService], (service: LocationDataService) => {
    expect(service).toBeTruthy();
  }));
});
