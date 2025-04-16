import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-treatment-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './treatment-history.component.html',
})
export class TreatmentHistoryComponent {
  treatments = [
    {
      date: '2025-03-10',
      doctor: 'Dr. Doctor 3',
      department: 'Cardiology',
      diagnosis: 'Hypertension',
      prescription: 'Amlodipine 5mg, daily',
      notes: 'Patient advised to reduce salt intake and monitor BP daily.'
    },
    {
      date: '2025-03-22',
      doctor: 'Dr. Doctor 2',
      department: 'Dermatology',
      diagnosis: 'Acne Vulgaris',
      prescription: 'Benzoyl Peroxide gel, twice daily',
      notes: 'Skin care routine discussed.'
    }
  ];
}

