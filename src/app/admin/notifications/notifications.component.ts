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
      message: 'John Doe requested an appointment with Dr. Kapoor.',
      time: '10 mins ago'
    },
    {
      type: 'Bill Generated',
      message: 'Bill generated for patient Jane Smith by Dr. Mehta.',
      time: '1 hour ago'
    },
    {
      type: 'Treatment Updated',
      message: 'Dr. Nikhil updated treatment for patient Ramesh.',
      time: 'Yesterday'
    }
  ];
}

