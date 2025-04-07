import { Router } from 'express';
const router = Router();
import { getProfile, getCurrentAppointment, getBillHistory, getTreatmentHistory, requestAppointment, leaveFeedback } from '../controllers/patientController';

// Profile
router.get('/:patientId/profile', getProfile);

// Current appointment
router.get('/:patientId/current-appointment', getCurrentAppointment);

// Bill history
router.get('/:patientId/bills', getBillHistory);

// Treatment history
router.get('/:patientId/treatments', getTreatmentHistory);

// Request appointment
router.post('/:patientId/request-appointment', requestAppointment);

// Leave feedback
router.post('/:patientId/feedback', leaveFeedback);

export default router;
