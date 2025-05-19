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