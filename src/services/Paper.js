const models = require("../../models");
const Constants = require("../lib/Constants");

module.exports = {
  addResult: async (info, callback) => {
    const { USER_NAME, USER_EMAIL, INDEX_NUMBER, sp, ps, psp, qt, fut } = info;
    try {
      const data = await models.Results.findOne({
        where: { quiz_title: qt, index_number: parseInt(INDEX_NUMBER) },
      });
      if (!data) {
        await models.Results.create({
          user_name: USER_NAME,
          user_email: USER_EMAIL,
          index_number: parseInt(INDEX_NUMBER),
          score: sp,
          passing_score: ps,
          passing_score_in_percentage: psp,
          quiz_title: qt,
          time_used: fut,
        });
        callback({
          statusCode: Constants.errorStatus.SUCCESS,
          body: null,
        });
      } else {
        callback({
          statusCode: Constants.errorStatus.SUCCESS,
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
