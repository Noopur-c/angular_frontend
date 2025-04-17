import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './doctor-login.component.html'
})
export class DoctorLoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  login() {
    if (this.credentials.email === 'doctor@example.com' && this.credentials.password === 'pass123') {
      alert('Login successful!');
      this.router.navigate(['/doctor/home']);
    } else {
      alert('Invalid credentials!');
    }
  }
}
