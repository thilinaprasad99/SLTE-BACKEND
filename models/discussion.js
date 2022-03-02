'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Discussion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Discussion.init({
    discussion_name: DataTypes.STRING,
    discussion_description: DataTypes.STRING,
    start_date: DataTypes.DATEONLY,
    start_time: DataTypes.STRING,
    discussion_duration: DataTypes.STRING,
    discussion_id: DataTypes.BIGINT,
    discussion_passcode: DataTypes.STRING,
    quiz_title: DataTypes.STRING,
    subscription: DataTypes.ENUM('Day', 'Night')
  }, {
    sequelize,
    modelName: 'Discussion',
  });
  return Discussion;
};