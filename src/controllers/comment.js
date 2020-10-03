const helper = require("../helpers/response");
const commentModel = require("../models/comment");

module.exports = {
  getListComment: async (req, res) => {
    try {
      const topic_id = req.params.topic_id;
      const result = await commentModel.getCommentModel(topic_id);
      if (result[0]) {
        return helper.response(res, "success", result, 200);
      }
      return helper.response(res, "Failed", "Comment Not Found", 404);
    } catch (error) {
      console.log(error);
      return helper.response(res, "Failed", "Something Wrong!", 500);
    }
  },
  /*   getDetailComment: async (req, res) => {
     try {
       const id = req.params.id;
       const result = await commentModel.getDetailCommentModel(id);
       if (result[0]) {
         return helper.response(res, "success", result, 200);
       }
       return helper.response(res, "Failed", "Comment Not Found", 404);
     } catch (error) {
       console.log(error);
       return helper.response(res, "Failed", "Something Wrong!", 500);
     }
  }, */
  postAddComment: async (req, res) => {
    try {
      const setData = req.body;
      const result = await commentModel.postAddCommentModel(setData);
      return helper.response(res, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(res, "Failed", "Something Wrong!", 500);
    }
  },
  updateComment: async (req, res) => {
    try {
      const id = req.params.id;
      const setData = req.body;
      setData.updated_at = new Date();
      const result = await commentModel.updateCommentModel(setData, id);
      return helper.response(res, "success", result, 200);
    } catch (error) {
      console.log(error);
      return helper.response(res, "Failed", "Something Wrong!", 500);
    }
  },
  deleteComment: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await commentModel.deleteCommentModel(id);
      return helper.response(res, "success", result, 200);
    } catch (error) {
      console.log(error);
      return helper.response(res, "Failed", "Something Wrong!", 500);
    }
  },
};
