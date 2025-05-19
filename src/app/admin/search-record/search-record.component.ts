import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-search-records',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './search-record.component.html',
  styleUrls: ['./search-record.component.css'],
})
export class SearchRecordsComponent implements OnInit {
  query: string = '';
  doctors: any[] = [];
  patients: any[] = [];
  staff: any[] = [];
  loading: boolean = false;
  hasSearched: boolean = false;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {}

  onSearch(): void {
    const trimmedQuery = this.query.trim();
    if (!trimmedQuery) return;

    this.loading = true;
    this.hasSearched = true;

    this.adminService.searchRecords(trimmedQuery).subscribe({
      next: (response) => {
        console.log('Search response:', response);
        this.doctors = response?.doctors || [];
        this.patients = response?.patients || [];
        this.staff = response?.staff || [];
        this.loading = false;
      },
      error: (err) => {
        console.error('Error searching records', err);
        this.doctors = [];
        this.patients = [];
        this.staff = [];
        this.loading = false;
      }
    });
  }
}
