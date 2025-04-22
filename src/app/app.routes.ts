import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientHomeComponent } from './patient/home/home.component';
import { CurrentAppointmentComponent } from './patient/current-appointment/current-appointment.component';
import { BillHistoryComponent } from './patient/bill-history/bill-history.component';
import { TreatmentHistoryComponent } from './patient/treatment-history/treatment-history.component';
import { TakeAppointmentComponent } from './patient/take-appointment/take-appointment.component';
import { NotificationsComponent } from './patient/notifications/notifications.component';
import { FeedbackComponent } from './patient/feedback/feedback.component';
import { DoctorHomeComponent } from './doctor/home/home.component';
import { PendingAppointmentsComponent } from './doctor/pending-appointments/pending-appointments.component';
import { TodayAppointmentsComponent } from './doctor/todays-appointments/todays-appointments.component';
import { UpdateHistoryComponent } from './doctor/update-history/update-history.component';
import { GenerateBillComponent } from './doctor/generate-bill/generate-bill.component';
import { PatientHistoryComponent } from './doctor/patient-history/patient-history.component';
import { AdminHomeComponent } from './admin/dashboard/dashboard.component';
import { AdminClinicStatsComponent } from './admin/clinic-stats/clinic-stats.component';
import { UsersComponent } from './admin/users/users.component';
import { SearchRecordComponent } from './admin/search-record/search-record.component';
import { NotificationsComponent as AdminNotificationsComponent } from './admin/notifications/notifications.component';
import { FeedbackOverviewComponent } from './admin/feedback-overview/feedback-overview.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { DoctorLoginComponent } from './auth/doctor-login/doctor-login.component';
import { PatientLoginComponent } from './auth/patient-login/patient-login.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth/doctor-login', component: DoctorLoginComponent },
  { path: 'auth/patient-login', component: PatientLoginComponent },
  { path: 'patient/home', component: PatientHomeComponent },
  { path: 'patient/current-appointment', component: CurrentAppointmentComponent },
  { path: 'patient/bill-history', component: BillHistoryComponent },
  { path: 'patient/treatment-history', component: TreatmentHistoryComponent },
  { path: 'patient/take-appointment', component: TakeAppointmentComponent },
  { path: 'patient/notifications', component: NotificationsComponent },
  { path: 'patient/feedback', component: FeedbackComponent },
  { path: 'doctor/home', component: DoctorHomeComponent },
  { path: 'doctor/pending-appointments', component: PendingAppointmentsComponent },
  { path: 'doctor/todays-appointments', component: TodayAppointmentsComponent },
  { path: 'doctor/update-history', component: UpdateHistoryComponent },
  { path: 'doctor/generate-bill', component: GenerateBillComponent },
  { path: 'doctor/patient-history', component: PatientHistoryComponent },
  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'admin/stats', component: AdminClinicStatsComponent },
  { path: 'admin/users',component: UsersComponent },
{ path: 'admin/search-records', component: SearchRecordComponent },
{ path: 'admin/notifications', component: AdminNotificationsComponent },
{ path: 'admin/feedback', component: FeedbackOverviewComponent },
{ path: 'admin/add-user', component: AddUserComponent },
];