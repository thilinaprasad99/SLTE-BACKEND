"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      "Discussions",
      "video_link",
      Sequelize.BOOLEAN
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn("Discussions", "video_link");
  },
};
