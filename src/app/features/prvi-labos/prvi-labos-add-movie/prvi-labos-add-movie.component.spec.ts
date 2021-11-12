import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrviLabosAddMovieComponent } from './prvi-labos-add-movie.component';

describe('PrviLabosAddMovieComponent', () => {
  let component: PrviLabosAddMovieComponent;
  let fixture: ComponentFixture<PrviLabosAddMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrviLabosAddMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrviLabosAddMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
