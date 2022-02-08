import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeorgeLibraryTwoComponent } from './george-library-two.component';

describe('GeorgeLibraryTwoComponent', () => {
  let component: GeorgeLibraryTwoComponent;
  let fixture: ComponentFixture<GeorgeLibraryTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeorgeLibraryTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeorgeLibraryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
