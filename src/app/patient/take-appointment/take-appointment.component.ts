import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Department = 'Cardiology' | 'Dermatology' | 'Neurology';

interface Doctor {
  id: number;
  name: string;
  experience: string;
  specialization: string;
}

@Component({
  selector: 'app-take-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './take-appointment.component.html',
  
})

export class TakeAppointmentComponent {
  departments: Department[] = ['Cardiology', 'Dermatology', 'Neurology'];

  doctors: Record<Department, Doctor[]> = {
    Cardiology: [
      { id: 1, name: 'Dr. Aisha Khan', experience: '10 years', specialization: 'Heart Specialist' }
    ],
    Dermatology: [
      { id: 2, name: 'Dr. Rohan Mehta', experience: '6 years', specialization: 'Skin & Hair' }
    ],
    Neurology: [
      { id: 3, name: 'Dr. Priya Sharma', experience: '8 years', specialization: 'Brain & Spine' }
    ]
  };

  slots: Record<number, string[]> = {
    1: ['10:00 AM', '11:30 AM', '2:00 PM'],
    2: ['9:30 AM', '1:00 PM', '3:30 PM'],
    3: ['10:15 AM', '12:45 PM', '4:00 PM']
  };

  selectedDept: Department | null = null;
  selectedDoctor: Doctor | null = null;
  selectedSlot: string | null = null;

  get doctorsList(): Doctor[] {
    return this.selectedDept ? this.doctors[this.selectedDept] : [];
  }

  handleSubmit() {
    if (this.selectedDoctor && this.selectedSlot) {
      alert(
        `Appointment requested with ${this.selectedDoctor.name} at ${this.selectedSlot}`
      );
    }
  }
}


