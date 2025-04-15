import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
})
export class AdminHomeComponent {
  admin = {
    name: 'Admin User',
    email: 'admin@hospital.com',
    role: 'Administrator',
  };
}

