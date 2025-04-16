import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
})
export class NotificationsComponent {
  notifications = [
    {
      type: 'Appointment Request',
      message: 'Patient 2 requested an appointment with Dr. Doctor 3.',
      time: '10 mins ago'
    },
    {
      type: 'Bill Generated',
      message: 'Bill generated for patient 4 by Dr. Doctor 1.',
      time: '1 hour ago'
    },
    {
      type: 'Treatment Updated',
      message: 'Dr. Doctor 1 updated treatment for patient 3.',
      time: 'Yesterday'
    }
  ];
}

