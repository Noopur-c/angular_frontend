import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pending-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pending-appointments.component.html',
})
export class PendingAppointmentsComponent {
  pendingAppointments = [
    {
      id: 1,
      patientName: 'Patieint 1',
      date: '2025-04-15',
      time: '10:00 AM',
      symptoms: 'Chest pain',
    },
    {
      id: 2,
      patientName: 'Patient 2',
      date: '2025-04-15',
      time: '11:00 AM',
      symptoms: 'Shortness of breath',
    },
  ];

  acceptAppointment(id: number) {
    alert(`✅ Accepted appointment with ID: ${id}`);
    // remove or move appointment to another list
  }

  rejectAppointment(id: number) {
    alert(`❌ Rejected appointment with ID: ${id}`);
  }
}
