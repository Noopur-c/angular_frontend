import { DataTypes } from 'sequelize';
import { define } from '../config/db';
import Appointment, { hasOne } from './appointment';

const Bill = define('Bill', {
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  details: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  dateIssued: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  }
});

// 1-to-1 with Appointment
Bill.belongsTo(Appointment, { foreignKey: 'appointmentId' });
hasOne(Bill, { foreignKey: 'appointmentId' });

export default Bill;
