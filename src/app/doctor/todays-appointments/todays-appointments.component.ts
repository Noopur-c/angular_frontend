import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { DatePipe } from '@angular/common';  // Import DatePipe

@Component({
  selector: 'app-today-appointments',
  standalone: true,
  imports: [CommonModule],  // Ensure CommonModule is in the imports array
  providers: [DatePipe],  // Provide DatePipe
  templateUrl: './todays-appointments.component.html',
  styleUrls: ['./todays-appointments.component.css'],
})
export class TodayAppointmentsComponent {
  // Sample data for today's appointments
  todayAppointments = [
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
      status: 'Confirmed',
      previousDiagnosis: [
        { diagnosis: 'Hypertension', date: '2024-12-15', prescription: 'Amlodipine 5mg' },
        { diagnosis: 'Migraine', date: '2025-01-20', prescription: 'Sumatriptan' },
      ],
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
      status: 'Confirmed',
      previousDiagnosis: [
        { diagnosis: 'Diabetes Type 2', date: '2025-02-10', prescription: 'Metformin 500mg' },
      ],
    },
  ];

  // Method to handle actions if needed (e.g., for confirming or completing the appointment)
  handleAppointmentAction(appointmentId: string, action: string) {
    const appointment = this.todayAppointments.find(
      (appt) => appt.appointmentId === appointmentId
    );
    if (appointment) {
      alert(`Appointment #${appointmentId} has been ${action}.`);
    }
  }
}

