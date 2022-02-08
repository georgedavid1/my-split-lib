import { TestBed } from '@angular/core/testing';

import { GeorgeLibraryTwoService } from './george-library-two.service';

describe('GeorgeLibraryTwoService', () => {
  let service: GeorgeLibraryTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeorgeLibraryTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
