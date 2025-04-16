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
    { name: 'Patient 1', role: 'Patient', email: 'aaaPatient1@example.com' },
    { name: 'Dr. Doctor 1', role: 'Doctor', email: 'bbbDoctor1@hospital.com' },
    { name: 'Admin 1', role: 'Admin', email: 'admin1@hospital.com' }
  ];
}

