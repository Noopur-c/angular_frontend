import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from '../../services/admin.service'; // Make sure this is the correct path

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './feedback-overview.component.html',
  styleUrls: ['./feedback-overview.component.css'],
})
export class FeedbackOverviewComponent implements OnInit {
  feedbackList: any[] = [];
  errorMessage: string = '';

  constructor(private admin: AdminService) {}

  ngOnInit(): void {
    // Fetch all feedback on component load
    this.getFeedback();
  }

  // Get all feedback from the backend
  getFeedback() {
    this.admin.getFeedbackOverview().subscribe({
      next: (response) => {
        this.feedbackList = response;  // Assuming the response is an array of feedback
      },
      error: (err) => {
        console.error('Error fetching feedback', err);
        this.errorMessage = 'Failed to load feedback. Please try again later.';
      }
    });
  }
}
