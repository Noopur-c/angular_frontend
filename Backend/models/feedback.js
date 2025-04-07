import { DataTypes } from 'sequelize';
import { define } from '../config/db';
import Appointment, { hasOne } from './appointment';

const Feedback = define('Feedback', {
  rating: {
    type: DataTypes.INTEGER,
    validate: { min: 1, max: 5 },
    allowNull: false
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

// 1-to-1 with Appointment
Feedback.belongsTo(Appointment, { foreignKey: 'appointmentId' });
hasOne(Feedback, { foreignKey: 'appointmentId' });

export default Feedback;
