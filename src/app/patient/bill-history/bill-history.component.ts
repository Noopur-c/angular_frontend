import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

interface Bill {
  id: number;
  amount: number;
  status: string;
  generatedDate: string;
  appointmentId: number;
}

interface Appointment {
  id: number;
  date: string;
  time: string;
  status: string;
  Doctor?: { name: string };
  Bill?: Bill | null;  
}

interface BillDisplay {
  appointmentDate: string;
  appointmentTime: string;
  doctorName: string;
  amount: number;
  status: string;
  generatedDate: string;
}

@Component({
  selector: 'app-bill-history',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './bill-history.component.html',
  styleUrls: ['./bill-history.component.css']
})
export class BillHistoryComponent implements OnInit {
  patientName: string = '';
  billsToDisplay: BillDisplay[] = [];
  loading = false;
  error: string = '';

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    // User triggers fetch manually
  }

  fetchBillHistoryByPatientName(): void {
    if (!this.patientName.trim()) {
      this.error = 'Please enter a patient name.';
      this.billsToDisplay = [];
      return;
    }

    this.error = '';
    this.loading = true;
    this.billsToDisplay = [];

    this.patientService.getBillsByPatientName(this.patientName).subscribe({
      next: (appointments: Appointment[]) => {
        this.loading = false;

        if (!appointments.length) {
          this.error = 'No bills found for this patient.';
          return;
        }

        appointments.forEach(appt => {
  if (appt.Bill) {
    this.billsToDisplay.push({
      appointmentDate: appt.date,
      appointmentTime: appt.time,
      doctorName: appt.Doctor?.name || 'N/A',
      amount: appt.Bill.amount,
      status: appt.Bill.status,
      generatedDate: appt.Bill.generatedDate,
    });
  }
});

        if (this.billsToDisplay.length === 0) {
          this.error = 'No bills found for this patient.';
        }
      },
      error: (err) => {
        console.error('Error fetching bill history:', err);
        this.error = 'Failed to load bill history. Please try again later.';
        this.loading = false;
      }
    });
  }
}
