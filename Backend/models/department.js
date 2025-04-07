import { DataTypes } from 'sequelize';
import { define } from '../config/db';

const Department = define('Department', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

export default Department;
