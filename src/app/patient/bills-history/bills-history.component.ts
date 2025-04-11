import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bills-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bills-history.component.html',
})
export class BillsHistoryComponent {
  bills = [
    {
      id: 'B001',
      doctor: 'Dr. Aisha Khan',
      department: 'Cardiology',
      date: '2025-03-15',
      amount: 1200,
      status: 'Paid'
    },
    {
      id: 'B002',
      doctor: 'Dr. Rohan Mehta',
      department: 'Dermatology',
      date: '2025-03-28',
      amount: 850,
      status: 'Paid'
    },
    {
      id: 'B003',
      doctor: 'Dr. Priya Sharma',
      department: 'Neurology',
      date: '2025-04-01',
      amount: 1500,
      status: 'Pending'
    }
  ];
}

