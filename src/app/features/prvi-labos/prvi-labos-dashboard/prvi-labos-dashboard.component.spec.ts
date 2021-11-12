import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrviLabosDashboardComponent } from './prvi-labos-dashboard.component';

describe('PrviLabosDashboardComponent', () => {
  let component: PrviLabosDashboardComponent;
  let fixture: ComponentFixture<PrviLabosDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrviLabosDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrviLabosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
