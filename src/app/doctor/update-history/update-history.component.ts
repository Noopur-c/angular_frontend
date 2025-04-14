import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-history.component.html',
})
export class UpdateHistoryComponent {
  patientId = '';
  diagnosis = '';
  prescription = '';
  notes = '';

  submitHistory() {
    console.log('History Updated:', {
      patientId: this.patientId,
      diagnosis: this.diagnosis,
      prescription: this.prescription,
      notes: this.notes,
    });

    alert('📝 Patient history updated successfully!');
    
    // Reset fields
    this.patientId = '';
    this.diagnosis = '';
    this.prescription = '';
    this.notes = '';
  }
}

