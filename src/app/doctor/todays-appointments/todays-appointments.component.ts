import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DoctorService } from '../../services/doctor.service';
import { ActivatedRoute } from '@angular/router';

interface Appointment {
  id: number;
  date: string;
  time: string;
  status: string;
  Doctor?: {
    name: string;
  };
  Patient?: {
    name: string;
  };
}

@Component({
  selector: 'app-todays-appointments',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './todays-appointments.component.html',
  styleUrls: ['./todays-appointments.component.css']
})
export class TodaysAppointmentsComponent implements OnInit {
  doctorId: number = 1;  // Replace with dynamic ID if needed
  appointments: Appointment[] = [];
  error: string = '';

  constructor(private doctorService: DoctorService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Uncomment if you want to get doctorId dynamically from the URL
    // const idParam = this.route.snapshot.paramMap.get('doctorId');
    // if (idParam) this.doctorId = Number(idParam);

    this.doctorService.getTodaysAppointments(this.doctorId).subscribe({
      next: (data: Appointment[]) => {
        this.appointments = data;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Failed to load today\'s appointments.';
      }
    });
  }
}