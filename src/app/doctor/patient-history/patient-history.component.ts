import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient-history.component.html',
})
export class PatientHistoryComponent {
  patientName = '';
  selectedPatient: any = null;
  showHistory = false;

  mockPatients = {
    'John Doe': {
      name: 'John Doe',
      age: 32,
      occupation: 'Software Engineer',
      consultations: [
        {
          date: '2024-12-15',
          diagnosis: 'Hypertension',
          prescription: 'Amlodipine 5mg',
          doctor: 'Dr. Shreya Kapoor',
        },
        {
          date: '2025-01-20',
          diagnosis: 'Migraine',
          prescription: 'Sumatriptan',
          doctor: 'Dr. Aman Mehta',
        },
      ],
    },
    'Jane Smith': {
      name: 'Jane Smith',
      age: 28,
      occupation: 'Teacher',
      consultations: [
        {
          date: '2025-02-10',
          diagnosis: 'Diabetes Type 2',
          prescription: 'Metformin 500mg',
          doctor: 'Dr. Nikhil Joshi',
        },
      ],
    },
  };

  fetchHistory() {
    this.selectedPatient = (this.mockPatients as any)[this.patientName] || null;
    this.showHistory = true;
  }
}


