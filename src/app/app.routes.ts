import { Routes } from '@angular/router';
import { PatientHomeComponent } from './patient/home/home.component';
import { CurrentAppointmentComponent } from './patient/current-appointment/current-appointment.component';
import { BillHistoryComponent } from './patient/bill-history/bill-history.component';
import { TreatmentHistoryComponent } from './patient/treatment-history/treatment-history.component';
import { TakeAppointmentComponent } from './patient/take-appointment/take-appointment.component';
import { NotificationsComponent } from './patient/notifications/notifications.component';
import { FeedbackComponent } from './patient/feedback/feedback.component';
import { DoctorHomeComponent } from './doctor/home/home.component';
import { PendingAppointmentsComponent } from './doctor/pending-appointments/pending-appointments.component';
import { TodaysAppointmentsComponent } from './doctor/todays-appointments/todays-appointments.component';
import { UpdateHistoryComponent } from './doctor/update-history/update-history.component';
import { GenerateBillComponent } from './doctor/generate-bill/generate-bill.component';
import { PatientHistoryComponent } from './doctor/patient-history/patient-history.component';

export const routes: Routes = [
  { path: '', redirectTo: 'doctor/home', pathMatch: 'full' },
  { path: 'patient/home', component: PatientHomeComponent },
  { path: 'patient/current-appointment', component: CurrentAppointmentComponent },
  { path: 'patient/bill-history', component: BillHistoryComponent },
  { path: 'patient/treatment-history', component: TreatmentHistoryComponent },
  { path: 'patient/take-appointment', component: TakeAppointmentComponent },
  { path: 'patient/notifications', component: NotificationsComponent },
  { path: 'patient/feedback', component: FeedbackComponent },
  { path: 'doctor/home', component: DoctorHomeComponent },
  { path: 'doctor/pending-appointments', component: PendingAppointmentsComponent },
  { path: 'doctor/todays-appointments', component: TodaysAppointmentsComponent },
  { path: 'doctor/update-history', component: UpdateHistoryComponent },
  { path: 'doctor/generate-bill', component: GenerateBillComponent },
  { path: 'doctor/patient-history', component: PatientHistoryComponent },
];

