import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-patient-history',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css'],
  providers: [DoctorService]
})
export class PatientHistoryComponent implements OnInit {
  patientHistory: any[] = [];
  errorMessage = '';

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.fetchAllTreatmentHistory();
  }

  fetchAllTreatmentHistory(): void {
    this.doctorService.getAllPatientHistories().subscribe({
      next: (data) => {
        this.patientHistory = data;
      },
      error: (err) => {
        console.error('Failed to load patient treatment history', err);
        this.errorMessage = 'Unable to fetch treatment data.';
      }
    });
  }
}