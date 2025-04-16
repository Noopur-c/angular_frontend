import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-take-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './take-appointment.component.html',
})
export class TakeAppointmentComponent {
  departments = ['Cardiology', 'Neurology', 'Orthopedics'];
  doctors: { [key: string]: string[] } = {
    Cardiology: ['Dr. Doctor 1', 'Dr. Doctor 2'],
    Neurology: ['Dr. Doctor 3'],
    Orthopedics: ['Dr. Doctor 4'],
  };

  form = {
    department: '',
    doctor: '',
    date: '',
  };

  get filteredDoctors(): string[] {
    return this.form.department ? this.doctors[this.form.department] : [];
  }

  submitForm() {
    if (this.form.department && this.form.doctor && this.form.date) {
      alert('Appointment Booked! ✅');
    }
  }
}
