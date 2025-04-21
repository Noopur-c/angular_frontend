import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Doctor = {
  name: string;
  times: string[];
};

type DepartmentDoctors = {
  [key: string]: Doctor[];
};


@Component({
  selector: 'app-take-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './take-appointment.component.html',
  
})



export class TakeAppointmentComponent {
  form = {
    department: '',
    doctor: '',
    date: '',
    time: ''
  };
  
  Object = Object;

  availableDoctors: DepartmentDoctors = {
    Cardiology: [
      { name: 'Dr. Arjun Reddy', times: ['10:00 AM', '2:00 PM'] },
      { name: 'Dr. Kavita Shah', times: ['11:00 AM', '4:00 PM'] }
    ],
    Neurology: [
      { name: 'Dr. Sameer Khan', times: ['9:30 AM', '1:00 PM'] },
      { name: 'Dr. Priya Iyer', times: ['10:30 AM', '3:30 PM'] }
    ],
    Orthopedics: [
      { name: 'Dr. Rahul Verma', times: ['8:00 AM', '12:00 PM'] },
      { name: 'Dr. Sneha Das', times: ['1:30 PM', '5:00 PM'] }
    ]
  };

  availableTimes: string[] = [];

submitForm() {
  console.log('Appointment booked:', this.form);
  alert(`Appointment booked successfully for ${this.form.doctor} on ${this.form.date} at ${this.form.time}`);
  
  // You can reset the form here if needed
  this.form = {
    department: '',
    doctor: '',
    date: '',
    time: ''
  };
  this.availableTimes = [];
}


  onDoctorChange() {
    const doctorList = this.availableDoctors[this.form.department];
    const selected = doctorList?.find(d => d.name === this.form.doctor);
    this.availableTimes = selected ? selected.times : [];
  }
}


