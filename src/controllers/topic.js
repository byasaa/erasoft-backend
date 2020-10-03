const helper = require("../helpers/response");
const topicModel = require("../models/topic");

module.exports = {
  getListTopic: async (req, res) => {
    try {
      const result = await topicModel.getTopicModel();
      if (result[0]) {
        return helper.response(res, "success", result, 200);
      }
      return helper.response(res, "Failed", "Topic Not Found", 404);
    } catch (error) {
      console.log(error);
      return helper.response(res, "Failed", "Something Wrong!", 500);
    }
  },
  getDetailTopic: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await topicModel.getDetailTopicModel(id);
      if (result[0]) {
        return helper.response(res, "success", result, 200);
      }
      return helper.response(res, "Failed", "Topic Not Found", 404);
    } catch (error) {
      console.log(error);
      return helper.response(res, "Failed", "Something Wrong!", 500);
    }
  },
  postAddTopic: async (req, res) => {
    try {
      const setData = req.body;
      const result = await topicModel.postAddTopicModel(setData);
      return helper.response(res, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(res, "Failed", "Something Wrong!", 500);
    }
  },
  updateTopic: async (req, res) => {
    try {
      const id = req.params.id;
      const setData = req.body;
      setData.updated_at = new Date();
      const result = await topicModel.updateTopicModel(setData, id);
      return helper.response(res, "success", result, 200);
    } catch (error) {
      console.log(error);
      return helper.response(res, "Failed", "Something Wrong!", 500);
    }
  },
  deleteTopic: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await topicModel.deleteTopicModel(id);
      return helper.response(res, "success", result, 200);
    } catch (error) {
      console.log(error);
      return helper.response(res, "Failed", "Something Wrong!", 500);
    }
  },
};
