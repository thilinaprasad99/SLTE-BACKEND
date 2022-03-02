const models = require("../../models");
const Constants = require("../lib/Constants");

module.exports = {
  loginAdmin: async (info, callback) => {
    try {
      const user = await models.Admin.findOne({
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
};
