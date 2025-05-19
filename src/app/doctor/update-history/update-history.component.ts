import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-update-history',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './update-history.component.html',
  styleUrls: ['./update-history.component.css']
})
export class UpdateHistoryComponent {
  formData = {
    patientId: null,
    doctorId: null,
    date: '',
    time: '',
    diagnosis: '',
    treatmentDetails: '',
    prescription: ''
  };

  successMessage = '';
  errorMessage = '';

  constructor(private doctorService: DoctorService) {}

  submitCombinedTreatment(): void {
    const { patientId, doctorId, date, time, diagnosis, treatmentDetails, prescription } = this.formData;

    if (!patientId || !doctorId || !date || !time || !diagnosis || !treatmentDetails || !prescription) {
      this.errorMessage = 'Please fill all required fields.';
      this.successMessage = '';
      return;
    }

    this.doctorService.updateTreatment(this.formData).subscribe({
      next: () => {
        this.successMessage = 'Treatment and appointment successfully added.';
        this.errorMessage = '';
        this.formData = {
          patientId: null,
          doctorId: null,
          date: '',
          time: '',
          diagnosis: '',
          treatmentDetails: '',
          prescription: ''
        };
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Failed to submit treatment and appointment.';
        this.successMessage = '';
      }
    });
  }
}

