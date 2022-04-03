"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      "Meetings",
      "video_link",
      Sequelize.BOOLEAN
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn("Meetings", "video_link");
  },
};
