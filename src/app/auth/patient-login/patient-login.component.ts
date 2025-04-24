import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (this.email && this.password) {
      // mock login logic
      this.router.navigate(['/patient/home']);
    } else {
      alert('Please enter your credentials');
    }
  }
}

