import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorLoginComponent } from './doctor-login.component';

describe('DoctorRegisterComponent', () => {
  let component: DoctorLoginComponent;
  let fixture: ComponentFixture<DoctorLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
