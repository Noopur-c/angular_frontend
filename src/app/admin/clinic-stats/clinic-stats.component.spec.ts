import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicStatsComponent } from './clinic-stats.component';

describe('ClinicStatsComponent', () => {
  let component: ClinicStatsComponent;
  let fixture: ComponentFixture<ClinicStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
