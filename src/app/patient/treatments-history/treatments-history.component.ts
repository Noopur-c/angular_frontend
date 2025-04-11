import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-treatment-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './treatments-history.component.html',
})
export class TreatmentsHistoryComponent {
  treatments = [
    {
      appointmentId: 201,
      doctor: 'Dr. Aisha Khan',
      date: 'April 1, 2025',
      diagnosis: 'Hypertension',
      prescription: 'Amlodipine 5mg daily',
      progress: 'Blood pressure under control'
    },
    {
      appointmentId: 202,
      doctor: 'Dr. Priya Sharma',
      date: 'March 25, 2025',
      diagnosis: 'Migraine',
      prescription: 'Paracetamol + lifestyle changes',
      progress: 'Reduced frequency'
    }
  ];
}

