const models = require("../../models");
const Constants = require("../lib/Constants");

module.exports = {
  createArrack: async (info, callback) => {
    try {
      const createdArrack = await models.Arracks.create(info);
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: createdArrack,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  getArracks: async (info, callback) => {
    try {
      const arracks = await models.Arracks.findAll({});
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: arracks,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  updateArracks: async (info, callback) => {
    try {
      const arracksUpdate = await models.Arracks.update(
        {
          ename: info.ename,
          sname: info.sname,
          description: info.description,
          price_180: info.price_180,
          price_375: info.price_375,
          price_750: info.price_750,
          image: info.image,
        },
        {
          where: {id: info.id}
        }
      );
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: arracksUpdate,
      });
    } catch (error) {
      console.log(error);
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  deleteArracks: async (info, callback) => {
    try {
      const data = await models.Arracks.destroy(
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
};
