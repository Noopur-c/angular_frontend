import { DataTypes } from 'sequelize';
import { define } from '../config/db';
import Appointment, { hasOne } from './appointment';

const Treatment = define('Treatment', {
  disease: {
    type: DataTypes.STRING,
    allowNull: false
  },
  prescription: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  progress: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

// 1-to-1 with Appointment
Treatment.belongsTo(Appointment, { foreignKey: 'appointmentId' });
hasOne(Treatment, { foreignKey: 'appointmentId' });

export default Treatment;
