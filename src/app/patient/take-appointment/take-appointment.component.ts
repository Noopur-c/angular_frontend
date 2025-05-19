import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-take-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './take-appointment.component.html',
  styleUrls: ['./take-appointment.component.css'],
})
export class TakeAppointmentComponent {
  form = {
    department: '',
    doctor: 0, // doctor ID
    date: '',
    time: ''
  };

  departments: string[] = [];
  doctors: { id: number; name: string }[] = [];
  availableTimes: string[] = [];

  constructor(private patientService: PatientService) {
    this.fetchDepartments();
  }

  fetchDepartments() {
    this.patientService.getDepartments().subscribe({
      next: (data) => {
        this.departments = data;
      },
      error: (err) => {
        console.error('Error fetching departments:', err);
      }
    });
  }

  onDepartmentChange() {
    this.doctors = [];
    this.availableTimes = [];
    this.form.doctor = 0;
    this.form.time = '';

    if (this.form.department) {
      this.patientService.getDoctorsByDepartment(this.form.department).subscribe({
        next: (data) => {
          this.doctors = data;
        },
        error: (err) => {
          console.error('Error fetching doctors:', err);
        }
      });
    }
  }

  onDoctorChange() {
    this.availableTimes = [];
    this.form.time = '';

    if (this.form.doctor && this.form.date) {
      this.fetchAvailableTimes();
    }
  }

  onDateChange() {
    if (this.form.doctor && this.form.date) {
      this.fetchAvailableTimes();
    }
  }

  fetchAvailableTimes() {
    this.patientService.getAvailableTimes(this.form.doctor, this.form.date).subscribe({
      next: (data) => {
        this.availableTimes = data;
      },
      error: (err) => {
        console.error('Error fetching time slots:', err);
      }
    });
  }

  submitForm() {
    if (this.form.department && this.form.doctor && this.form.date && this.form.time) {
      const appointmentData = {
        patientId: 1,  // fixed patient ID
        department: this.form.department,
        doctorId: this.form.doctor,
        date: this.form.date,
        time: this.form.time
      };

      this.patientService.bookAppointment(appointmentData).subscribe({
        next: (response) => {
          console.log('Appointment booked:', response);
          const doctorName = this.doctors.find(d => d.id === this.form.doctor)?.name || 'selected doctor';
          alert(`Appointment booked successfully for ${doctorName} on ${this.form.date} at ${this.form.time}`);
          this.resetForm();
        },
        error: (err) => {
          console.error('Error booking appointment:', err);
          alert('There was an error booking your appointment. Please try again.');
        }
      });
    } else {
      alert('Please fill all the fields.');
    }
  }

  resetForm() {
    this.form = {
      department: '',
      doctor: 0,
      date: '',
      time: ''
    };
    this.doctors = [];
    this.availableTimes = [];
  }
}