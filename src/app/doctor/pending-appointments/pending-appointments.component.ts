import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-pending-appointments',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './pending-appointments.component.html',
  styleUrls: ['./pending-appointments.component.css'],
  providers: [DoctorService]
})
export class PendingAppointmentsComponent implements OnInit {
  appointments: any[] = [];
  error: string = '';

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.doctorService.getAllAppointments().subscribe({
      next: (res) => {
        this.appointments = res;
      },
      error: (err) => {
        this.error = 'Failed to load appointments.';
        console.error(err);
      }
    });
  }
}



/*import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pending-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pending-appointments.component.html',
  styleUrls: ['./pending-appointments.component.css']
})
export class PendingAppointmentsComponent implements OnInit {
  pendingAppointments: any[] = [];
  errorMessage = '';
  doctorId!: number;

  constructor(private doctorService: DoctorService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the doctorId from route params or wherever it is available
    this.doctorId = +this.route.snapshot.paramMap.get('doctorId')!;

    // Fetch pending appointments from the backend
    this.fetchPendingAppointments();
  }

  fetchPendingAppointments(): void {
    this.doctorService.getPendingAppointments(this.doctorId).subscribe({
      next: (appointments) => {
        this.pendingAppointments = appointments;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Failed to load pending appointments.';
      }
    });
  }

  approveAppointment(appointmentId: number): void {
  this.doctorService.updateAppointmentStatus(appointmentId, 'approved').subscribe({
    next: () => {
      this.fetchPendingAppointments(); // Refresh the list
      alert('Appointment approved');
    },
    error: (err) => {
      console.error(err);
      alert('Error approving appointment');
    }
  });
}

rejectAppointment(appointmentId: number): void {
  this.doctorService.updateAppointmentStatus(appointmentId, 'rejected').subscribe({
    next: () => {
      this.fetchPendingAppointments(); // Refresh the list
      alert('Appointment rejected');
    },
    error: (err) => {
      console.error(err);
      alert('Error rejecting appointment');
    }
  });
}

}*/

