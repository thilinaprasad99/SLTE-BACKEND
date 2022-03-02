'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Meetings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      meeting_topik: {
        type: Sequelize.STRING
      },
      meeting_description: {
        type: Sequelize.TEXT('long')
      },
      start_date: {
        type: Sequelize.DATEONLY
      },
      start_time: {
        type: Sequelize.STRING
      },
      meeting_duration: {
        type: Sequelize.STRING
      },
      meeting_id: {
        type: Sequelize.BIGINT
      },
      meeting_passcode: {
        type: Sequelize.STRING
      },
      subscription: {
        allowNull: true,
        type: Sequelize.ENUM('Day', 'Night'),
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Meetings');
  }
};