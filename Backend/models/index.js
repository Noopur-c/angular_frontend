import sequelize from '../config/db';

import Department, { hasMany } from './department';
import Doctor, { belongsTo, hasMany as _hasMany } from './doctor';
import Patient, { hasMany as __hasMany } from './patient';
import Appointment, { belongsTo as _belongsTo, hasOne } from './appointment';
import Treatment, { belongsTo as __belongsTo } from './treatment';
import Bill, { belongsTo as ___belongsTo } from './bill';
import Feedback, { belongsTo as ____belongsTo } from './feedback';

// Associations
belongsTo(Department, { foreignKey: 'departmentId' });
hasMany(Doctor, { foreignKey: 'departmentId' });

_belongsTo(Patient, { foreignKey: 'patientId' });
_belongsTo(Doctor, { foreignKey: 'doctorId' });
__hasMany(Appointment, { foreignKey: 'patientId' });
_hasMany(Appointment, { foreignKey: 'doctorId' });

__belongsTo(Appointment, { foreignKey: 'appointmentId' });
hasOne(Treatment, { foreignKey: 'appointmentId' });

___belongsTo(Appointment, { foreignKey: 'appointmentId' });
hasOne(Bill, { foreignKey: 'appointmentId' });

____belongsTo(Appointment, { foreignKey: 'appointmentId' });
hasOne(Feedback, { foreignKey: 'appointmentId' });

export default {
  sequelize,
  Department,
  Doctor,
  Patient,
  Appointment,
  Treatment,
  Bill,
  Feedback
};

