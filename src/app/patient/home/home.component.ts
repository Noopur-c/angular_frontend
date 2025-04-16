import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-patient-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
})
export class PatientHomeComponent {
  patient = {
    name: 'Patient 1',
    email: 'aaa.patient.1@example.com',
    phone: '+91-9876543210',
    gender: 'Male'
  };
}

