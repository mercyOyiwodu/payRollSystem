const {Sequelize} =require('sequelize')

const sequelize = new Sequelize('payRollSystem', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  });

  module.exports=sequelize