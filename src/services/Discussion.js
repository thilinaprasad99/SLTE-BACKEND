const { sequelize } = require("../../models");
const models = require("../../models");
const Constants = require("../lib/Constants");

module.exports = {
  getDiscussions: async (info, callback) => {
    try {
      const query =
        "SELECT * FROM Discussions INNER JOIN Results ON Discussions.quiz_title = Results.quiz_title WHERE Results.index_number =:userId ORDER BY Discussions.id ASC";
      const data = await sequelize.query(query, {
        replacements: {
          userId: info.id,
        },
        type: sequelize.QueryTypes.SELECT,
      });

      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: data,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },
};
