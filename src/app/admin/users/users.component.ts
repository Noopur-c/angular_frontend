import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


type UserRoles = 'Patient' | 'Doctor' | 'Staff';

interface Patient {
  id: number;
  name: string;
  email: string;
  phone: string;
  age: number;
  joiningDate: string;
  lastConsultation: string;
  paymentStatus: string;
  occupation: string;
}

interface Doctor {
  id: number;
  name: string;
  email: string;
  phone: string;
  age: number;
  joiningDate: string;
  experience: string;
  salary: number;
  department: string;
  role: string;
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
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
})

export class UsersComponent {
  selectedRole: UserRoles | 'All' = 'All';

  users: UsersByRole = {
    Patient: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        phone: '9876543210',
        age: 35,
        joiningDate: '2022-01-10',
        lastConsultation: '2023-08-05',
        paymentStatus: 'Done',
        occupation: 'Engineer',
      }
    ],
    Doctor: [
      {
        id: 2,
        name: 'Dr. Smith',
        email: 'smith@example.com',
        phone: '9123456780',
        age: 45,
        joiningDate: '2021-05-01',
        experience: '15 years',
        salary: 100000,
        department: 'Cardiology',
        role: 'Doctor',
      }
    ],
    Staff: [
      {
        id: 3,
        name: 'Jane Staff',
        email: 'jane.staff@example.com',
        phone: '9988776655',
        age: 30,
        joiningDate: '2020-09-15',
        experience: '5 years',
        salary: 40000,
        occupation: 'Receptionist',
        role: 'Staff',
      }
    ],
  };

  deleteUser(role: UserRoles, index: number): void {
    this.users[role].splice(index, 1);
  }
}
