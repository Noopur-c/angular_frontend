import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback.component.html',
})
export class FeedbackComponent {
  completedAppointments = [
    {
      id: 101,
      doctor: 'Dr. Doctor 2',
      date: 'April 9, 2025',
      feedbackGiven: false,
      rating: 0,
      comment: ''
    },
    {
      id: 102,
      doctor: 'Dr. Doctor 3',
      date: 'April 5, 2025',
      feedbackGiven: false,
      rating: 0,
      comment: ''
    }
  ];

  submitFeedback(appointment: any) {
    if (appointment.rating > 0) {
      appointment.feedbackGiven = true;
      alert(`Feedback submitted for ${appointment.doctor} ⭐️ ${appointment.rating}`);
      // Later: POST to backend
    } else {
      alert('Please provide a rating before submitting.');
    }
  }
}

