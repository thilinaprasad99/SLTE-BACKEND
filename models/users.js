'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    last_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    city: DataTypes.STRING,
    phone: DataTypes.STRING,
    role: DataTypes.INTEGER,
    subscription: DataTypes.ENUM('Day', 'Night')
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};