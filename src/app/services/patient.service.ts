import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PatientNotification {
  appointmentStatus: string;
  billStatus: string;
  createdAt: string;
  updatedAt: string;
}
export interface Appointment {
  id: number;
  appointmentDate: string;
  Doctor: {
    id: number;
    name: string;
  };
}
@Injectable({
  providedIn: 'root',
})
export class PatientService {

  private apiUrl = 'http://localhost:3000/api/patients'; // Fixed URL with http

  constructor(private http: HttpClient) {}

  // Method to get the patient's bill history
  getBillsByPatientName(patientName: string): Observable<any[]> {
    const params = new HttpParams().set('patientName', patientName);
    return this.http.get<any[]>(`${this.apiUrl}/appointments-bills`, { params });
  }

  // Method to get the patient's current appointments
  getAppointmentsByPatientName(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/appointments/by-name/${name}`);
  }

  // Method to get the patient's treatment history
  getTreatmentHistoryByName(patientName: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/treatment-history/name/${patientName}`);
}

  // Method to submit patient feedback
  submitFeedback(feedbackData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/feedback`, feedbackData);
  }

  // Also add the method to fetch appointments by patient name:
getAppointmentsPatientName(name: string): Observable<{ appointments: Appointment[] }> {
    return this.http.get<{ appointments: Appointment[] }>(
      `${this.apiUrl}/appointments/by-name?name=${encodeURIComponent(name)}`
    );
  }

  // Method to get notifications for the patient
 getNotificationsByPatientName(patientName: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/notifications/${patientName}`);
}

  // Method to book an appointment
getDepartments(): Observable<string[]> {
  return this.http.get<string[]>('http://localhost:3000/api/departments');
}

  getDoctorsByDepartment(department: string): Observable<{ id: number; name: string }[]> {
  return this.http.get<{ id: number; name: string }[]>(`http://localhost:3000/api/doctors?department=${department}`);
}

getAvailableTimes(doctorId: number, date: string): Observable<string[]> {
  return this.http.get<string[]>(`http://localhost:3000/api/appointments/timeslots?doctorId=${doctorId}&date=${date}`);
}

  bookAppointment(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/appointments`, data);
  }

  // Method to check available appointment slots
  getAvailableSlots(department: string, doctor: string, date: string): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/appointments/available-slots`, {
      params: { department, doctor, date }
    });
  }
}
