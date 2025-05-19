import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-treatment-history',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './treatment-history.component.html',
  styleUrls: ['./treatment-history.component.css']
})
export class TreatmentHistoryComponent implements OnInit {
  treatments: any[] = [];
  patientName: string = '';
  error: string = '';
  searched: boolean = false;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    // Optionally auto-load if patientName is known
  }

  fetchTreatmentHistory(): void {
    this.searched = true;
    this.error = '';
    this.treatments = [];

    if (!this.patientName.trim()) {
      this.error = 'Please enter a valid patient name.';
      return;
    }

    this.patientService.getTreatmentHistoryByName(this.patientName).subscribe({
      next: (treatments) => {
        this.treatments = treatments;
      },
      error: (err) => {
        console.error('Error fetching treatment history:', err);
        this.error = 'Failed to load treatment history. Please try again later.';
      }
    });
  }
}