import { TestBed } from '@angular/core/testing';

import { GeorgeLibraryOneService } from './george-library-one.service';

describe('GeorgeLibraryOneService', () => {
  let service: GeorgeLibraryOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeorgeLibraryOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
