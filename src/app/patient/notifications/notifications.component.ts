import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
})
export class NotificationsComponent {
  notifications = [
    {
      message: 'Your appointment with Dr. Aisha Khan has been approved.',
      status: 'approved',
      time: 'April 10, 2025 - 11:00 AM'
    },
    {
      message: 'Your appointment with Dr. Priya Sharma has been rejected.',
      status: 'rejected',
      time: 'April 9, 2025 - 03:15 PM'
    }
  ];
}
