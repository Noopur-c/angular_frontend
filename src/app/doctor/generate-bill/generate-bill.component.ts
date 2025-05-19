import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-generate-bill',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './generate-bill.component.html',
  styleUrls: ['./generate-bill.component.css']
})
export class GenerateBillComponent implements OnInit {
  appointments: any[] = [];
  patients: any[] = [];
  selectedAppointmentId: number | null = null;
  amount: number = 0;
  notes: string = '';
  successMessage = '';
  errorMessage = '';

  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    this.loadPatients();
    this.loadAppointments();
  }

  loadPatients() {
    this.doctorService.getAllPatients().subscribe({
      next: (data) => {
        this.patients = data;
      },
      error: (err) => {
        console.error('Failed to load patients', err);
      }
    });
  }

  loadAppointments() {
    this.doctorService.getTheAppointments().subscribe({
      next: (data) => {
        this.appointments = data;
      },
      error: (err) => {
        console.error('Failed to load appointments', err);
      }
    });
  }

  // Helper to get patient name by patientId
  getPatientName(patientId: number) {
    const patient = this.patients.find(p => p.id === patientId);
    return patient ? patient.name : 'Unknown';
  }

  submitBill() {
    if (!this.selectedAppointmentId || !this.amount) {
      this.errorMessage = 'Appointment and amount are required.';
      return;
    }

    const billDetails = {
      amount: this.amount,
      notes: this.notes
    };

    this.doctorService.generateBill(this.selectedAppointmentId, billDetails).subscribe({
      next: () => {
        this.successMessage = 'Bill generated successfully!';
        this.errorMessage = '';
        // Reset form
        this.selectedAppointmentId = null;
        this.amount = 0;
        this.notes = '';
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Failed to generate bill.';
        this.successMessage = '';
      }
    });
  }
}
