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





/*import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorService } from '../../services/doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent implements OnInit {
  patientHistory: any[] = [];
  errorMessage = '';
  doctorId!: number;
  patientId!: number;

  constructor(private doctorService: DoctorService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the doctorId from route params or wherever it is available
    this.doctorId = +this.route.snapshot.paramMap.get('doctorId')!;

    // Fetch patient history from backend
    this.fetchPatientHistory();
  }

  fetchPatientHistory(): void {
    this.doctorService.getPatientHistory(this.doctorId, this.patientId).subscribe({
      next: (history) => {
        this.patientHistory = history;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Failed to load patient history.';
      }
    });
  }
}*/
