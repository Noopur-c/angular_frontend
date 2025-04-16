import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback-overview.component.html',
})
export class FeedbackOverviewComponent {
  feedbackList = [
    {
      patient: 'Patient 1',
      rating: 5,
      comments: 'Excellent service and friendly staff!',
      date: '2025-04-10',
    },
    {
      patient: 'Patient 3',
      rating: 3,
      comments: 'Wait time was a bit long, but doctor was helpful.',
      date: '2025-04-08',
    },
    {
      patient: 'Patient 2',
      rating: 4,
      comments: 'Smooth appointment process.',
      date: '2025-04-05',
    }
  ];
}
