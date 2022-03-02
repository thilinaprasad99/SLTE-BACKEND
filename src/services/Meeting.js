const models = require("../../models");
const Constants = require("../lib/Constants");

module.exports = {
  createMeeting: async (info, callback) => {
    try {
      const createdMeeting = await models.Meeting.create(info);
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: createdMeeting,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  getMeeting: async (info, callback) => {
    try {
      const Meetings = await models.Meeting.findOne({});
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: Meetings,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  getAllMeetings: async (info, callback) => {
    try {
      const Meetings = await models.Meeting.findAll({
        order: [["id", "DESC"]],
      });
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: Meetings,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  updateMeeting: async (info, callback) => {
    try {
      const meetingUpdate = await models.Meeting.update(
        {
          meeting_topik: info.meeting_topik,
          meeting_description: info.meeting_description,
          start_date: info.start_date,
          start_time: info.start_time,
          meeting_duration: info.meeting_duration,
          meeting_id: info.meeting_id,
          meeting_passcode: info.meeting_passcode,
          subscription: info.subscription,
        },
        {
          where: { id: info.id },
        }
      );
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: meetingUpdate,
      });
    } catch (error) {
      console.log(error);
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  deleteMeeting: async (info, callback) => {
    try {
      const data = await models.Meeting.destroy({
        where: { id: info.id },
      });
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
