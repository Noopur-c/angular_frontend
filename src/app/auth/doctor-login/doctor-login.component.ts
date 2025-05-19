import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-doctor-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';
  showPassword: boolean = false;
  rememberMe: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
  login(): void {
    this.authService.loginDoctor({ email: this.email, password: this.password }).subscribe({
      next: (res) => {
        sessionStorage.setItem('loggedInDoctor', JSON.stringify(res.doctor));
        localStorage.setItem('doctorToken', res.token); // Save token if needed
  
        if (this.rememberMe) {
          localStorage.setItem('rememberedDoctor', JSON.stringify(res.doctor));
        }
  
        this.router.navigate(['/doctor/home']);
      },
      error: (err) => {
        console.error('Login error:', err);
        this.error = err?.error?.error || 'Login failed. Please try again.';
      }
    });
  }
  
}
