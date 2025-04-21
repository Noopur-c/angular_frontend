import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { DatePipe } from '@angular/common';  // Import DatePipe

@Component({
  selector: 'app-pending-appointments',
  standalone: true,
  imports: [CommonModule],  // Ensure CommonModule is in the imports array
  providers: [DatePipe],  // Provide DatePipe
  templateUrl: './pending-appointments.component.html',
  styleUrls: ['./pending-appointments.component.css'],
})
export class PendingAppointmentsComponent {
  // Sample data
  pendingAppointments = [
    {
      appointmentId: '1',
      date: '2025-04-22',
      time: '10:00 AM',
      patient: {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+91-9876543210',
        gender: 'Male',
        age: 30,
        height: 175,
        weight: 70,
        birthday: '1995-01-15',
      },
      doctor: 'Dr. Shreya Kapoor',
      status: 'Pending',
    },
    {
      appointmentId: '2',
      date: '2025-04-23',
      time: '2:00 PM',
      patient: {
        name: 'Alice Brown',
        email: 'alice@example.com',
        phone: '+91-9876543211',
        gender: 'Female',
        age: 25,
        height: 160,
        weight: 55,
        birthday: '2000-02-25',
      },
      doctor: 'Dr. Aman Mehta',
      status: 'Pending',
    },
  ];

  // Method to accept the appointment
  acceptAppointment(appointmentId: string) {
    const appointment = this.pendingAppointments.find(
      (appt) => appt.appointmentId === appointmentId
    );
    if (appointment) {
      appointment.status = 'Accepted';
      alert(`Appointment #${appointmentId} has been accepted!`);
    }
  }

  // Method to reject the appointment
  rejectAppointment(appointmentId: string) {
    const appointment = this.pendingAppointments.find(
      (appt) => appt.appointmentId === appointmentId
    );
    if (appointment) {
      appointment.status = 'Rejected';
      alert(`Appointment #${appointmentId} has been rejected!`);
    }
  }
}
