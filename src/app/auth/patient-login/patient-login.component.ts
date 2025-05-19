import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-patient-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent {
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
    this.authService.loginPatient({ email: this.email, password: this.password }).subscribe({
      next: (res) => {
        sessionStorage.setItem('loggedInPatient', JSON.stringify(res.patient));
        localStorage.setItem('patientToken', res.token);

        if (this.rememberMe) {
          localStorage.setItem('rememberedPatient', JSON.stringify(res.patient));
        }

        this.router.navigate(['/patient/home']);
      },
      error: (err) => {
        console.error('Login error:', err);
        this.error = err?.error?.error || 'Login failed. Please try again.';
      }
    });
  }
}