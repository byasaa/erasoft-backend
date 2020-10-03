const express = require("express");
const router = express.Router();
const topicController = require("../controllers/topic");

router
  .get("/", topicController.getListTopic)
  .get("/:id", topicController.getDetailTopic)
  .post("/", topicController.postAddTopic)
  .put("/:id", topicController.updateTopic)
  .delete("/:id", topicController.deleteTopic);

module.exports = router;
