import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdminService } from '../../services/admin.service';

type UserRoles = 'Patient' | 'Doctor' | 'Staff';

interface Patient {
  id: number;
  name: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  address: string;
}

interface Doctor {
  id: number;
  name: string;
  email: string;
  phone: string;
  specialization: string;
  experience: string;
  salary: number;
  department: string;
  role: string;
  availability?: { day: string, times: string[] }[];
}

interface Staff {
  id: number;
  name: string;
  email: string;
  phone: string;
  age: number;
  joiningDate: string;
  experience: string;
  salary: number;
  occupation: string;
  role: string;
}

type UsersByRole = {
  Patient: Patient[];
  Doctor: Doctor[];
  Staff: Staff[];
};

@Component({
  selector: 'app-manage-users',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  selectedRole: UserRoles | 'All' = 'All';

  users: UsersByRole = {
    Patient: [],
    Doctor: [],
    Staff: [],
  };

  constructor(
  private adminService: AdminService,
  private http: HttpClient
) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.http.get<any>('http://localhost:3000/api/admins/users')  // Adjust the base URL as needed
      .subscribe({
        next: (data) => {
          this.users.Patient = data.patients || [];
          this.users.Doctor = data.doctors || [];

          // Mock staff data
          this.users.Staff = [
            {
              id: 1,
              name: 'Alice Staff',
              email: 'alice@clinic.com',
              phone: '9876543210',
              age: 32,
              joiningDate: '2022-01-15',
              experience: '5 years',
              salary: 35000,
              occupation: 'Receptionist',
              role: 'Staff',
            },
            {
              id: 2,
              name: 'Bob Staff',
              email: 'bob@clinic.com',
              phone: '9123456780',
              age: 29,
              joiningDate: '2021-07-10',
              experience: '3 years',
              salary: 30000,
              occupation: 'Accountant',
              role: 'Staff',
            },
          ];

          localStorage.setItem('users', JSON.stringify(this.users));
        },
        error: (err) => {
          console.error('Error fetching users:', err);
          this.loadUsersFromLocalStorage();  // Fallback
        }
      });
  }

  calculateAge(dob: string): number {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

  loadUsersFromLocalStorage(): void {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '{}');
    this.users.Patient = storedUsers.Patient || [];
    this.users.Doctor = storedUsers.Doctor || [];
    this.users.Staff = storedUsers.Staff || [];
  }

deleteUser(role: UserRoles, userId: string, index: number): void {
  this.adminService.deleteUser(userId.toString(), role).subscribe({
    next: () => {
      this.users[role].splice(index, 1);
      const storedUsers = JSON.parse(localStorage.getItem('users') || '{}');
      storedUsers[role] = this.users[role];
      localStorage.setItem('users', JSON.stringify(storedUsers));
      alert('User deleted successfully');
    },
    error: (err) => {
      console.error('Delete failed', err);
      alert('Failed to delete user');
    }
  });
}

}