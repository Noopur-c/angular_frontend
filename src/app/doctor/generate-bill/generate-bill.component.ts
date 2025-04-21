import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Prescription {
  date: string;
  diagnosis: string;
  prescription: string;
}

interface PatientDetails {
  currentDiagnosis: string;
  currentPrescription: string;
  previousPrescriptions: Prescription[];
}

@Component({
  selector: 'app-generate-bill',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './generate-bill.component.html',
})
export class GenerateBillComponent {
  patientName: string = '';
  patientDetails: PatientDetails | null = null;
  billAmount: number = 0;
  remarks: string = '';

  // Mock data for patients
  patients: { [key: string]: PatientDetails } = {
    'AAA BBB': {
      currentDiagnosis: 'Hypertension',
      currentPrescription: 'Amlodipine 5mg',
      previousPrescriptions: [
        { date: '2024-12-15', diagnosis: 'Migraine', prescription: 'Sumatriptan' },
      ],
    },
    'Jane Smith': {
      currentDiagnosis: 'Diabetes',
      currentPrescription: 'Metformin 500mg',
      previousPrescriptions: [
        { date: '2024-10-10', diagnosis: 'Flu', prescription: 'Oseltamivir' },
      ],
    },
  };

  // Function to fetch patient details based on name
  fetchPatientDetails() {
    this.patientDetails = this.patients[this.patientName] || null;
  }

  // Function to submit the bill
  submitBill() {
    if (this.patientDetails && this.billAmount > 0) {
      // Generate bill logic (store or send to the backend)
      console.log('Bill Generated:', {
        patientName: this.patientName,
        amount: this.billAmount,
        remarks: this.remarks,
      });
    } else {
      alert('Please provide valid details and amount.');
    }
  }
}
