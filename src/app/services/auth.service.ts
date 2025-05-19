import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth'; // Adjust this base URL if needed

  constructor(private http: HttpClient) {}

  loginDoctor(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/doctor`, credentials);
  }

  loginPatient(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/patient`, credentials);
  }

  loginAdmin(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/admin`, credentials);
  }
}


