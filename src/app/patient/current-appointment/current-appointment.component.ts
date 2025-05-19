import { Component } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-current-appointment',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './current-appointment.component.html',
  styleUrls: ['./current-appointment.component.css']
})
export class CurrentAppointmentComponent {
  appointments: any[] = [];
  patientName: string = '';
  error: string = '';
  loading: boolean = false;

  constructor(private patientService: PatientService) {}

  fetchAppointmentsByName(): void {
    if (!this.patientName.trim()) {
      this.error = 'Please enter a patient name.';
      return;
    }

    this.loading = true;
    this.error = '';

    this.patientService.getAppointmentsByPatientName(this.patientName).subscribe({
      next: (res: any) => {
        this.appointments = res.appointments || [];
        if (this.appointments.length === 0) {
          this.error = 'No appointments found for this patient.';
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching appointments:', err);
        this.error = 'Failed to load appointments. Please try again later.';
        this.loading = false;
      }
    });
  }
}