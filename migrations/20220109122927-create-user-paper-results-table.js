"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Results", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_name: {
        type: Sequelize.STRING,
      },
      user_email: {
        type: Sequelize.STRING,
      },
      index_number: {
        type: Sequelize.STRING,
      },
      quiz_title: {
        type: Sequelize.STRING,
      },
      score: {
        type: Sequelize.INTEGER,
      },
      passing_score: {
        type: Sequelize.INTEGER,
      },
      passing_score_in_percentage: {
        type: Sequelize.INTEGER,
      },
      time_used: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Results");
  },
};
