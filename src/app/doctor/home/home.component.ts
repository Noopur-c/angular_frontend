import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-doctor-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
})
export class DoctorHomeComponent {
  doctor = {
    name: 'Dr. Doctor 1',
    email: 'bbbDoctor1@hospital.com',
    phone: '+91-9876543210',
    specialization: 'Cardiology',
    experience: '10 years'
  };
}

