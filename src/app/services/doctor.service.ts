import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private baseUrl = 'http://localhost:3000/api/doctors'; // Update base URL as needed

  constructor(private http: HttpClient) {}

getAllAppointments(): Observable<any> {
  return this.http.get(`${this.baseUrl}/appointments`);
}

getAllPatientHistories(): Observable<any[]> {
  return this.http.get<any>('http://localhost:3000/api/doctors/patient-history').pipe(
    map(response => response.treatmentHistories)
  );
}
  // Get pending appointments for the doctor
  getPendingAppointments(doctorId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${doctorId}/pending-appointments`);
  }

  // Update appointment status (approve/reject)
  updateAppointmentStatus(appointmentId: number, status: string): Observable<any> {
  return this.http.put<any>(`${this.baseUrl}/appointment/${appointmentId}/status`, { status });
}

  // Get today's appointments for the doctor
  getTodaysAppointments(doctorId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${doctorId}/todays-appointments`);
  }

  // Update treatment for a specific appointment
 updateTreatment(data: any) {
    return this.http.post(`${this.baseUrl}/updateTreatment`, data);
  }

  // Generate bill for a specific appointment
  generateBill(appointmentId: number, billDetails: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/appointments/${appointmentId}/bill`, billDetails);
  }

  // Get patient treatment history
  getPatientHistory(doctorId: number, patientId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${doctorId}/patient-history/${patientId}`);
  }

  getAllPatients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/AllPatients`);
  }

  getTheAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/AllAppointments`);
  }
}