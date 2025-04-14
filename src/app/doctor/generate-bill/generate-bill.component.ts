import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-generate-bill',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './generate-bill.component.html',
})
export class GenerateBillComponent {
  patientId = '';
  appointmentId = '';
  amount = '';
  remarks = '';

  generateBill() {
    console.log('Generated Bill:', {
      patientId: this.patientId,
      appointmentId: this.appointmentId,
      amount: this.amount,
      remarks: this.remarks
    });

    alert('💸 Bill generated successfully!');

    // Clear form
    this.patientId = '';
    this.appointmentId = '';
    this.amount = '';
    this.remarks = '';
  }
}

