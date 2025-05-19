import { Component } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface AppointmentInfo {
  appointmentId: number;
  doctorId: number;
  doctorName: string;
  appointmentDate: string;
  patientId: number;
}

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  patientName: string = '';
  selectedAppointmentId: number | null = null;
  appointments: AppointmentInfo[] = [];
  feedback: string = '';
  rating: number = 5; // Set default rating to 5
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private patientService: PatientService) {}

  fetchAppointmentsByPatientName(): void {
    this.errorMessage = '';
    this.successMessage = '';
    this.appointments = [];
    this.selectedAppointmentId = null;
    this.feedback = '';

    if (!this.patientName.trim()) {
      this.errorMessage = 'Please enter a patient name.';
      return;
    }

    this.patientService.getAppointmentsByPatientName(this.patientName).subscribe({
      next: (response) => {
        // Map appointments to desired structure
        this.appointments = response.appointments.map((app: any) => ({
          appointmentId: app.id,
          doctorId: app.Doctor.id,
          doctorName: app.Doctor.name,
          patientId: app.Patient.id, 
          appointmentDate: app.appointmentDate,
        }));
        this.errorMessage = '';
      },
      error: (err) => {
        console.error('Error fetching appointments:', err);
        this.errorMessage = 'Failed to fetch appointments. Please try again later.';
      }
    });
  }

  submitFeedback(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.selectedAppointmentId) {
      this.errorMessage = 'Please select an appointment.';
      return;
    }

    if (!this.feedback.trim()) {
      this.errorMessage = 'Please provide some feedback.';
      return;
    }

 const selected = this.appointments.find(a => a.appointmentId === Number(this.selectedAppointmentId));

if (!selected) {
  this.errorMessage = 'Selected appointment not found.';
  return;
}

    const feedbackData = {
  patientId: selected.patientId,
  doctorId: selected.doctorId,
  appointmentId: selected.appointmentId,
  message: this.feedback,
  rating: this.rating || null,
};

    this.patientService.submitFeedback(feedbackData).subscribe({
      next: () => {
        this.successMessage = 'Thank you for your feedback!';
        this.feedback = '';
        this.errorMessage = '';
      },
      error: (err) => {
        console.error('Error submitting feedback:', err);
        this.errorMessage = 'Failed to submit feedback. Please try again later.';
      }
    });
  }
}
