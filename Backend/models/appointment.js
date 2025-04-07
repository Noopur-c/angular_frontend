import { DataTypes } from 'sequelize';
import { define } from '../config/db';
import Patient, { hasMany } from './patient';
import Doctor, { hasMany as _hasMany } from './doctor';

const Appointment = define('Appointment', {
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  time: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('pending', 'approved', 'rejected', 'completed'),
    defaultValue: 'pending'
  }
});

// Associations
Appointment.belongsTo(Patient, { foreignKey: 'patientId' });
Appointment.belongsTo(Doctor, { foreignKey: 'doctorId' });
hasMany(Appointment, { foreignKey: 'patientId' });
_hasMany(Appointment, { foreignKey: 'doctorId' });

export default Appointment;
