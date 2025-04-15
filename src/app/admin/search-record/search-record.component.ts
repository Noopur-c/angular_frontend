import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-record',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-record.component.html',
})
export class SearchRecordComponent {
  searchTerm = '';
  searchType = 'patient';
  results: any[] = [];
  showResults = false;

  mockPatients = [
    { id: 'P001', name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 'P002', name: 'Jane Smith', age: 25, email: 'jane@example.com' }
  ];

  mockDoctors = [
    { id: 'D001', name: 'Dr. Shreya Kapoor', specialization: 'Cardiology' },
    { id: 'D002', name: 'Dr. Aman Mehta', specialization: 'Neurology' }
  ];

  search() {
    const term = this.searchTerm.toLowerCase();
    const data = this.searchType === 'patient' ? this.mockPatients : this.mockDoctors;
    this.results = data.filter(item =>
      item.name.toLowerCase().includes(term) || item.id.toLowerCase().includes(term)
    );
    this.showResults = true;
  }
}

