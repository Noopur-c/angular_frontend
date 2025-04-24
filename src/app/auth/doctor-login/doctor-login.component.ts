import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctor-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  // Mock credentials
  mockDoctors = [
    { id: 1, name: 'Dr. Aaa', email: 'aaa@example.com', password: '12345' },
    { id: 2, name: 'Dr. Patel', email: 'patel@example.com', password: 'password' }
  ];

  constructor(private router: Router) {}

  showPassword: boolean = false;
  rememberMe: boolean = false;
  
  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  login() {
    const doctor = this.mockDoctors.find(d => d.email === this.email && d.password === this.password);

    if (doctor) {
      sessionStorage.setItem('loggedInDoctor', JSON.stringify(doctor));
      this.router.navigate(['/doctor/home']);
    } else {
      this.error = 'Invalid credentials. Please try again.';
    }
  }
}

