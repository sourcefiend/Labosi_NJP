import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrviLabosMovieTableComponent } from './prvi-labos-movie-table.component';

describe('PrviLabosMovieTableComponent', () => {
  let component: PrviLabosMovieTableComponent;
  let fixture: ComponentFixture<PrviLabosMovieTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrviLabosMovieTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrviLabosMovieTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
