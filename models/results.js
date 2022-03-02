'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Results extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Results.init({
    user_name: DataTypes.STRING,
    user_email: DataTypes.STRING,
    index_number: DataTypes.STRING,
    quiz_title: DataTypes.STRING,
    score: DataTypes.INTEGER,
    passing_score: DataTypes.INTEGER,
    passing_score_in_percentage: DataTypes.INTEGER,
    time_used: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Results',
  });
  return Results;
};