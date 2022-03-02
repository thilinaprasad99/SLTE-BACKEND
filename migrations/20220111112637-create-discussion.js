'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Discussions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quiz_title: {
        type: Sequelize.STRING,
      },
      discussion_name: {
        type: Sequelize.STRING
      },
      discussion_description: {
        type: Sequelize.TEXT('long')
      },
      start_date: {
        type: Sequelize.DATEONLY
      },
      start_time: {
        type: Sequelize.STRING
      },
      discussion_duration: {
        type: Sequelize.STRING
      },
      discussion_id: {
        type: Sequelize.BIGINT
      },
      discussion_passcode: {
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
    await queryInterface.dropTable('Discussions');
  }
};