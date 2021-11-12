import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrviLabosTableToolbarComponent } from './prvi-labos-table-toolbar.component';

describe('PrviLabosTableToolbarComponent', () => {
  let component: PrviLabosTableToolbarComponent;
  let fixture: ComponentFixture<PrviLabosTableToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrviLabosTableToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrviLabosTableToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
