import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Define the type for the treatment history object
interface Treatment {
  date: string;
  diagnosis: string;
  prescription: string;
  doctor: string;
}

interface TreatmentHistory {
  [key: string]: Treatment[]; // Index signature for dynamic keys
}

@Component({
  selector: 'app-patient-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient-history.component.html',
})
export class PatientHistoryComponent {
  patientId = '';
  treatmentHistory: Treatment[] = [];
  showHistory = false;

  // Mock data with treatment history for patients
  mockHistory: TreatmentHistory = {
    '1': [
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
    '2': [
      {
        date: '2025-02-10',
        diagnosis: 'Diabetes Type 2',
        prescription: 'Metformin 500mg',
        doctor: 'Dr. Nikhil Joshi',
      },
    ],
  };

  // Fetch the treatment history based on patientId
  fetchHistory() {
    // Safely access treatment history for the patient
    this.treatmentHistory = this.mockHistory[this.patientId] || [];
    this.showHistory = true;
  }
}

