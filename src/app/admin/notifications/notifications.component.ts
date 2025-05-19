import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-notifications',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
})
export class NotificationsComponent implements OnInit {
  notifications: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.loadNotifications();
  }

  loadNotifications() {
    this.adminService.getNotifications().subscribe({
      next: (response) => {
        this.notifications = response;
      },
      error: (err) => {
        console.error('Error loading notifications', err);
      },
    });
  }
}

