const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize')

class Salaries extends Model {}

Salaries.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    employee_id: {
      type: DataTypes.UUID,
      references: {
        model: 'employees',
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.FLOAT
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  {
    sequelize, 
    modelName: 'Salaries',
    tableName: 'salaries',
    timestamps: true
  },
);

module.exports = Salaries;
