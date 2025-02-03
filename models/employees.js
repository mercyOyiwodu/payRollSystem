const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize')

class Employees extends Model {}

Employees.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    name: {
      type: DataTypes.STRING
    },
    position: {
      type: DataTypes.STRING
    },
    department: {
      type: DataTypes.STRING
    },
  },
  {
    sequelize, 
    modelName: 'Employees',
    tableName: 'employees',
    timestamps: true
  },
);

module.exports= Employees