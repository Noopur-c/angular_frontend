import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctor-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './doctor-login.component.html'
})
export class DoctorLoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  // Mock credentials
  mockDoctors = [
    { id: 1, name: 'Dr. Smith', email: 'smith@example.com', password: '12345' },
    { id: 2, name: 'Dr. Patel', email: 'patel@example.com', password: 'password' }
  ];

  constructor(private router: Router) {}

  login() {
    const doctor = this.mockDoctors.find(d => d.email === this.email && d.password === this.password);

    if (doctor) {
      sessionStorage.setItem('loggedInDoctor', JSON.stringify(doctor));
      this.router.navigate(['/doctor/dashboard']);
    } else {
      this.error = 'Invalid credentials. Please try again.';
    }
  }
}

