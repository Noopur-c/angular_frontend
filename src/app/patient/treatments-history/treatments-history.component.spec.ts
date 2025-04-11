import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentsHistoryComponent } from './treatments-history.component';

describe('TreatmentsHistoryComponent', () => {
  let component: TreatmentsHistoryComponent;
  let fixture: ComponentFixture<TreatmentsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreatmentsHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatmentsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
