import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-patient-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
})
export class PatientHomeComponent {
  patient = {
    name: 'AAA BBB',
    email: 'aaa.bbb@example.com',
    phone: '+91-9876543210',
    gender: 'Male',
    age: 32,
    birthday: '1993-08-15',
    height: '175 cm',
    weight: '70 kg'
  };
}


