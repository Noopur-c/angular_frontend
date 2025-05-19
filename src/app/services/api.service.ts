import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api'; 

  constructor(private http: HttpClient) {}

  // Fetch doctors
  getDoctors(): Observable<any> {
    return this.http.get(`${this.apiUrl}/doctors`);
  }

  // Fetch patients
  getPatients(): Observable<any> {
    return this.http.get(`${this.apiUrl}/patients`);
  }

  // Add a doctor
  addDoctor(doctor: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/doctors`, doctor);
  }

  // Add a patient
  addPatient(patient: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/patients`, patient);
  }
}
