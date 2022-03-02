const models = require("../../models");
const Constants = require("../lib/Constants");

module.exports = {
  createPosts: async (info, callback) => {
    try {
      const createdPosts = await models.Posts.create(info);
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: createdPosts,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  getPost: async (info, callback) => {
    try {
      const Posts = await models.Posts.findAll({order:[['id','DESC']]});
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: Posts,
      });
    } catch (error) {
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  updatePosts: async (info, callback) => {
    try {
      const postsUpdate = await models.Posts.update(
        {
          title: info.title,
          description: info.description,
          coverImage: info.coverImage,
          attachment: info.attachment
        },
        {
          where: {id: info.id}
        }
      );
      callback({
        statusCode: Constants.errorStatus.SUCCESS,
        body: postsUpdate,
      });
    } catch (error) {
      console.log(error);
      callback({
        statusCode: Constants.errorStatus.SERVER_ERROR,
        body: error,
      });
    }
  },

  deletePosts: async (info, callback) => {
    try {
      const data = await models.Posts.destroy(
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

