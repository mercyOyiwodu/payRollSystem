'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('salaries', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      employee_id: {
        type: Sequelize.UUID,
        references: {
          model: 'employees',
          key: 'id'
        }
      },
      amount: {
        type: Sequelize.FLOAT
      },
      month: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('salaries');
  }
};
