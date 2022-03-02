'use strict'

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Discussions', // table name
        'attachment', // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),


    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('Discussions', 'attachment'),
    ]);
  },
};
