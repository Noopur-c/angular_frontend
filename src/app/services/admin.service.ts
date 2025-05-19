import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:3000/api/admins';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  getUsersByRole(role: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/role/${role}`);
  }

  addUser(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-user`, data);  
  }

deleteUser(userId: string, role: string): Observable<any> {
  return this.http.delete(`${this.baseUrl}/users/${userId}?role=${role.toLowerCase()}`);
}

  getFeedbackOverview(): Observable<any> {
    return this.http.get(`${this.baseUrl}/feedback`);
  }

  getClinicStats(): Observable<any> {
    return this.http.get(`${this.baseUrl}/stats`);
  }

  getNotifications(): Observable<any> {
    return this.http.get(`${this.baseUrl}/notifications`);
  }

  searchRecords(query: string): Observable<{ doctors: any[]; patients: any[]; staff: any[] }> {
  return this.http.get<{ doctors: any[]; patients: any[]; staff: any[] }>(
    `${this.baseUrl}/search?query=${encodeURIComponent(query)}`
  );
}
}
