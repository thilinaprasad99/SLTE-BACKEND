"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      subscription: {
        allowNull: true,
        type: Sequelize.ENUM('Day', 'Night'),
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
    await queryInterface.dropTable("Users");
  },
};
