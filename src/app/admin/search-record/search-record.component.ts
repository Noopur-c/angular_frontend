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
    { id: 'P001', name: 'Patient 1', age: 30, email: 'aaaPatient1@example.com' },
    { id: 'P002', name: 'Patient 2', age: 25, email: 'bbbPatent2@example.com' }
  ];

  mockDoctors = [
    { id: 'D001', name: 'Dr. Doctor 1', specialization: 'Cardiology' },
    { id: 'D002', name: 'Dr. Doctor 2', specialization: 'Neurology' }
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

