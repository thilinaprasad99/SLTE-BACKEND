"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Meeting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Meeting.init(
    {
      meeting_topik: DataTypes.STRING,
      meeting_description: DataTypes.STRING,
      start_date: DataTypes.DATEONLY,
      start_time: DataTypes.STRING,
      meeting_duration: DataTypes.STRING,
      meeting_id: DataTypes.BIGINT,
      meeting_passcode: DataTypes.STRING,
      subscription: DataTypes.ENUM("Day", "Night"),
      video_link: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Meeting",
    }
  );
  return Meeting;
};
