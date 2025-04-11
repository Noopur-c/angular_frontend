// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PatientHomeComponent } from './patient/home/home.component';
import { CurrentAppointmentComponent } from './patient/current-appointment/current-appointment.component';
import { BillsHistoryComponent } from './patient/bills-history/bills-history.component';
import { TreatmentHistoryComponent } from './patient/treatment-history/treatment-history.component';
import { TakeAppointmentComponent } from './patient/take-appointment/take-appointment.component';
import { NotificationsComponent } from './patient/notifications/notifications.component';
import { BillHistoryComponent } from './patient/bill-history/bill-history.component';
import { TreatmentsHistoryComponent } from './patient/treatments-history/treatments-history.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'patient/home', component: PatientHomeComponent },
  { path: 'patient/appointment', component: CurrentAppointmentComponent },
  { path: 'patient/bills', component: BillsHistoryComponent },
  { path: 'patient/treatments', component: TreatmentHistoryComponent },
  { path: 'patient/appointment/request', component: TakeAppointmentComponent },
  { path: 'patient/notifications', component: NotificationsComponent },
  { path: 'patient/bills', component: BillHistoryComponent },
{ path: 'patient/treatments', component: TreatmentsHistoryComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

