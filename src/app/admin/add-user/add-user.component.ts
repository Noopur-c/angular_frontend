import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './add-user.component.html',
})
export class AddUserComponent {
  selectedRole: 'Patient' | 'Doctor' | 'Staff' = 'Patient'; // Example role
  newUser = {
    name: '',
    email: '',
    phone: '',
    age: 0,
    joiningDate: '',
    lastConsultation: '',
    paymentStatus: '',
    occupation: '',
    experience: '',
    salary: 0,
    department: '',
    role: this.selectedRole,
  };

  onSubmit() {
    console.log(this.newUser);
    // Here you can add logic to save the new user
  }
}
