import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  selectedRole: 'Patient' | 'Doctor' | 'Staff' = 'Patient';

  newUser = {
    name: '',
    email: '',
    phone: '',
    age: 0,
    dob: '',
    departmentId: null,
    gender: '',
    joiningDate: '',
    lastConsultation: '',
    paymentStatus: '',
    occupation: '', // Used as: address for Patient, occupation for Staff
    experience: '',
    salary: 0,
    department: '',
    availability: '',
  };

  constructor(private api: AdminService) {}

  resetForm(): void {
    this.newUser = {
      name: '',
      email: '',
      phone: '',
      age: 0,
      dob: '',
      gender: '',
      joiningDate: '',
      lastConsultation: '',
      paymentStatus: '',
      occupation: '',
      experience: '',
      departmentId: null,
      salary: 0,
      department: '',
      availability: '',
    };
  }

  departments = [
  { id: 1, name: 'Cardiology' },
  { id: 2, name: 'Orthopedics' },
  { id: 3, name: 'Pediatrics' },
  { id: 4, name: 'Dermatology' },
  { id: 5, name: 'Neurology' },
  { id: 6, name: 'Gastroenterology' },
  { id: 7, name: 'Psychiatry' },
  { id: 8, name: 'Ophthalmology' },
  { id: 9, name: 'Gynecology' },
  { id: 10, name: 'ENT' }
];

  onSubmit(): void {
    const role = this.selectedRole.toLowerCase(); // Important for backend
    let userData: any = { role };

    if (role === 'patient') {
      userData = {
        role,
        name: this.newUser.name,
        dob: this.newUser.dob,
        gender: this.newUser.gender,
        email: this.newUser.email,
        phone: this.newUser.phone,
        address: this.newUser.occupation, // occupation used as address
      };
    } else if (role === 'doctor') {
      userData = {
        role,
        name: this.newUser.name,
        email: this.newUser.email,
        phone: this.newUser.phone,
        specialization: this.newUser.department,
        availability: this.newUser.availability,
        experience: this.newUser.experience,
        salary: this.newUser.salary,
      };
    } else if (role === 'staff') {
      userData = {
        role,
        name: this.newUser.name,
        email: this.newUser.email,
        phone: this.newUser.phone,
        age: this.newUser.age,
        joiningDate: this.newUser.joiningDate,
        experience: this.newUser.experience,
        salary: this.newUser.salary,
        occupation: this.newUser.occupation,
      };
    }

    this.api.addUser(userData).subscribe({
      next: (res) => {
        console.log(`${this.selectedRole} added`, res);
        alert(`${this.selectedRole} added successfully!`);
        this.resetForm();
      },
      error: (err) => {
        console.error(`Error adding ${this.selectedRole}`, err);
        alert(`Failed to add ${this.selectedRole}`);
      },
    });
  }
}

