import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeorgeLibraryOneComponent } from './george-library-one.component';

describe('GeorgeLibraryOneComponent', () => {
  let component: GeorgeLibraryOneComponent;
  let fixture: ComponentFixture<GeorgeLibraryOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeorgeLibraryOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeorgeLibraryOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
