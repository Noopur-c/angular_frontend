import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient-register.component.html'
})
export class PatientRegisterComponent {
  patient = {
    name: '',
    email: '',
    phone: '',
    password: '',
    gender: ''
  };

  constructor(private router: Router) {}

  register() {
    if (this.patient.name && this.patient.email && this.patient.phone && this.patient.password && this.patient.gender) {
      // mock registration logic
      this.router.navigate(['/patient/home']);
    } else {
      alert('Please fill all fields');
    }
  }
}

