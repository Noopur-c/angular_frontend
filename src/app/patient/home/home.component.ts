import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class PatientHomeComponent {
  patient = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91-9876543210',
    gender: 'Male'
  };
}
