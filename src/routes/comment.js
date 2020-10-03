const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment");

router
  .get("/:topic_id", commentController.getListComment)
  //   .get("/:id", commentController.getDetailComment)
  .post("/", commentController.postAddComment)
  .put("/:id", commentController.updateComment)
  .delete("/:id", commentController.deleteComment);

module.exports = router;
