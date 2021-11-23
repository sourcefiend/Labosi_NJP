import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugiLabosDashboardComponent } from './drugi-labos-dashboard.component';

describe('DrugiLabosDashboardComponent', () => {
  let component: DrugiLabosDashboardComponent;
  let fixture: ComponentFixture<DrugiLabosDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugiLabosDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugiLabosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
