import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from '../../services/admin.service';  // Import the API service to fetch data

@Component({
  selector: 'app-clinic-stats',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './clinic-stats.component.html',
  styleUrls: ['./clinic-stats.component.css']
})
export class ClinicStatsComponent implements OnInit {
  stats: any = {};  // Object to store fetched stats
  loading: boolean = true;
  errorMessage: string = '';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.fetchStats();  // Fetch stats when the component is initialized
  }

  fetchStats() {
    this.adminService.getClinicStats().subscribe({
      next: (response) => {
        this.stats = response;  // Store stats in the component
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = 'Failed to load stats. Please try again later.';  // Show error message if API call fails
      }
    });
  }
}



