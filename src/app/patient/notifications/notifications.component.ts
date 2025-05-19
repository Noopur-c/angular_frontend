import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PatientService } from '../../services/patient.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: any[] = [];
  patientName: string = '';
  error: string = '';

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const trimmedName = this.patientName.trim();
    if (!trimmedName) {
      this.error = 'Please enter a patient name.';
      return;
    }

    this.error = '';
    this.patientService.getNotificationsByPatientName(trimmedName).subscribe({
      next: (notifications) => {
        this.notifications = notifications;
      },
      error: (err) => {
        console.error('Error fetching notifications:', err);
        this.error = err.error?.error || 'Failed to load notifications. Please try again later.';
      }
    });
  }
}

