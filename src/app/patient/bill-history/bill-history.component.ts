import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bill-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bill-history.component.html',
})
export class BillHistoryComponent {
  bills = [
    {
      appointmentId: 201,
      doctor: 'Dr. Aisha Khan',
      date: 'April 1, 2025',
      amount: 800,
      status: 'Paid'
    },
    {
      appointmentId: 202,
      doctor: 'Dr. Priya Sharma',
      date: 'March 25, 2025',
      amount: 650,
      status: 'Paid'
    }
  ];
}

