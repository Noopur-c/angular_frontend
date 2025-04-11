import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    const loginData = this.loginForm.value;

    this.http.post('/api/auth/login', loginData).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);

        // Redirect based on role
        if (res.role === 'patient') this.router.navigate(['/patient/home']);
        else if (res.role === 'doctor') this.router.navigate(['/doctor/home']);
        else if (res.role === 'admin') this.router.navigate(['/admin/dashboard']);
      },
      error: (err) => {
        this.error = err.error.message || 'Login failed';
      }
    });
  }
}

