const models = require("../../models");
const Constants = require("../lib/Constants");

module.exports = {
  createUsers: async (info, callback) => {
    try {
      const createdUser = await models.Users.findOne({where: {email: info.email}}).then(user =>{
        if(!user){
           models.Users.create(info)
          callback({
            statusCode: Constants.errorStatus.SUCCESS,
            body: null,
          });
        }else {
          callback({
            statusCode: Constants.errorStatus.UNAUTHORIZED,
            body: null,
          });
        }
      })
    }catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  getUsers: async (info, callback) => {
    try {
      const users = await models.Users.findAll({});
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: users,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  loginUsers: async (info, callback) => {
    try {
      const user = await models.Users.findOne({
        where: [info],
      });

      if (user) {
        callback({
          statusCode: Constants.errorStatus.SUCCESS,
          body: user,
        });
      } else {
        callback({
          statusCode: Constants.errorStatus.UNAUTHORIZED,
          body: null,
        });
      }
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  updateUser: async (info, callback) => {
    try {
      const userUpdate = await models.Users.update(
        {
          email: info.email,
          password: info.password,
          last_name: info.last_name,
          first_name: info.first_name,
          city: info.city,
          phone: info.phone,
          role: info.role,
          subscription: info.subscription,
        },
        {
          where: {id: info.id}
        }
      );
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: userUpdate,
      });
    } catch (error) {
      console.log(error);
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  deleteUser: async (info, callback) => {
    try {
      const data = await models.Users.destroy(
        {
          where: {id: info.id}
        }
      );
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: {},
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  getUserRole: async (info, callback) => {
    try {
      const user = await models.Users.findOne({
        where: {id: info.id},
        attributes: ['role'],
      });

      if (user) {
        callback({
          statusCode: Constants.errorStatus.SUCCESS,
          body: user,
        });
      } else {
        callback({
          statusCode: Constants.errorStatus.NOT_FOUND,
          body: null,
        });
      }
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  getUserSubscription: async (info, callback) => {
    try {
      const user = await models.Users.findOne({
        where: {id: info.id},
        attributes: ['subscription'],
      });

      if (user) {
        callback({
          statusCode: Constants.errorStatus.SUCCESS,
          body: user,
        });
      } else {
        callback({
          statusCode: Constants.errorStatus.NOT_FOUND,
          body: null,
        });
      }
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

approveUser: async (info, callback) => {
    try {
      const user = await models.Users.update(
        {
          role: 1,
        },
        {
          where: { id: info.id },
        }
      );

      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: user,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

};

