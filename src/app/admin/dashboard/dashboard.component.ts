import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
})
export class AdminHomeComponent {
  admin = {
    name: 'Admin User',
    email: 'admin@hospital.com',
    role: 'Administrator',
  };
}

