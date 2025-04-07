import { DataTypes } from 'sequelize';
import { define } from '../config/db';
import Department, { hasMany } from './department';

const Doctor = define('Doctor', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  specialization: {
    type: DataTypes.STRING,
    allowNull: false
  },
  availability: {
    type: DataTypes.JSON, // example: { mon: ["10:00", "12:00"], tue: ["14:00"] }
    allowNull: true
  }
});

// Associate Doctor -> Department
Doctor.belongsTo(Department, { foreignKey: 'departmentId' });
hasMany(Doctor, { foreignKey: 'departmentId' });

export default Doctor;
