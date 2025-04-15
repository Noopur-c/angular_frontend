import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users = [
    { name: 'John Doe', role: 'Patient', email: 'john@example.com' },
    { name: 'Dr. Nisha Sharma', role: 'Doctor', email: 'nisha@hospital.com' },
    { name: 'Admin 1', role: 'Admin', email: 'admin1@hospital.com' }
  ];
}

